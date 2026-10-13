"""
Brings the Supabase `blogs` table up to what the site reads.

Adds the optional SEO columns plus `updated_at` (used for Article dateModified
and the sitemap's lastmod), and backfills it from created_at. Safe to re-run.

Usage: python scripts/migrate-blogs-table.py
"""
import re
import sys
from pathlib import Path

import psycopg2

ROOT = Path(__file__).resolve().parent.parent

COLUMNS = [
    ("seoTitle", "text"),
    ("seoDescription", "text"),
    ("imageAlt", "text"),
    ("primaryKeyword", "text"),
    ("faqs", "jsonb"),
    ("updated_at", "timestamptz"),
]


def main() -> None:
    env = (ROOT / ".env").read_text(encoding="utf-8")
    m = re.search(r"^DATABASE_URL=(.*)$", env, re.M)
    if not m:
        sys.exit("DATABASE_URL missing from .env")

    conn = psycopg2.connect(m.group(1).strip(), connect_timeout=20)
    cur = conn.cursor()
    try:
        for col, typ in COLUMNS:
            cur.execute(f'alter table public.blogs add column if not exists "{col}" {typ}')

        # New rows get a timestamp automatically; existing rows mirror created_at.
        cur.execute("alter table public.blogs alter column updated_at set default now()")
        cur.execute("update public.blogs set updated_at = created_at where updated_at is null")

        conn.commit()

        cur.execute(
            """select column_name, data_type from information_schema.columns
               where table_schema='public' and table_name='blogs' order by ordinal_position"""
        )
        print("blogs columns:")
        for row in cur.fetchall():
            print("  ", row[0], "-", row[1])

        cur.execute("select count(*) from public.blogs where updated_at is not null")
        print("rows with updated_at:", cur.fetchone()[0])
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        conn.close()


if __name__ == "__main__":
    main()
