# HumNikah – Keyword Implementation Spec

Goal: rank a **new domain** for low-competition, location-based Muslim matrimony keywords.
Main host: `https://www.humnikah.com`. Stack: Next.js (confirm App Router vs Pages Router).
Date: 2026-10-04.

## 0. Prerequisites and rules

- Finish `humnikah-seo-fixes.md` P0 items first: canonical host, `.in` redirect, remove `TODO(owner)`, remove fake offices, consistent trust claims. Do not add new pages on top of a broken canonical setup.
- **Difficulty labels below are estimates, not tool-verified.** Volumes are unknown. `OWNER:` will paste Keyword Planner volumes into `seo/keyword-tracker.csv`.
- One primary keyword per page. Never target the same primary keyword on two pages (cannibalization).
- No keyword stuffing. Primary keyword goes in: title, H1, URL, first 100 words, one H2, meta description, one image alt. Elsewhere use natural variants.
- Use both "Bangalore" and "Bengaluru" naturally (people search "Bangalore").
- Every page needs **400+ words of unique body text**, real information, and its own FAQ. If you cannot write unique content, do not create the page. Add a section to an existing page instead.
- Do not invent facts: offices, localities served, counts, testimonials, community claims. Only use what is already on the site, or items marked `OWNER:`. Use `claims.ts` values for trust claims.
- Only Bengaluru (Cox Town) is an office. Other cities: "Serving families via phone & WhatsApp. In-person meetings at our Bengaluru office."
- Title ≤ 60 chars, description ≤ 155 chars. Add a build-time assert. Titles/descriptions here replace the city-page rows in the earlier spec (item 8).
- No Review/AggregateRating schema. No fake testimonials.

## 1. Existing pages: update targets

| URL | Primary keyword | Secondary keywords (use as H2/H3 or in copy) |
|---|---|---|
| `/muslim-matrimony/bengaluru` | muslim marriage bureau in Bangalore | muslim matrimony Bangalore, muslim matchmaking Bangalore, muslim rishta Bangalore, muslim marriage bureau near me |
| `/muslim-matrimony/chennai` | Tamil Muslim matrimony Chennai | muslim marriage bureau Chennai, muslim matrimony Coimbatore / Madurai / Trichy |
| `/muslim-matrimony/hyderabad` | Muslim matrimony Hyderabad | Hyderabadi muslim rishta, muslim marriage bureau Hyderabad, Urdu matrimony Hyderabad |
| `/muslim-matrimony/kochi` | Mappila Muslim matrimony Kochi | muslim matrimony Kerala, Malappuram, Kozhikode / Calicut, Kannur, Thrissur |
| `/muslim-matrimony/mumbai` | Muslim matrimony Mumbai | Konkani muslim matrimony, Memon matrimony, muslim matrimony Pune / Malegaon / Bhiwandi |
| `/muslim-matrimony/vijayawada` | Muslim matrimony Vijayawada | muslim matrimony Visakhapatnam / Guntur / Kurnool / Nellore / Kadapa |
| `/muslim-matrimony-india` | Muslim matrimony in India | links to every city and community page |

### Titles, descriptions, H1

```ts
// data/seo-meta.ts
export const cityMeta = {
  bengaluru: {
    title: 'Muslim Marriage Bureau in Bangalore | HumNikah',
    description: 'Muslim marriage bureau in Bangalore (Bengaluru): verified profiles, Wali-involved introductions, walk-in at Cox Town. Submit biodata free.',
    h1: 'Muslim Marriage Bureau & Matrimony in Bangalore',
  },
  chennai: {
    title: 'Tamil Muslim Matrimony in Chennai | HumNikah',
    description: 'Muslim matrimony in Chennai for Labbai, Rowther, Marakkayar and Tamil Muslim families. Verified profiles, Wali involved. Submit biodata free.',
    h1: 'Tamil Muslim Matrimony in Chennai',
  },
  hyderabad: {
    title: 'Muslim Matrimony in Hyderabad | Deccani Rishta | HumNikah',
    description: 'Hyderabadi Muslim rishta and matrimony for Deccani and Urdu-speaking families. Verified profiles, Wali involved. Submit biodata free.',
    h1: 'Muslim Matrimony in Hyderabad',
  },
  kochi: {
    title: 'Mappila Muslim Matrimony in Kochi & Kerala | HumNikah',
    description: 'Mappila Muslim matrimony in Kochi, Malappuram, Kozhikode, Kannur and Thrissur. Verified profiles, Wali involved. Submit biodata free.',
    h1: 'Mappila Muslim Matrimony in Kochi & Kerala',
  },
  mumbai: {
    title: 'Muslim Matrimony in Mumbai & Maharashtra | HumNikah',
    description: 'Konkani, Memon and Urdu-speaking Muslim matrimony in Mumbai, Pune, Malegaon and Bhiwandi. Verified profiles, Wali involved. Submit biodata free.',
    h1: 'Muslim Matrimony in Mumbai & Maharashtra',
  },
  vijayawada: {
    title: 'Muslim Matrimony in Vijayawada & Andhra Pradesh | HumNikah',
    description: 'Muslim matrimony in Vijayawada, Visakhapatnam, Guntur, Kurnool, Nellore and Kadapa. Verified profiles, Wali involved. Submit biodata free.',
    h1: 'Muslim Matrimony in Vijayawada & Andhra Pradesh',
  },
};
```
- [ ] Assert lengths in a test. If any string is over limit, trim words, do not drop the primary keyword.

### Required sections on every city page (in order)

1. H1 + 2-sentence intro containing the primary keyword.
2. "How matchmaking works in {City}" (reuse shared block).
3. **"Areas and towns we serve"**: one H3 per locality/town with 2 to 3 unique sentences each. Use only the lists below. Do not create separate pages for them yet.
4. **"Communities we serve in {City}"**: from the list below.
5. **Intent block** (see section 3): short H2s for divorcee/widow remarriage, working professionals, NRI/Gulf. 2 to 3 sentences each, link to the standalone page where one exists.
6. Office/contact block (Bengaluru: full address + hours. Others: phone/WhatsApp only).
7. City FAQ (section 5) with FAQ schema.
8. "Other cities" links to all 5 other cities + `/muslim-matrimony-india`.

Locality and community data (all already present on the current site, so they are safe to use):

- **Bengaluru:** Cox Town, Frazer Town, Shivaji Nagar, RT Nagar, Commercial Street, Tannery Road, Whitefield, Electronic City, Marathahalli, HSR Layout, Koramangala. Karnataka towns: Mangaluru, Mysuru, Hubli-Dharwad, Bhatkal, Gulbarga, Bijapur. Communities: Kannada-speaking, Urdu-speaking, Beary, Bhatkali.
- **Chennai:** Chennai, Coimbatore, Madurai, Tiruchirappalli, Vaniyambadi, Ambur, Nagore. Communities: Tamil Muslim, Labbai, Rowther, Marakkayar.
- **Hyderabad:** Old City, Malakpet, Tolichowki, Mehdipatnam, Secunderabad, Warangal, Nizamabad. Communities: Urdu-speaking, Deccani.
- **Kochi/Kerala:** Malappuram, Kozhikode (Calicut), Kannur, Thrissur, Kochi, Kollam, Thiruvananthapuram. Community: Mappila.
- **Mumbai:** Mumbai, Pune, Nagpur, Aurangabad, Malegaon, Bhiwandi. Communities: Konkani, Memon, Urdu-speaking.
- **Vijayawada/AP:** Vijayawada, Visakhapatnam, Guntur, Kurnool, Nellore, Kadapa.
- `OWNER:` confirm these are truly served. Remove any that are not. **Bohra: do not create content until owner confirms** (it is listed on the current site but needs confirmation).

## 2. New pages to create

Create only after the city pages above are live. Same layout rules as city pages (400+ unique words, own FAQ, schema, breadcrumbs, sitemap entry, linked from `/muslim-matrimony-india`, relevant city pages, and a "Communities" nav/footer group).

### Batch 1 (highest value, create first)

| URL | Primary keyword | Title (≤60) | H1 |
|---|---|---|---|
| `/muslim-matrimony/labbai-rowther-marakkayar` | Labbai matrimony | Labbai, Rowther & Marakkayar Matrimony \| HumNikah | Labbai, Rowther & Marakkayar Muslim Matrimony |
| `/muslim-matrimony/mappila` | Mappila matrimony | Mappila Muslim Matrimony in Kerala \| HumNikah | Mappila Muslim Matrimony in Kerala |
| `/muslim-matrimony/konkani` | Konkani muslim matrimony | Konkani Muslim Matrimony in Mumbai \| HumNikah | Konkani Muslim Matrimony |
| `/muslim-matrimony/deccani` | Deccani muslim matrimony | Deccani Muslim Matrimony in Hyderabad \| HumNikah | Deccani Muslim Matrimony |
| `/muslim-matrimony/divorcee-widow-remarriage` | divorcee muslim matrimony | Muslim Divorcee & Widow Remarriage \| HumNikah | Muslim Remarriage: Divorcee & Widow Matrimony |

Page notes:
- Labbai/Rowther/Marakkayar: three H2 sections (one per community), Tamil Nadu towns (Vaniyambadi, Ambur, Nagore, Chennai, Coimbatore, Madurai, Trichy) as H3s. Link to `/muslim-matrimony/chennai`.
- Mappila: Kerala districts as H3s (Malappuram, Kozhikode/Calicut, Kannur, Thrissur, Kochi). Link to `/muslim-matrimony/kochi`. This page owns "Mappila matrimony". The Kochi page owns "Mappila Muslim matrimony Kochi".
- Konkani: Mumbai, Pune, Malegaon, Bhiwandi as H3s. Link to `/muslim-matrimony/mumbai`.
- Deccani: Hyderabad localities, Warangal, Nizamabad. Link to `/muslim-matrimony/hyderabad`.
- Remarriage: respectful, Shariah-compliant tone. Cover divorcee, widow, second marriage, how verification works, privacy. Link all city pages.

### Batch 2 (after Batch 1 is indexed)

| URL | Primary keyword |
|---|---|
| `/muslim-matrimony/beary-bhatkali` | Beary muslim matrimony |
| `/muslim-matrimony/nri-gulf` | NRI / Gulf muslim rishta |
| `/muslim-matrimony/professionals` | muslim doctor / engineer groom or bride |
| `/muslim-matrimony/memon` | Memon matrimony (`OWNER:` confirm) |

### Locality pages (only if data supports them)

- Do **not** build standalone pages for Frazer Town, Shivaji Nagar, RT Nagar, Vaniyambadi, Ambur, Malappuram, etc. yet.
- After 4 to 6 weeks, check Search Console. If a locality gets impressions, spin it out into its own page (`/muslim-matrimony/bengaluru/frazer-town`) with real local detail. `OWNER:` provide local coordinator/visit info.

## 3. Intent modules (reusable)

Add as short sections on city pages, linking to the standalone pages:

- **Divorcee / widow / second marriage:** "Muslim second marriage in {City}". 2 to 3 sentences + link to `/muslim-matrimony/divorcee-widow-remarriage`.
- **Working professionals:** doctors, engineers, IT professionals, CAs, teachers, business owners (already on site).
- **NRI / Gulf families:** Gulf-based professionals and overseas families (already on site).
- **Schools of thought:** Sunni Hanafi, Shafi'i, Ahle Hadees (already on site). Include as one line, not separate pages.

## 4. Master keyword map (feeds `seo/keyword-tracker.csv`)

Difficulty is an **estimate**. `OWNER:` fills `volume` from Google Keyword Planner.

| Keyword | Target URL | Est. difficulty |
|---|---|---|
| muslim marriage bureau in Bangalore | /muslim-matrimony/bengaluru | Med |
| muslim marriage bureau Cox Town | /muslim-matrimony/bengaluru | Easy |
| muslim matrimony Frazer Town | /muslim-matrimony/bengaluru (H3) | Easy |
| muslim matrimony Shivaji Nagar | /muslim-matrimony/bengaluru (H3) | Easy |
| muslim rishta Bangalore | /muslim-matrimony/bengaluru | Med |
| muslim matchmaking Bangalore | /muslim-matrimony/bengaluru | Med |
| muslim marriage bureau near me | /muslim-matrimony/bengaluru + Google Business Profile | Med |
| Beary muslim matrimony | /muslim-matrimony/beary-bhatkali | Easy |
| Bhatkali matrimony | /muslim-matrimony/beary-bhatkali | Easy |
| Urdu speaking muslim matrimony Bangalore | /muslim-matrimony/bengaluru (H2) | Easy |
| Labbai matrimony | /muslim-matrimony/labbai-rowther-marakkayar | Easy |
| Rowther matrimony | /muslim-matrimony/labbai-rowther-marakkayar | Easy |
| Marakkayar matrimony | /muslim-matrimony/labbai-rowther-marakkayar | Easy |
| Tamil muslim matrimony | /muslim-matrimony/chennai | Med |
| muslim matrimony Vaniyambadi / Ambur / Nagore | /muslim-matrimony/chennai (H3) | Easy |
| muslim matrimony Coimbatore / Madurai / Trichy | /muslim-matrimony/chennai (H3) | Easy to Med |
| muslim marriage bureau Chennai | /muslim-matrimony/chennai | Med |
| Deccani muslim matrimony | /muslim-matrimony/deccani | Easy to Med |
| Hyderabadi muslim rishta | /muslim-matrimony/hyderabad | Med |
| muslim marriage bureau Hyderabad | /muslim-matrimony/hyderabad | Med |
| muslim matrimony Tolichowki / Mehdipatnam / Malakpet | /muslim-matrimony/hyderabad (H3) | Easy |
| muslim matrimony Warangal / Nizamabad | /muslim-matrimony/hyderabad (H3) | Easy |
| Urdu matrimony Hyderabad | /muslim-matrimony/hyderabad (H2) | Med |
| Mappila matrimony | /muslim-matrimony/mappila | Med |
| muslim matrimony Malappuram | /muslim-matrimony/kochi (H3) | Easy |
| muslim matrimony Kozhikode / Calicut | /muslim-matrimony/kochi (H3) | Easy |
| muslim matrimony Kannur / Thrissur | /muslim-matrimony/kochi (H3) | Easy |
| muslim matrimony Kochi / Ernakulam | /muslim-matrimony/kochi | Med |
| Konkani muslim matrimony | /muslim-matrimony/konkani | Easy |
| Memon matrimony | /muslim-matrimony/memon (`OWNER:` confirm) | Med |
| muslim matrimony Malegaon / Bhiwandi / Aurangabad / Nagpur | /muslim-matrimony/mumbai (H3) | Easy |
| muslim matrimony Pune | /muslim-matrimony/mumbai (H3) | Med |
| muslim matrimony Mumbai | /muslim-matrimony/mumbai | Hard |
| muslim matrimony Vijayawada / Visakhapatnam | /muslim-matrimony/vijayawada | Easy |
| muslim matrimony Guntur / Kurnool / Nellore / Kadapa | /muslim-matrimony/vijayawada (H3) | Easy |
| divorcee muslim matrimony | /muslim-matrimony/divorcee-widow-remarriage | Easy |
| muslim second marriage | /muslim-matrimony/divorcee-widow-remarriage | Easy |
| muslim widow remarriage | /muslim-matrimony/divorcee-widow-remarriage | Easy |
| NRI / Gulf muslim rishta | /muslim-matrimony/nri-gulf | Easy |
| muslim doctor / engineer groom or bride | /muslim-matrimony/professionals | Easy to Med |
| Sunni Hanafi / Shafi'i / Ahle Hadees matrimony | /muslim-matrimony-india (section) | Med |
| muslim matrimony in India | /muslim-matrimony-india | Hard |

- [ ] Create `seo/keyword-tracker.csv` with columns: `keyword,target_url,est_difficulty,volume,week0_pos,week4_impr,week4_clicks,week4_pos,week8_impr,week8_clicks,week8_pos`.

## 5. FAQ question bank (write answers in the agent's own words, from real site facts)

Answers must be factual and consistent with `claims.ts`. `OWNER:` confirm anything about pricing, timelines, or visits. Add `FAQPage` JSON-LD matching the visible text.

- **Bengaluru:** Is there a Muslim marriage bureau in Bangalore I can visit? / Do you cover Frazer Town, Shivaji Nagar and RT Nagar? / Do you match Beary and Bhatkali families? / Can I find Urdu-speaking matches in Bangalore? / How does HumNikah verify profiles in Bangalore?
- **Chennai:** How do you match Labbai, Rowther and Marakkayar families? / Do you serve Vaniyambadi and Ambur? / Can I search in Tamil or Urdu? / Do I need to travel to Bangalore?
- **Hyderabad:** Do you support Deccani families? / Can I get Urdu-speaking proposals? / Do you cover Old City, Malakpet, Tolichowki and Mehdipatnam? / Do you cover Warangal and Nizamabad?
- **Kochi/Kerala:** How does Mappila matchmaking work? / Do you cover Malappuram, Kozhikode and Kannur? / Can Gulf-based Kerala families register?
- **Mumbai:** Do you match Konkani and Memon families? / Do you cover Pune, Malegaon and Bhiwandi? / Is there an office in Mumbai? (Answer: phone/WhatsApp service, meetings at Bengaluru.)
- **Vijayawada/AP:** Which AP cities do you serve? / How do I get started from Visakhapatnam or Guntur?
- **Remarriage page:** Do you help Muslim divorcees and widows? / Is second marriage handled with Wali involvement? / How is privacy protected?

## 6. Blog posts (target long-tail, each 900+ words)

Each post: unique keyword, `Article` schema, internal links to the matching city page and `/submit-biodata`, real publish date.

| Slug | Target keyword |
|---|---|
| `/blog/muslim-marriage-bureau-bangalore-guide` | muslim marriage bureau in Bangalore |
| `/blog/muslim-rishta-hyderabad-guide` | Hyderabadi muslim rishta |
| `/blog/labbai-rowther-marakkayar-matchmaking` | Labbai Rowther matrimony |
| `/blog/mappila-matrimony-kerala-guide` | Mappila matrimony |
| `/blog/konkani-muslim-matrimony-mumbai` | Konkani muslim matrimony |
| `/blog/muslim-biodata-format-for-marriage` | muslim biodata format |
| `/blog/muslim-divorcee-remarriage-guide` | divorcee muslim matrimony |
| `/blog/how-to-verify-a-muslim-rishta` | verify muslim rishta |
| `/blog/first-rishta-meeting-etiquette` | rishta meeting questions |
| `/blog/nri-gulf-muslim-rishta-guide` | NRI muslim rishta |

## 7. Internal linking and navigation

- [ ] Nav: "Muslim Matrimony in India" + a "Communities" dropdown (Labbai/Rowther/Marakkayar, Mappila, Konkani, Deccani, Remarriage).
- [ ] `/muslim-matrimony-india`: link all 6 cities and all community pages with descriptive anchors.
- [ ] Each city page: link to the relevant community pages (e.g. Chennai -> Labbai/Rowther/Marakkayar).
- [ ] Each community page: link back to its city page and `/muslim-matrimony-india`.
- [ ] Footer: all 6 cities + community pages.
- [ ] Breadcrumbs: Home > Muslim Matrimony in India > {City or Community}, with `BreadcrumbList` schema.

## 8. Technical checklist for every new or updated page

- [ ] Canonical = `https://www.humnikah.com/<path>`.
- [ ] In `sitemap.ts` with real `lastModified`.
- [ ] One H1, valid heading order.
- [ ] Unique title/description within limits.
- [ ] Open Graph + Twitter tags use the same title/description.
- [ ] Images: alt text with natural keyword on one image only; `next/image` with correct `sizes`.
- [ ] `BreadcrumbList` + `FAQPage` JSON-LD valid in Rich Results Test.
- [ ] CTA: "Submit Biodata" + WhatsApp + call visible above the fold on mobile.
- [ ] Build fails if any `TODO` text is present.

## 9. After launch

- [ ] Submit new URLs in Search Console (URL Inspection > Request indexing) for the first 10 pages.
- [ ] Week 4 and week 8: export Search Console queries, fill the tracker, and report: queries with impressions but position > 10 (improve those pages), pages with 0 impressions (check indexing and content depth).
- [ ] Spin out locality pages only for queries that already show impressions.

## 10. `OWNER:` inputs needed

- Confirm served localities/towns are real (section 1). Confirm Bohra and Memon.
- Keyword Planner volumes for the tracker.
- Real local details per city (coordinator, visit days, community events) and consented anonymised success stories.
- Confirm pricing/timeline statements before any FAQ mentions them.
- Google Business Profile for the Cox Town office, with name/address/phone identical to the site.

## Definition of done

- [ ] 6 city pages updated with the titles, descriptions, H1s and required sections
- [ ] Batch 1 community/remarriage pages live, indexed, linked
- [ ] Every keyword in section 4 mapped to exactly one primary page
- [ ] No page under 400 unique words; no duplicated paragraphs across cities
- [ ] FAQ + breadcrumb schema valid
- [ ] `seo/keyword-tracker.csv` created
- [ ] Sitemap, internal links and nav updated
- [ ] Build asserts (title/description length, no TODO) pass