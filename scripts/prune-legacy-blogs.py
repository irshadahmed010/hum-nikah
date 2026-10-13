"""
Removes the six original blog posts, keeping only the five imported guides.

The rows are written to content/blog/legacy-blogs-backup.json first, so they can
be restored with scripts/restore-legacy-blogs.py if they are wanted back.

Usage: python scripts/prune-legacy-blogs.py [--dry-run]
"""
import json
import re
import sys
from pathlib import Path

import psycopg2
from psycopg2.extras import RealDictCursor

ROOT = Path(__file__).resolve().parent.parent
BACKUP = ROOT / "content" / "blog" / "legacy-blogs-backup.json"

# The five guides to keep; everything else in `blogs` is removed.
KEEP = [
    "muslim-marriage-bureau-bangalore-guide",
    "muslim-marriage-bureau-hyderabad-guide",
    "konkani-muslim-matrimony-mumbai-guide",
    "how-to-verify-a-muslim-rishta",
    "muslim-biodata-format-for-marriage",
]


def main() -> None:
    dry = "--dry-run" in sys.argv

    env = (ROOT / ".env").read_text(encoding="utf-8")
    m = re.search(r"^DATABASE_URL=(.*)$", env, re.M)
    if not m:
        sys.exit("DATABASE_URL missing from .env")

    conn = psycopg2.connect(m.group(1).strip(), connect_timeout=20)
    cur = conn.cursor(cursor_factory=RealDictCursor)
    try:
        cur.execute(
            "select * from public.blogs where slug <> all(%s) order by created_at desc",
            (KEEP,),
        )
        doomed = cur.fetchall()

        if not doomed:
            print("Nothing to remove: only the five guides are present.")
            return

        print(f"Will remove {len(doomed)} post(s):")
        for row in doomed:
            print(f"  - {row['slug']}")

        if dry:
            print("\nDry run: nothing deleted, no backup written.")
            return

        BACKUP.parent.mkdir(parents=True, exist_ok=True)
        BACKUP.write_text(
            json.dumps(doomed, indent=2, ensure_ascii=False, default=str),
            encoding="utf-8",
        )
        print(f"\nBacked up to {BACKUP.relative_to(ROOT)}")

        cur.execute("delete from public.blogs where slug <> all(%s)", (KEEP,))
        conn.commit()

        cur.execute("select slug from public.blogs order by created_at desc")
        remaining = [r["slug"] for r in cur.fetchall()]
        print(f"\nRemaining {len(remaining)} post(s):")
        for slug in remaining:
            print(f"  - {slug}")
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        conn.close()


if __name__ == "__main__":
    main()
