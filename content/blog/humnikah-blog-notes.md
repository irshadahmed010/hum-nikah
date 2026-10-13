# HumNikah – Blogs 1 and 2: Agent Notes

Files to publish (drop into your blog content folder):
- `humnikah-blog-bangalore.md` → `/blog/muslim-marriage-bureau-bangalore-guide`
- `humnikah-blog-hyderabad.md` → `/blog/muslim-marriage-bureau-hyderabad-guide`

These notes are for the agent only. Do not publish this file.
Related specs: `humnikah-blog-blueprint.md` (schema code, global rules), `humnikah-keyword-implementation.md` (city pages).

---

## 1. Keyword data used (from the user's keyword tool screenshots)

Volumes are as shown in the tool. Rows marked n/a need "Update metrics". Re-check after refresh.

### Bangalore (4 keywords, total 830)

| Keyword | Vol | KD | Used as |
|---|---|---|---|
| best muslim marriage bureau in bangalore | 390 | 6 | **Blog primary** |
| muslim marriage bureau in bangalore | 390 | 10 | City page primary (`/muslim-matrimony/bengaluru`); used naturally in the blog |
| muslim marriage bureau in bangalore frazer town | 50 | n/a | Blog H2 and section |
| muslim marriage bureau in shivaji nagar bangalore | 0 | n/a | Mentioned naturally only. No dedicated target |

### Hyderabad (27 keywords, total 1,420, avg KD 19%; 10 visible)

| Keyword | Vol | KD | Used as |
|---|---|---|---|
| muslim marriage bureau in hyderabad | 720 | 11 | **Blog primary** |
| top 10 muslim marriage bureau in hyderabad | 110 | 13 | Covered by the "best and top, how to compare fairly" scorecard section. No named competitor list |
| best marriage bureau in hyderabad for muslim | 90 | n/a | Secondary, same section |
| best muslim marriage bureau in hyderabad | 50 | n/a | Secondary, same section |
| free muslim marriage bureau in hyderabad | 20 | n/a | H2 and section |
| muslim marriage bureau in hyderabad old city | 20 | n/a | Locality section |
| muslim marriage bureau hyderabad telangana | 10 | n/a | Locality section (Telangana-wide) |
| muslim second marriage bureau in hyderabad | 10 | n/a | H2 and section |

### Deliberately NOT targeted
- "mubarakrishte muslim marriage bureau in hyderabad tolichowki" (390, KD 34): a competitor brand search (navigational). Do not write content for another company's name. Tolichowki is mentioned only as a locality.
- "address of muslim marriage bureau in hyderabad" (0): HumNikah has no Hyderabad office, and volume is 0.

The other 17 Hyderabad keywords were not visible. Send the rest and I will map them.

---

## 2. Changes from the blueprint (and why)

| Item | Blueprint | Now | Reason |
|---|---|---|---|
| Post 1 title | Muslim Marriage Bureau in Bangalore: A Family Guide | **How to Choose the Best Muslim Marriage Bureau in Bangalore** | "best muslim marriage bureau in bangalore" has 390 volume and KD 6. The exact phrase "muslim marriage bureau in Bangalore" is already the city page's target. Different primary keywords avoid the two pages competing |
| Post 2 title | Hyderabadi Muslim Rishta: How Families Find a Match | **Muslim Marriage Bureau in Hyderabad: Rishta Guide** | The data shows searchers use "marriage bureau" (720 vs no data for "rishta") |
| Post 2 slug | `hyderabadi-muslim-rishta-guide` | `muslim-marriage-bureau-hyderabad-guide` | Matches the new primary keyword |

Update elsewhere:
- [ ] `humnikah-blog-blueprint.md`: replace post #1 and #2 title, slug and primary keyword; fix hub-and-spoke map and related links.
- [ ] `humnikah-keyword-implementation.md`: in the Hyderabad city-page row, remove "muslim marriage bureau Hyderabad" from the secondary list and in section 4 point it to the blog post. Keep "Muslim matrimony Hyderabad" as the city page primary. In the Bengaluru row, keep "muslim marriage bureau in Bangalore" on the city page and point "best muslim marriage bureau in Bangalore" to the blog.
- [ ] Never use the same primary keyword on two pages.

---

## 3. Facts the owner must confirm before publishing

All of these came from the existing site or the footer card, not from new research. Resolve every `<!-- OWNER: ... -->` comment, then delete the comments.

- Office address: Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005
- Phones: +91 9019082205 and +91 9844321312
- "Submitting your biodata is free"
- Verification: every profile manually screened, identity and address documents checked, no formal criminal-record checks. Must match `claims.ts` exactly
- Wali involvement where the bride's family wishes
- Walk-in at the Cox Town office (and add opening hours, or say "call first")
- Bangalore and Karnataka localities listed (Frazer Town, Shivaji Nagar, RT Nagar, Commercial Street, Tannery Road, Whitefield, Electronic City, Marathahalli, HSR Layout, Koramangala, Mangaluru, Mysuru, Hubli-Dharwad, Bhatkal, Gulbarga, Bijapur)
- Hyderabad: phone/WhatsApp service only, no office; localities (Old City, Malakpet, Tolichowki, Mehdipatnam, Secunderabad, Warangal, Nizamabad) are genuinely served
- Whether any fee applies after free registration. If so, add one honest line to the Hyderabad "free" section
- Remarriage (divorcee/widow) service is actually offered

No prices, counts, testimonials or "#1" claims were used. Do not add any unless the owner provides proof.

---

## 4. Implementation checklist (per post)

- [ ] Parse frontmatter. Use `title` for the title tag and `h1` for the heading. Set `publishedAt` and `updatedAt` to the real date.
- [ ] "In this guide" list → render as an anchor table of contents.
- [ ] **FAQ schema:** parse the `## FAQs` section (each `###` is a question, the paragraph below is the answer) and feed it to `buildBlogJsonLd` in the blueprint. This keeps the visible text and the schema identical. Do not retype the FAQs anywhere else.
- [ ] JSON-LD `@graph`: `BlogPosting` + `BreadcrumbList` (Home > Blog > post) + `FAQPage`. Author is the Organization "HumNikah Editorial Team" unless the owner supplies a real author.
- [ ] Canonical `https://www.humnikah.com/blog/<slug>`. Add both posts to `sitemap.ts`.
- [ ] Open Graph: `og:type=article`, published/modified time, hero image 1200×630 WebP. Hero images: owner supplies licensed or original images, no identifiable people without permission. Keep the `heroAlt` text.
- [ ] Mid-page and end CTA go to `/submit-biodata`. Add the sticky WhatsApp and call bar.
- [ ] Build asserts: title ≤ 60, description ≤ 155, no `OWNER:` text left in the output.

### Internal links

Outgoing links already inside the posts (all must return 200):
- Bangalore: `/muslim-matrimony/bengaluru`, `/muslim-matrimony-india`, `/submit-biodata`, `/faq`, `/about`, `/blog/muslim-marriage-bureau-hyderabad-guide`, plus the WhatsApp redirect `/whatsapp?src=...` (4 links, see section 7)
- Hyderabad: `/muslim-matrimony/hyderabad` (verify this slug in code), `/muslim-matrimony-india`, `/submit-biodata`, `/faq`, `/about`, `/blog/muslim-marriage-bureau-bangalore-guide`, plus `/whatsapp?src=...` (3 links, see section 7)

Incoming links to add:
- [ ] `/muslim-matrimony/bengaluru` → "Related guides" block → Bangalore post
- [ ] `/muslim-matrimony/hyderabad` → "Related guides" block → Hyderabad post
- [ ] `/muslim-matrimony-india` → both posts
- [ ] `/blog` index → both posts
- [ ] Footer or "Guides" nav → both posts

Later (when those posts exist), add links to `how-to-verify-a-muslim-rishta`, `muslim-divorcee-widow-remarriage-guide`, and the Deccani and remarriage pages.

Run after build: `npx linkinator http://localhost:3000 --recurse --skip "^(?!http://localhost)"`

### Checks already done on the text
- Bangalore: title 58 characters, description 140, about 1,890 words, 1 H1, 6 FAQs.
- Hyderabad: title 49 characters, description 141, about 1,710 words, 1 H1, 6 FAQs.
- Direct-answer paragraph under each H1 (44 and 53 words).

---

## 5. What the SERP data means (read before expecting results)

- The keyword difficulty values (6 to 13) suggest these terms are within reach for a new domain, but KD is a rough guide, not a promise.
- The SERP feature icons in the screenshots appear to include map and review features, so these searches probably show a local pack. For Bangalore, create and verify a **Google Business Profile** for the Cox Town office (name, address and phone identical to the site) and ask real families for reviews with their consent. That matters more than the blog for "near me" style searches.
- HumNikah has no Hyderabad office, so the Hyderabad blog is a comparison and guidance page, not a local listing. Expect it to win the informational and comparison searches first. Do not claim a Hyderabad address anywhere.
- New domains typically take weeks to months to rank. Request indexing in Search Console and check progress at weeks 4 and 8.

### Tracker rows (add to `seo/keyword-tracker.csv`)

| keyword | target_url | volume | KD |
|---|---|---|---|
| best muslim marriage bureau in bangalore | /blog/muslim-marriage-bureau-bangalore-guide | 390 | 6 |
| muslim marriage bureau in bangalore | /muslim-matrimony/bengaluru | 390 | 10 |
| muslim marriage bureau in bangalore frazer town | /blog/muslim-marriage-bureau-bangalore-guide | 50 | n/a |
| muslim marriage bureau in hyderabad | /blog/muslim-marriage-bureau-hyderabad-guide | 720 | 11 |
| top 10 muslim marriage bureau in hyderabad | /blog/muslim-marriage-bureau-hyderabad-guide | 110 | 13 |
| best marriage bureau in hyderabad for muslim | /blog/muslim-marriage-bureau-hyderabad-guide | 90 | n/a |
| best muslim marriage bureau in hyderabad | /blog/muslim-marriage-bureau-hyderabad-guide | 50 | n/a |
| free muslim marriage bureau in hyderabad | /blog/muslim-marriage-bureau-hyderabad-guide | 20 | n/a |
| muslim marriage bureau in hyderabad old city | /blog/muslim-marriage-bureau-hyderabad-guide | 20 | n/a |
| muslim marriage bureau hyderabad telangana | /blog/muslim-marriage-bureau-hyderabad-guide | 10 | n/a |
| muslim second marriage bureau in hyderabad | /blog/muslim-marriage-bureau-hyderabad-guide | 10 | n/a |
| muslim matrimony hyderabad | /muslim-matrimony/hyderabad | (to check) | (to check) |

---

## 7. WhatsApp personal-chat redirect (added after the WhatsApp group decision)

Decision: **no open WhatsApp group.** Every WhatsApp button in the posts goes to the site's own redirect, which opens a personal chat with the HumNikah team. Both posts say this openly, and the Bangalore post now also targets "muslim matrimony bangalore whatsapp group link" (new H2 and FAQ).

Links used in the posts (the `src` value tells you which button was clicked):

| Link | Where |
|---|---|
| `/whatsapp?src=blog-bangalore` | Bangalore, WhatsApp group section |
| `/whatsapp?src=blog-bangalore-mid` | Bangalore, after red flags |
| `/whatsapp?src=blog-bangalore-steps` | Bangalore, process step 1 |
| `/whatsapp?src=blog-bangalore-cta` | Bangalore, end CTA |
| `/whatsapp?src=blog-hyderabad-office` | Hyderabad, "office" section |
| `/whatsapp?src=blog-hyderabad-steps` | Hyderabad, step 1 |
| `/whatsapp?src=blog-hyderabad-cta` | Hyderabad, end CTA |

- [ ] **The site already has a WhatsApp redirect.** Find it and reuse it. I have assumed the path is `/whatsapp`. If it is different, replace it in the posts. If it has no `src` support, add it as below.
- [ ] If there is no redirect yet, create one:

```ts
// app/whatsapp/route.ts
import { NextRequest, NextResponse } from 'next/server';

const NUMBER = '919019082205'; // OWNER: confirm this is the WhatsApp number

const MESSAGES: Record<string, string> = {
  default: 'Assalamu alaikum, I would like to talk about a rishta.',
  'blog-bangalore': 'Assalamu alaikum, I read your Bangalore Muslim marriage bureau guide and would like to talk about a rishta.',
  'blog-hyderabad': 'Assalamu alaikum, I read your Hyderabad Muslim marriage bureau guide and would like to talk about a rishta.',
};

export function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get('src') ?? 'site';
  const src = raw.replace(/[^a-z0-9_-]/gi, '').slice(0, 40) || 'site';
  const base = src.split('-').slice(0, 2).join('-'); // blog-bangalore-cta -> blog-bangalore
  const text = `${MESSAGES[base] ?? MESSAGES.default} [${src}]`;
  const res = NextResponse.redirect(`https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`, 302);
  res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  res.headers.set('Cache-Control', 'no-store');
  return res;
}
```

- The `[src]` tag at the end of the prefilled message tells the team which page the person came from.
- Use a 302 redirect, not a 301, so the destination is never cached.
- [ ] `robots.ts`: add `disallow: ['/whatsapp']`. Do not add it to the sitemap.
- [ ] Render every WhatsApp button as a normal link with `rel="nofollow noopener"`.
- [ ] GA4: fire `whatsapp_click` on click, with the `src` value as a parameter, and mark it as a key event.
- [ ] Linkinator: this route redirects off-site, so skip it in the link check (the existing `--skip` pattern already ignores external URLs).
- [ ] The posts promise: "Your details are not added to any group without your permission." Make sure the team actually works that way. Owner decides how and when to invite people to groups later (see the earlier recommendation: 1:1 chat first, announcement-only channel for updates, small consent-based groups only if needed).

Also:
- [ ] If the dedicated WhatsApp landing page is built later (`/muslim-matrimony/bengaluru/whatsapp`), link to it from the Bangalore post's WhatsApp section. That page should own the "whatsapp group link" keyword, and the blog section can then be shortened. Until then, the blog owns it.
- [ ] Privacy: the team will receive personal details over WhatsApp. Check India's data-protection rules (DPDP Act) and get legal advice on consent notices and how long you keep chats. I am not a lawyer.

---

## 8. After publishing

- [ ] Search Console → URL Inspection → Request indexing for both posts and both city pages.
- [ ] Week 4 and week 8: log impressions, clicks and position per keyword. If a post has impressions but sits below position 10, improve its title, intro and FAQs. If it has none by week 12, check indexing and content depth.
- [ ] Improve the posts with real, first-hand detail (anonymised, consented examples of how the process works, owner's own advice). That makes the posts stronger than generic competitor pages. Do not invent testimonials.
