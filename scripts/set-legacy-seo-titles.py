"""
Gives the six original blog posts a concise `seoTitle` / `seoDescription`.

Their visible H1 titles are long, and the blog page otherwise truncates the
title tag mid-word ("...Rights, Kindness &..."), which the SEO audit flagged.
These values are editable in /admin/blogs, under "Search Engine (optional)".

Usage: python scripts/set-legacy-seo-titles.py [--dry-run]
"""
import re
import sys
from pathlib import Path

import psycopg2

ROOT = Path(__file__).resolve().parent.parent

# slug -> SEO title (used verbatim as the whole <title>, so keep <= 60 chars)
TITLES = {
    "understanding-sunnah-of-nikah-spiritual-practical-foundations":
        "Understanding the Sunnah of Nikah | HumNikah",
    "choosing-the-right-life-partner-islamic-guidelines":
        "Choosing the Right Life Partner in Islam | HumNikah",
    "mahr-in-islam-meaning-significance-modern-practices":
        "Mahr in Islam: Meaning & Best Practices | HumNikah",
    "role-of-wali-and-family-involvement-in-blessed-nikah":
        "The Role of the Wali in Nikah | HumNikah",
    "pre-nikah-checklist-essential-conversations-for-muslim-couples":
        "Pre-Nikah Checklist for Muslim Couples | HumNikah",
    "building-harmony-after-nikah-rights-kindness-ethics":
        "Building Harmony After Nikah | HumNikah",
}

LIMIT_TITLE = 60
LIMIT_DESC = 155


def main() -> None:
    dry = "--dry-run" in sys.argv

    for slug, title in TITLES.items():
        if len(title) > LIMIT_TITLE:
            sys.exit(f"seoTitle too long ({len(title)}): {slug}")

    env = (ROOT / ".env").read_text(encoding="utf-8")
    m = re.search(r"^DATABASE_URL=(.*)$", env, re.M)
    if not m:
        sys.exit("DATABASE_URL missing from .env")

    conn = psycopg2.connect(m.group(1).strip(), connect_timeout=20)
    cur = conn.cursor()
    try:
        for slug, title in TITLES.items():
            cur.execute("select title, excerpt from public.blogs where slug = %s", (slug,))
            row = cur.fetchone()
            if not row:
                print(f"SKIP (not in database): {slug}")
                continue

            h1, excerpt = row
            over = len(excerpt) > LIMIT_DESC
            print(f"\n{slug}")
            print(f"  H1 stays:   {h1}")
            print(f"  title tag:  {title}  ({len(title)}/{LIMIT_TITLE})")
            print(f"  excerpt:    {len(excerpt)}/{LIMIT_DESC}" + ("  <- will be trimmed" if over else "  ok"))

            if not dry:
                cur.execute(
                    'update public.blogs set "seoTitle" = %s, updated_at = now() where slug = %s',
                    (title, slug),
                )

        if dry:
            conn.rollback()
            print("\nDry run: nothing written.")
        else:
            conn.commit()
            cur.execute('select count(*) from public.blogs where "seoTitle" is not null')
            print(f"\nPosts with an SEO title: {cur.fetchone()[0]} of 11")
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        conn.close()


if __name__ == "__main__":
    main()
