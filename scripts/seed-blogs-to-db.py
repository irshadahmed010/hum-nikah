"""
Pushes the generated blog posts into the live Supabase `blogs` table.

Because the deployed CSS does not yet contain the `.blog-body` rules (Tailwind's
preflight strips list bullets and table borders), each post's stored HTML is
wrapped in a `.hn-blog` div carrying its own scoped <style> block, so the post
renders correctly on the live site with no code deploy. Once the real CSS ships,
re-run with --no-inline-style to drop the block.

Usage:
    node scripts/extract-blog-posts.cjs          # writes .seed-blogs.json
    python scripts/seed-blogs-to-db.py [--no-inline-style]
"""
import json
import re
import sys
from datetime import datetime
from pathlib import Path

import psycopg2
from psycopg2.extras import Json

ROOT = Path(__file__).resolve().parent.parent
MARKER = "hn-blog"

# Mirrors the .blog-body rules in src/app/globals.css, scoped to .hn-blog.
SCOPED_CSS = """
.hn-blog{color:#333;line-height:1.75}
.hn-blog h2{font-family:var(--font-playfair-display),serif;font-weight:700;font-size:1.6rem;line-height:1.25;margin:2.2rem 0 .9rem;scroll-margin-top:6rem;color:#1D184C}
.hn-blog h3{font-family:var(--font-playfair-display),serif;font-weight:700;font-size:1.2rem;margin:1.6rem 0 .6rem;color:#1D184C}
.hn-blog p{margin:0 0 1rem}
.hn-blog ul,.hn-blog ol{margin:0 0 1.1rem;padding-left:1.5rem}
.hn-blog ul{list-style:disc}
.hn-blog ol{list-style:decimal}
.hn-blog li{margin:.35rem 0;display:list-item}
.hn-blog a{color:#8F6B38;font-weight:600;text-decoration:underline;text-underline-offset:2px}
.hn-blog a:hover{color:#1D184C}
.hn-blog strong{font-weight:700;color:#1D184C}
.hn-blog table{width:100%;border-collapse:collapse;margin:1.2rem 0 1.6rem;font-size:.9rem;display:block;overflow-x:auto}
.hn-blog th,.hn-blog td{border:1px solid #e5dccd;padding:.55rem .7rem;text-align:left;vertical-align:top}
.hn-blog th{background:#faf6f0;font-weight:700}
.hn-blog pre{background:#faf6f0;border:1px solid #e5dccd;border-radius:.75rem;padding:1rem 1.1rem;margin:1rem 0 1.4rem;overflow-x:auto;font-size:.82rem;line-height:1.6}
.hn-blog pre code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;white-space:pre}
.hn-blog .blog-toc{background:#faf6f0;border:1px solid #e5dccd;border-radius:.9rem;padding:1rem 1.25rem;margin:1.2rem 0 1.6rem}
.hn-blog .blog-toc p{margin:0 0 .4rem}
.hn-blog .blog-toc ul{margin-bottom:0}
""".strip()


def wrap(html: str) -> str:
    if MARKER in html:
        return html
    return f'<div class="{MARKER}"><style>{SCOPED_CSS}</style>\n{html}\n</div>'


def main() -> None:
    inline_style = "--no-inline-style" not in sys.argv

    seed = ROOT / ".seed-blogs.json"
    if not seed.exists():
        sys.exit("Run `node scripts/extract-blog-posts.cjs` first.")
    posts = json.loads(seed.read_text(encoding="utf-8"))

    env = (ROOT / ".env").read_text(encoding="utf-8")
    m = re.search(r"^DATABASE_URL=(.*)$", env, re.M)
    if not m:
        sys.exit("DATABASE_URL missing from .env")

    conn = psycopg2.connect(m.group(1).strip(), connect_timeout=20)
    cur = conn.cursor()
    try:
        for col, typ in [("seoTitle", "text"), ("seoDescription", "text"),
                         ("imageAlt", "text"), ("primaryKeyword", "text"), ("faqs", "jsonb")]:
            cur.execute(f'alter table public.blogs add column if not exists "{col}" {typ}')

        for p in posts:
            content = wrap(p["content"]) if inline_style else p["content"]
            created = datetime.strptime(p["publishedAt"], "%B %d, %Y").strftime("%Y-%m-%d 06:00:00+00")
            cur.execute('select 1 from public.blogs where slug = %s', (p["slug"],))
            exists = cur.fetchone()
            if exists:
                cur.execute(
                    '''update public.blogs set title=%s, excerpt=%s, content=%s, category=%s,
                       "publishedAt"=%s, "readTime"=%s, author=%s, image=%s, featured=%s, tags=%s,
                       "seoTitle"=%s, "seoDescription"=%s, "imageAlt"=%s, "primaryKeyword"=%s, faqs=%s
                       where slug=%s''',
                    (p["title"], p["excerpt"], content, p["category"], p["publishedAt"],
                     p["readTime"], Json(p["author"]), p["image"], bool(p.get("featured")),
                     p.get("tags", []), p.get("seoTitle"), p.get("seoDescription"),
                     p.get("imageAlt"), p.get("primaryKeyword"),
                     Json(p["faqs"]) if p.get("faqs") else None, p["slug"]),
                )
            else:
                cur.execute(
                    '''insert into public.blogs (created_at, slug, title, excerpt, content, category,
                       "publishedAt", "readTime", author, image, featured, tags, "seoTitle",
                       "seoDescription", "imageAlt", "primaryKeyword", faqs)
                       values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)''',
                    (created, p["slug"], p["title"], p["excerpt"], content, p["category"],
                     p["publishedAt"], p["readTime"], Json(p["author"]), p["image"],
                     bool(p.get("featured")), p.get("tags", []), p.get("seoTitle"),
                     p.get("seoDescription"), p.get("imageAlt"), p.get("primaryKeyword"),
                     Json(p["faqs"]) if p.get("faqs") else None),
                )
        conn.commit()

        cur.execute('select slug, "readTime", length(content), content like %s from public.blogs order by created_at desc',
                    ('%' + MARKER + '%',))
        for row in cur.fetchall():
            print(row)
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        conn.close()


if __name__ == "__main__":
    main()
