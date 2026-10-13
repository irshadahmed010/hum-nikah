# HumNikah – Agent Spec: Wave 1b (Konkani, Verify, Biodata + site updates)

For the coding agent. Do not publish this file.
Date: 2026-10-13. Host: `https://www.humnikah.com`. Stack: Next.js (confirm router).
Read first: `humnikah-seo-fixes.md` (P0 fixes), `humnikah-blog-notes.md` (blog implementation, WhatsApp redirect, schema), `humnikah-blog-blueprint.md` (schema code).

## 0. What to ship

New posts (drop-in files, same format as the Bangalore and Hyderabad posts):

| File | Slug | Page |
|---|---|---|
| `humnikah-blog-konkani.md` | `/blog/konkani-muslim-matrimony-mumbai-guide` | Konkani guide |
| `humnikah-blog-verify-rishta.md` | `/blog/how-to-verify-a-muslim-rishta` | Verification checklist |
| `humnikah-blog-biodata-format.md` | `/blog/muslim-biodata-format-for-marriage` | Biodata resource page with downloads |

Plus site updates in sections 3 to 6 below. Labbai/Rowther/Marakkayar and Mappila posts are on hold. Do not create them.

Publish all five Wave 1 posts (Bangalore, Hyderabad, Konkani, Verify, Biodata) together or in quick succession. They link to each other, so a post must not go live with a link to an unpublished post. Build check: fail if any internal link returns 404.

## 1. Keyword data and decisions

The keyword screenshots had **blurred volumes**, so decisions below are by intent, not volume. `OWNER:` pastes real volumes into `seo/keyword-tracker.csv` once the tool shows them. The tool looks like Google Keyword Planner, whose "Competition" column is about ads, not SEO difficulty. Check the real results page for each cluster in an incognito window. Easier to win: top results are small blogs. Harder: big portals or government sites.

| Cluster | Keywords | Target |
|---|---|---|
| Biodata (one cluster) | muslim biodata format for marriage, free, pdf, pdf free download, in word format free download, for boy, muslim girl biodata for marriage word format (and pdf download), marriage biodata format for muslim girl / boy (free download), sample muslim biodata for marriage, how to make a biodata for marriage muslim, simple muslim marriage biodata format, muslim marriage biodata format free download | `/blog/muslim-biodata-format-for-marriage` (one page only) |
| Konkani | konkani muslim matrimony (in mumbai), marriage bureau, shaadi, bride, girl for marriage, marriage, wedding, whatsapp group link, are konkani muslims (sunni) | `/blog/konkani-muslim-matrimony-mumbai-guide` |
| Verification | how to verify a muslim rishta; how to check muslim marriage certificate (online) in a short section | `/blog/how-to-verify-a-muslim-rishta` |
| Lead keywords (Hinglish) | muslim rishta chahiye, muslim rishtey bureau, muslim rishta for you, how to find a muslim bride | Existing pages (section 3), and a new post (section 7) |
| Contact | muslim rishta contact number | `/contact` (section 3) |
| Registration (legal) | how to register a muslim marriage (in india), can muslim register marriage, how to prove muslim marriage, how to check muslim marriage certificate | New legal post, parked (section 7) |
| Do not target | how to accept muslim religion, muslim divorce registration, muslim rishta delhi (until the owner confirms Delhi is served) | None |

Rules:
- One primary keyword per page. The Konkani guide holds "konkani muslim matrimony in mumbai" now. When the community page `/muslim-matrimony/konkani` is built later, move "konkani muslim matrimony" to that page and keep the guide for "in mumbai", the family guide and the informational terms.
- Do not create separate pages for each biodata variant (boy, girl, pdf, word). They are sections and download links on the one page.
- "Konkani Muslim wedding", "are Konkani Muslims Sunni" and the community description are factual claims. They carry `SOURCE-CHECK` comments. Find a reliable source, cite it with a link, or remove the claim.

## 2. Internal links to wire up

Already inside the posts (all must return 200 at build):
- Konkani: `/muslim-matrimony/mumbai` (verify slug), `/blog/muslim-marriage-bureau-bangalore-guide`, `/blog/how-to-verify-a-muslim-rishta`, `/blog/muslim-biodata-format-for-marriage`, `/muslim-matrimony-india`, `/submit-biodata`, `/faq`, `/about`, `/whatsapp?src=…`
- Verify: `/muslim-matrimony-india`, `/blog/muslim-marriage-bureau-bangalore-guide`, `/blog/muslim-biodata-format-for-marriage`, `/submit-biodata`, `/faq`, `/whatsapp?src=…`
- Biodata: `/submit-biodata`, `/blog/how-to-verify-a-muslim-rishta`, `/muslim-matrimony-india`, `/faq`, `/whatsapp?src=…`, and four download files (section 4)

Add incoming links:
- [ ] `/muslim-matrimony/mumbai`: "Related guides" → Konkani guide
- [ ] `/muslim-matrimony-india`: link to all three new posts
- [ ] `/submit-biodata`: link "Need a format? Free biodata template" → Biodata page
- [ ] Footer or "Guides" nav: Free Biodata Format, How to Verify a Rishta
- [ ] `/blog` index: all five Wave 1 posts
- [ ] Bangalore and Hyderabad posts: add a link to the verification post and the biodata page where it fits naturally (for example in the Bangalore checklist and the Hyderabad "before the first meeting" section)

## 3. Updates to existing pages (cheap, high lead value)

Do these first. They need no new pages.

### 3.1 `/muslim-matrimony-india` and homepage: Hinglish lead section

Add one short section (about 120 words) near the top-middle of `/muslim-matrimony-india`, and a shorter 2-sentence version on the homepage above the footer. Use a normal H2, not hidden text.

- H2: `Muslim Rishta Chahiye? Apna Biodata Free Submit Karein`
- Suggested copy (agent may adjust wording, keep the facts):

> Muslim rishta chahiye? HumNikah ek muslim rishtey bureau hai jo manually screened profiles, Wali ki involvement aur privacy ke saath rishta dhundhne me families ki madad karta hai. Aap Bengaluru, Hyderabad, Chennai, Kochi, Mumbai aur Vijayawada ke families ke liye apna biodata free submit kar sakte hain, ya seedha WhatsApp par baat kar sakte hain. Biodata kaise banayein, ye jaanne ke liye hamara [free Muslim biodata format](/blog/muslim-biodata-format-for-marriage) dekhein. Rishta safe tareeke se verify karne ke liye [verification checklist](/blog/how-to-verify-a-muslim-rishta) padhein.
> **[Biodata submit karein](/submit-biodata)** · **[WhatsApp par baat karein](/whatsapp?src=india-hinglish)**

- [ ] Keywords covered: "muslim rishta chahiye", "muslim rishtey bureau". Do not repeat them more than once or twice. No stuffing.
- [ ] Use `src=india-hinglish` on the India page and `src=home-hinglish` on the homepage.
- `OWNER:` confirm the six cities listed are served and "manually screened" matches `claims.ts`.

### 3.2 `/contact` page (target: "muslim rishta contact number")

- Title (≤60): `Muslim Rishta Contact Number | Contact HumNikah`
- Meta (≤155): `Call or WhatsApp HumNikah for Muslim rishta help. Bengaluru office address, phone numbers and a personal WhatsApp chat. Submit biodata free.`
- H1: `Contact HumNikah for Muslim Rishta Help`
- Show: phones `+91 9019082205` and `+91 9844321312`, office address (Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005), a WhatsApp button (`/whatsapp?src=contact`), and the biodata form link. Add opening hours if `OWNER:` provides them.
- [ ] `LocalBusiness` JSON-LD with the same name, address and phone (see the earlier fixes file). No review markup.
- Note: the page must be about contacting HumNikah, not about getting other families' numbers. Do not publish any family's contact details anywhere.

### 3.3 `/muslim-matrimony/mumbai`
- [ ] Add "Related guides" block linking the Konkani guide.
- [ ] Confirm the page does not claim a Mumbai office.

## 4. Biodata downloads (required for the biodata page)

The biodata page promises four free files. Create them from the template text in `humnikah-blog-biodata-format.md` (boy and girl blocks):

| File | Path |
|---|---|
| Boy, Word | `/downloads/muslim-biodata-format-boy.docx` |
| Boy, PDF | `/downloads/muslim-biodata-format-boy.pdf` |
| Girl, Word | `/downloads/muslim-biodata-format-girl.docx` |
| Girl, PDF | `/downloads/muslim-biodata-format-girl.pdf` |

Spec:
- One A4 page each, plain and clean, editable table or fields in the Word version. Same fields as the template text. Girl version includes the Wali field.
- Footer line: `Free template from HumNikah – humnikah.com`. No phone number or address on the template itself.
- No fields for ID numbers, full address, personal phone, complexion or dowry.
- PDF has proper title metadata ("Muslim Biodata Format for Marriage – Boy/Girl").
- No sign-up or email gate. Serve from `/public/downloads/`.
- GA4: fire `biodata_download` on click with parameters `gender` (boy/girl) and `format` (docx/pdf). Mark it as a key event.
- [ ] Add a small "Biodata ready? Submit it free" box on the biodata page immediately after the download links (already in the page text, make it visible).
- [ ] Optional: add image previews of the templates (WebP, with alt text) to the page.

## 5. WhatsApp redirect updates

Reuse the existing `/whatsapp` route (see `humnikah-blog-notes.md`, section 7). Add these `src` values, and prefilled messages if the route uses a message map. The route derives the base from the first two parts of `src`, so `blog-konkani-steps` uses the `blog-konkani` message.

```ts
const MESSAGES: Record<string, string> = {
  default: 'Assalamu alaikum, I would like to talk about a rishta.',
  'blog-bangalore': 'Assalamu alaikum, I read your Bangalore Muslim marriage bureau guide and would like to talk about a rishta.',
  'blog-hyderabad': 'Assalamu alaikum, I read your Hyderabad Muslim marriage bureau guide and would like to talk about a rishta.',
  'blog-konkani': 'Assalamu alaikum, I read your Konkani Muslim matrimony guide and would like to talk about a rishta.',
  'blog-verify': 'Assalamu alaikum, I read your guide on verifying a Muslim rishta and have a question.',
  'blog-biodata': 'Assalamu alaikum, I read your biodata guide and would like to submit a biodata.',
  'india-hinglish': 'Assalamu alaikum, mujhe rishta ke liye baat karni hai.',
  'home-hinglish': 'Assalamu alaikum, mujhe rishta ke liye baat karni hai.',
  contact: 'Assalamu alaikum, I would like to talk about a rishta.',
};
```

`src` values used in the new posts: `blog-konkani`, `blog-konkani-steps`, `blog-konkani-cta`, `blog-verify`, `blog-verify-cta`, `blog-biodata-cta`, `blog-biodata-remarriage`. Pages: `india-hinglish`, `home-hinglish`, `contact`.

Promise made in all posts: "We will not add you to any group without your permission." `OWNER:` the team must keep to it.

## 6. Schema, canonical, sitemap

- [ ] Use `buildBlogJsonLd` from `humnikah-blog-blueprint.md` (`BlogPosting` + `BreadcrumbList` + `FAQPage`). Parse FAQs from the `## FAQs` section (each `###` is a question, the paragraph below is the answer).
- [ ] Canonical `https://www.humnikah.com/blog/<slug>`. Add the three posts to `sitemap.ts`. Do not add `/whatsapp`.
- [ ] Open Graph article tags, hero images 1200×630 WebP, with the alt text in each file's frontmatter. Hero images: owner generates them from the titles.
- [ ] Build asserts: title ≤ 60, description ≤ 155, no `OWNER:` or `SOURCE-CHECK` text in the rendered output.
- [ ] For the biodata page, the code fences with templates must stay as copyable text blocks. Do not convert them into images.
- [ ] Resolve all `<!-- OWNER: ... -->` and `<!-- SOURCE-CHECK: ... -->` comments, then delete them.

## 7. Parked posts (do not build yet, brief only)

Build these next, after Wave 1 is indexed. Draft titles and descriptions below are within the limits.

### How to Find a Muslim Bride: A Practical Family Guide
- Slug: `/blog/how-to-find-a-muslim-bride`
- Meta: `How to find a Muslim bride for your son: where families search, how to approach respectfully, what to ask and how to verify safely.`
- Primary keyword: how to find a muslim bride. Intent: groom's family, strong lead value.
- Outline: Where families search · How to approach the bride's family respectfully · What to ask · How to verify · Mahr and expectations · When to use a bureau · FAQs
- Links: `/muslim-matrimony-india`, city pages, verification post, biodata page, `/submit-biodata`, WhatsApp redirect.

### How to Register a Muslim Marriage in India: A Nikah Guide
- Slug: `/blog/how-to-register-muslim-marriage-india`
- Meta: `How to register a Muslim marriage in India: the Nikahnama, state registration, what proof of marriage is and the options you can ask a lawyer about.`
- Primary keyword: how to register a muslim marriage in india. Secondary: can muslim register marriage, how to prove muslim marriage, how to check muslim marriage certificate.
- Outline: Nikahnama vs registration · Why register · How it works by state (verify each) · Proof of marriage · Special Marriage Act option · Checking a certificate · FAQs
- **Legal review required.** Rules differ by state. Every legal statement must be sourced from official or legal sources and reviewed by a lawyer before publishing. Add "General information, not legal advice."
- Links: verification post (certificate checks), `/muslim-matrimony-india`.

## 8. Tracker rows (add to `seo/keyword-tracker.csv`)

Volume and KD columns are blank until the owner pastes real numbers.

| keyword | target_url |
|---|---|
| muslim biodata format for marriage | /blog/muslim-biodata-format-for-marriage |
| muslim biodata format for marriage pdf | /blog/muslim-biodata-format-for-marriage |
| muslim biodata format for marriage in word format free download | /blog/muslim-biodata-format-for-marriage |
| muslim girl biodata for marriage word format | /blog/muslim-biodata-format-for-marriage |
| marriage biodata format for muslim boy free download | /blog/muslim-biodata-format-for-marriage |
| sample muslim biodata for marriage | /blog/muslim-biodata-format-for-marriage |
| konkani muslim matrimony in mumbai | /blog/konkani-muslim-matrimony-mumbai-guide |
| konkani muslim marriage bureau | /blog/konkani-muslim-matrimony-mumbai-guide |
| konkani muslim matrimony whatsapp group link | /blog/konkani-muslim-matrimony-mumbai-guide |
| are konkani muslims sunni | /blog/konkani-muslim-matrimony-mumbai-guide |
| how to verify a muslim rishta | /blog/how-to-verify-a-muslim-rishta |
| how to check muslim marriage certificate | /blog/how-to-verify-a-muslim-rishta (short section) |
| muslim rishta chahiye | /muslim-matrimony-india |
| muslim rishtey bureau | /muslim-matrimony-india |
| muslim rishta contact number | /contact |

## 9. QA checklist

- [ ] Title ≤ 60, description ≤ 155 on all three posts and on `/contact`
- [ ] FAQ schema text identical to visible FAQ text
- [ ] All internal links return 200; all four download files exist and open
- [ ] No `OWNER:` or `SOURCE-CHECK` text left; community and religious claims sourced or removed
- [ ] WhatsApp buttons use `/whatsapp?src=…`, `nofollow`, and fire `whatsapp_click`
- [ ] Download buttons fire `biodata_download`
- [ ] No Mumbai office or Delhi coverage claimed anywhere
- [ ] Rich Results Test passes for each post
- [ ] Request indexing in Search Console for the three posts, `/contact` and `/muslim-matrimony-india`; check results at weeks 4 and 8

## 10. `OWNER:` inputs

- Real volumes for each keyword cluster
- Confirm Konkani and Mumbai/Konkan coverage, and that local introductions can be arranged
- Confirm the verification wording (manual screening, ID and address checks, no formal criminal-record checks)
- Confirm the cities in the Hinglish section are served, and whether Delhi is served
- Opening hours for the Cox Town office
- Sources for the Konkani community description, the Sunni/Shafi'i statement and any wedding facts
- Review of the marital-status and marriage-certificate section in the verification post
- Hero images for the three posts
