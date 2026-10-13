# HumNikah — Agent Spec: Bangalore Ranking + Bangalore Areas + Keyword Gaps

Site: `https://www.humnikah.com` (`.in` 301 → www).
Scope: (A) rank `/muslim-matrimony/bengaluru` for "muslim marriage bureau bangalore"; (B) rank for Muslim-area keywords in Bangalore; (C) fix the gaps found when the 66-keyword tracker was checked against the live site.

## 0. Rules (read first)

- Never invent facts. Anything tagged `OWNER:` needs a real value from the owner. If missing, leave the section out. Do not ship placeholder text.
- No fake offices. Only ONE office exists: Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005. All other cities = "served via phone & WhatsApp".
- No "100% verified" style claims. Use `claims.ts` wording: "Every profile is manually screened; we check identity and address documents; we do not run formal criminal-record checks."
- One primary keyword per page. Do not copy-paste area text between pages (doorway-page risk).
- All WhatsApp CTAs use `/whatsapp?src=<tag>` (nofollow). Phones: call +91 98443 21312, WhatsApp +91 90190 82205.
- Title ≤ 60 chars, meta ≤ 155 chars. Everything schema says must also be visible on the page.

## 1. Priority order

| P | Task | Section |
|---|------|---------|
| P0 | Remove Chennai `TODO(owner)` text + fake-office wording; remove "100% Verified" claims; fix `/fees` vs "free" wording; test biodata download files | 2 |
| P0 | Rewrite Bengaluru page (title/meta/H1/intro/FAQ/schema) | 3 |
| P1 | Fix Bengaluru-page vs Bangalore-blog cannibalization | 4 |
| P1 | Bangalore areas — Phase 1 (area section on Bengaluru page) | 5 |
| P1 | Gap fixes (Chennai towns, Ernakulam, Hinglish, India-page links) | 7 |
| P2 | Bangalore areas — Phase 2 (dedicated area pages, only after data) | 5.5 |
| P2 | Community pages depth | 7.6 |

## 2. P0 — Site-wide fixes found in the live check

1. **Chennai page** (`/muslim-matrimony/chennai`)
   - Delete both visible `TODO(owner)` lines.
   - Remove the "HumNikah Chennai Office" block (address "Chennai, Tamil Nadu – 600001", phone, hours). Replace with the same "Serving Chennai families via phone & WhatsApp" block used on Hyderabad/Kochi/Mumbai/Vijayawada.
   - Fix contradictions: intro line about "walk-in support at our head office" → "In-person meetings are at our Bengaluru office"; FAQ "Chennai managers coordinate with Bengaluru head office" → remove or reword to "Our team serves Chennai families by phone and WhatsApp; the office is in Bengaluru."
   - Rename H3 "100% Verified Profiles" → "Manually Screened Profiles" (same as other city pages).
2. **India page** (`/muslim-matrimony-india`): replace "100% Verified, Shariah-Compliant" with "Manually Screened, Privacy-First" (or the exact `claims.ts` string).
3. **`/fees` vs "free"**: blogs say biodata submission is free. `OWNER:` confirm. If free, add a plain line on `/fees`: "Submitting your biodata is free." If not, tell the agent and the blog copy will be changed.
4. **Biodata downloads**: confirm these 4 files exist and return 200; if not, either create them from the two templates in the biodata blog or remove the download links until ready:
   - `/downloads/muslim-biodata-format-boy.docx`, `.pdf`
   - `/downloads/muslim-biodata-format-girl.docx`, `.pdf`
5. **Empty tag**: remove the empty `meta-next-size-adjust` meta tag from `<head>` on all pages.
6. **Raw front-matter** showing on the Bangalore blog post: strip YAML front matter from the rendered body (parse with gray-matter / MDX frontmatter option).
7. **Unlinked TOC items** in Bangalore/Hyderabad/Konkani posts: add heading ids and make "In this guide" items anchor links.

## 3. Bengaluru page — rank for "muslim marriage bureau bangalore"

File: `/muslim-matrimony/bengaluru`. This page is the ONLY page that targets the exact phrase.

### 3.1 Metadata
- Title (46): `Muslim Marriage Bureau in Bangalore | HumNikah`
- Meta description (≤155): `Muslim marriage bureau in Bangalore (Cox Town). Manual profile screening, Wali involved, private. Submit your biodata or chat on WhatsApp.`
  - If `/fees` confirms biodata is free, append "Free biodata submission." only if it still fits 155.
- Canonical: `https://www.humnikah.com/muslim-matrimony/bengaluru`
- H1: `Muslim Marriage Bureau in Bangalore`
  - Keep the "& Matrimony" idea in the first H2, not the H1.

### 3.2 Heading structure (keep existing sections, adjust headings)
- H1 Muslim Marriage Bureau in Bangalore
- H2 Muslim Matrimony and Matchmaking in Bangalore (Bengaluru)
  - H3 Communities we serve in Bengaluru (keep)
- H2 Why Bangalore Families Choose HumNikah (keep 4 H3s; rename "100% Verified" if present)
- H2 How Our Muslim Marriage Bureau in Bangalore Works (keep 4 steps)
- H2 Muslim Areas of Bangalore We Serve (**new, see section 5**)
- H2 Karnataka Towns We Serve (keep existing)
- H2 Remarriage, Professionals and Overseas Families in Bengaluru (keep)
- H2 HumNikah Bengaluru Office — Cox Town (keep; add map)
- H2 How to Choose a Muslim Marriage Bureau in Bangalore (**new** short section, 120–150 words, links to the blog)
- H2 Related guides (keep)
- H2 Muslim Marriage Bureau in Bangalore — FAQs (keep, extend)
- H2 Begin Your Nikah Journey in Bangalore (keep)

### 3.3 Intro copy (replace the first paragraph under the first H2)
```
HumNikah is a Muslim marriage bureau in Bangalore with its office in Cox Town, Bengaluru. We help Muslim families find a suitable rishta with privacy and respect. Every profile is manually screened, we check identity and address documents, and we involve the Wali where the bride's family wishes. Families from Cox Town, Frazer Town, Shivajinagar, RT Nagar and across Bangalore can submit a biodata or message us on WhatsApp to begin.
```
Rules: exact phrase "Muslim marriage bureau in Bangalore" once in the intro, once in the H2 of 3.2, once in the new "How to choose" section, once in FAQ. Do not stuff beyond that. Use "Bengaluru" naturally elsewhere.

### 3.4 New section: "How to Choose a Muslim Marriage Bureau in Bangalore"
```
When you compare marriage bureaus in Bangalore, ask five things: how profiles are screened and what is not verified, who will see your biodata, whether the bride's Wali is involved, what the fees are in writing, and who your contact person will be. A good bureau never promises a match or a date. Read our full guide: [How to Choose the Best Muslim Marriage Bureau in Bangalore](/blog/muslim-marriage-bureau-bangalore-guide).
```

### 3.5 FAQ (visible HTML + FAQPage schema, same text)
Keep existing FAQs; make sure these exist:
1. **Is there a Muslim marriage bureau in Bangalore I can visit?** — Yes. Our office is at Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005. Please call or message us before visiting. `OWNER:` add office hours.
2. **Which areas of Bangalore do you serve?** — We serve families across Bangalore, including Cox Town, Frazer Town, Shivajinagar, RT Nagar and nearby areas, by phone, WhatsApp and in person at our office.
3. **How do you screen profiles?** — Every profile is manually screened and we check identity and address documents. We do not run formal criminal-record checks, so we encourage families to make their own enquiries too.
4. **Do you serve Urdu, Beary, Bhatkali and Deccani families in Bangalore?** — Yes, tell us your community, language and family preferences and we take them into account.
5. **What are your fees?** — `OWNER:` one factual sentence consistent with `/fees`. Link to `/fees`.
6. **Can I join a Bangalore Muslim matrimony WhatsApp group?** — We do not run an open group, because groups expose phone numbers and biodatas. Chat with our team personally instead: link `/whatsapp?src=bengaluru-faq`. We will not add you to any group without your permission.

### 3.6 Schema (JSON-LD `@graph`, server-rendered)
- `LocalBusiness` (use `@type: ["LocalBusiness","ProfessionalService"]`), `@id` `https://www.humnikah.com/#bengaluru-office`
  - name `HumNikah`, url the Bengaluru page, telephone `+919844321312`, address: Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru, Karnataka 560005, IN
  - `areaServed`: Bengaluru, plus the Phase 1 areas (as `Place` names)
  - `parentOrganization`/`@id` link to `https://www.humnikah.com/#organization`
  - `sameAs`: Google Business Profile URL once verified, plus real social profiles
  - `openingHours` only if `OWNER:` provides real hours
  - NO `aggregateRating`/`Review` unless real reviews are displayed on the page
- `BreadcrumbList`: Home › Muslim Matrimony › Bengaluru
- `FAQPage`: generated from the visible FAQ

### 3.7 Map + contact block
- Embed Google Map of the Cox Town office (lazy-loaded iframe, `loading="lazy"`, `title` attribute).
- Show NAP exactly as in the Google Business Profile: name `HumNikah`, address as above, call number, WhatsApp via `/whatsapp?src=bengaluru-office`.

## 4. Cannibalization rules (Bengaluru page vs Bangalore blog)

| Keyword | Owner |
|---|---|
| muslim marriage bureau bangalore / in bangalore | `/muslim-matrimony/bengaluru` |
| muslim matchmaking bangalore, muslim rishta bangalore | `/muslim-matrimony/bengaluru` |
| best muslim marriage bureau in bangalore | `/blog/muslim-marriage-bureau-bangalore-guide` |
| how to choose a muslim marriage bureau | blog |
| area keywords (section 5) | Bengaluru page Phase 1, then area pages in Phase 2 |

Edits:
1. Blog: do not use the phrase "muslim marriage bureau in Bangalore" in the title/H1 (current title "How to Choose the Best Muslim Marriage Bureau in Bangalore" is fine — it carries "best"). In the intro add one exact-match anchor: `[Muslim marriage bureau in Bangalore](/muslim-matrimony/bengaluru)`.
2. Blog: add a closing CTA link to the Bengaluru page with anchor "our Bangalore matrimony page".
3. Tracker: move `muslim marriage bureau in bangalore frazer town` from the blog to the Frazer Town target (Phase 1 H3 now, Phase 2 page later). The blog keeps "best muslim marriage bureau in bangalore" only.
4. Konkani: the community page `/muslim-matrimony/konkani` owns "konkani muslim matrimony". The blog owns "konkani muslim matrimony in mumbai", "konkani muslim marriage bureau", "are konkani muslims sunni". Cross-link both ways. Do not repeat the same H1 phrase on both.

## 5. Bangalore areas — rank for Muslim areas of Bangalore

### 5.1 Strategy
- Phase 1 (now): a strong "Muslim Areas of Bangalore We Serve" section on the Bengaluru page, one H3 per area with its own unique 60–90 words. This lets the page rank for "muslim matrimony <area>" without creating thin pages.
- Phase 2 (after data): dedicated area pages ONLY for areas that show impressions in Search Console, starting with Cox Town (office), Shivajinagar and Frazer Town.
- Do not create 20 area pages now. Thin near-duplicate pages hurt a new site.

### 5.2 Area list (`OWNER:` confirm you can serve each; delete any you cannot)

Tier A (Muslim-dense central and north Bangalore, do now):
- Cox Town (office)
- Frazer Town (Pulakeshi Nagar)
- Shivajinagar
- Richards Town
- Benson Town
- Tannery Road
- RT Nagar
- DJ Halli and KG Halli
- Murphy Town
- Jayamahal

Tier B (add in Phase 1 as short mentions inside a "More areas" list, no own H3):
- Banaswadi, Nagawara, Hennur, Kammanahalli, Yeshwanthpur, Chamarajpet, Mysore Road, Kalasipalya, Wilson Garden, Austin Town

Tier C (generic mention only, "and nearby areas"):
- Whitefield, Electronic City, Yelahanka, Bommanahalli

### 5.3 Keyword patterns per area (apply to every Tier A area)
- muslim matrimony `<area>`
- muslim marriage bureau `<area>`
- muslim rishta `<area>` bangalore
- muslim marriage bureau near `<area>`

Check volume in Keyword Planner before investing. Expect low volume (single or double digits); the value is in conversion and low competition.

### 5.4 Phase 1 implementation (Bengaluru page)

Data file `data/bengaluru-areas.ts`:
```ts
export type Area = {
  slug: string;          // e.g. 'frazer-town'
  name: string;          // 'Frazer Town'
  alsoKnownAs?: string;  // 'Pulakeshi Nagar'
  blurb: string;         // 60–90 words, UNIQUE per area
  dedicatedPage?: boolean; // flips true in Phase 2
};
export const bengaluruAreas: Area[] = [ /* Tier A */ ];
```
Rendering:
- `<h2>Muslim Areas of Bangalore We Serve</h2>` then an intro sentence, then one `<h3>Muslim Matrimony in {name}</h3>` + blurb per Tier A area.
- Under the list: `<p>We also serve families in Banaswadi, Nagawara, Hennur, ... and nearby areas of Bangalore.</p>` (Tier B inline text, no headings).
- Each blurb ends with a link to `/whatsapp?src=bengaluru-<slug>` ("Message us from {name}").
- If `dedicatedPage` is true, the H3 links to the area page.
- Keep the area names also in the existing "Bangalore neighbourhoods we serve" H3; do not delete the current text, merge it into this new section.

Blurb rules (so the content is unique and true):
- Each blurb must contain at least ONE real, area-specific fact supplied by the owner: distance/route to the Cox Town office, typical languages or communities families use in that area, or how the team has served families there. If `OWNER:` has no fact for an area, the area gets a one-line mention in the Tier B text instead of its own H3.
- No claims of an office in the area. No made-up statistics. No mosque/landmark names unless `OWNER:` confirms them.

Template (fill with real facts only):
```
{Name} is {X} from our Cox Town office. Families from {Name} contact us in {Urdu / Dakhni / Kannada / Beary — OWNER}. Our team screens each profile manually and involves the Wali where the bride's family wishes. You can submit a biodata, call, or message us on WhatsApp, or visit the office by appointment.
```

Sample (Cox Town — this is the office, so the fact is safe):
```
Our office is in Cox Town, on Wheeler Road, so families nearby can visit us by appointment. We speak with families in Urdu, English, Kannada and Hindi. Every profile is manually screened, and we can explain our process in person. Call or message us before visiting so we can set aside time for your family.
```
(`OWNER:` confirm the languages spoken at the office.)

Do not use the sample above for other areas.

### 5.5 Phase 2 — dedicated area pages (only when triggered)

Trigger: Search Console shows impressions for `<area>` queries for 4 weeks, or the owner can supply unique local content.

URL pattern: `/muslim-matrimony/bengaluru/<area-slug>` (e.g. `/muslim-matrimony/bengaluru/cox-town`).

Per page requirements (≥ 600 unique words, no template-only text):
- Title: `Muslim Marriage Bureau in {Area}, Bangalore | HumNikah` (≤ 60 chars; shorten if needed)
- H1: `Muslim Marriage Bureau in {Area}, Bangalore`
- Sections: how families from {Area} use us, how the process works, communities and languages commonly seen (OWNER facts), how to reach the office from {Area}, FAQs (4–5, unique), link up to the Bengaluru page, links across to 2 neighbouring area pages.
- Schema: `BreadcrumbList` (Home › Bengaluru › Area) and `FAQPage`. Reuse the `LocalBusiness` `@id` of the Cox Town office; do not create a new business entity for the area.
- Add to sitemap; canonical self-referencing.
- Internal links: from the Bengaluru page H3, the footer "Bangalore areas" list, and the relevant blog posts.

If an area page would be mostly the same as the Bengaluru page, do not create it.

## 6. Local SEO — owner tasks (no code)

- [ ] Create/verify Google Business Profile for the Cox Town office. Category "Marriage bureau" (or nearest). Name/address/phone identical to the website. Add photos, hours, services, and the Bengaluru page URL.
- [ ] Ask real clients for Google reviews after a successful introduction (never buy or fake).
- [ ] Add Bing Places, Justdial, Sulekha, IndiaMART with identical NAP.
- [ ] Get 3–5 relevant backlinks (Muslim community sites, local directories, community groups).
- [ ] In Search Console: request indexing for the Bengaluru page and both Bangalore/Hyderabad blogs after the changes go live.

## 7. Gap fixes from the 66-keyword check

### 7.1 Chennai towns — add to `/muslim-matrimony/chennai`
New H3 under "Areas and Towns We Serve near Chennai": `Tamil Nadu towns we serve`. Include (only the towns the owner serves): Vaniyambadi, Ambur, Nagore, Coimbatore, Madurai, Tiruchirappalli (Trichy).
- Each town: 1–2 unique sentences, `OWNER:` real facts. If none, list the towns in a single sentence.
- Add the exact phrase "Muslim marriage bureau in Chennai" once in the intro and once in an H2: `How Our Muslim Marriage Bureau in Chennai Works`.
- Title: `Muslim Marriage Bureau in Chennai | HumNikah` (keeps "Verified" out).

### 7.2 Kochi — add Ernakulam
In `/muslim-matrimony/kochi`, add "Ernakulam" to the Kerala districts list and to the intro: "Kochi (Ernakulam)". One sentence is enough.

### 7.3 "muslim rishtey bureau" and Hinglish
- Add a Hinglish block on `/muslim-matrimony-india` and keep the homepage line. Copy is in `humnikah-agent-spec-wave1b.md` (heading "Muslim Rishta Chahiye? Apna Biodata Free Submit Karein"). Include the phrase "Muslim rishtey bureau" once inside that block. `OWNER:` confirm "free" first.
- Link that block to `/submit-biodata` and `/whatsapp?src=india-hinglish`.

### 7.4 India page — link to community pages
`/muslim-matrimony-india` links to none of the 8 community pages. Add a "Communities we serve" section with 8 links (descriptive anchors):
- /muslim-matrimony/labbai-rowther-marakkayar — "Labbai, Rowther and Marakkayar matrimony"
- /muslim-matrimony/mappila — "Mappila matrimony"
- /muslim-matrimony/konkani — "Konkani Muslim matrimony"
- /muslim-matrimony/deccani — "Deccani Muslim matrimony"
- /muslim-matrimony/divorcee-widow-remarriage — "Muslim divorcee and widow remarriage"
- /muslim-matrimony/beary-bhatkali — "Beary and Bhatkali matrimony"
- /muslim-matrimony/nri-gulf — "NRI and Gulf Muslim rishta"
- /muslim-matrimony/professionals — "Muslim doctors, engineers and professionals"
Also add links to `/blog/how-to-verify-a-muslim-rishta` and `/blog/muslim-biodata-format-for-marriage`.

### 7.5 Memon — HOLD
Do NOT create `/muslim-matrimony/memon` until `OWNER:` confirms Memon families are actively served. Until then, leave the tracker row as "hold".

### 7.6 Community pages are thin (300–450 words)
Target 500–700 words each, no filler. Add per page: "Who we serve" (with `OWNER:` facts), "How matching works for this community", "What families usually ask", 4 FAQs (FAQPage schema), 3 internal links (nearest city page, India page, one blog). Do konkani, mappila, beary-bhatkali, labbai-rowther-marakkayar first (thinnest). Do not copy sentences between community pages.

## 8. Internal link map

| From | To | Anchor |
|---|---|---|
| Homepage | /muslim-matrimony/bengaluru | Muslim marriage bureau in Bangalore |
| Footer (all pages) | /muslim-matrimony/bengaluru | Muslim Marriage Bureau in Bangalore |
| /muslim-matrimony-india | /muslim-matrimony/bengaluru | Muslim marriage bureau in Bangalore |
| Bangalore blog | /muslim-matrimony/bengaluru | Muslim marriage bureau in Bangalore (intro) + our Bangalore matrimony page (CTA) |
| Beary-Bhatkali page | /muslim-matrimony/bengaluru | Muslim matrimony in Bangalore |
| Deccani page | /muslim-matrimony/bengaluru | Muslim matrimony in Bangalore |
| Bengaluru page | Bangalore blog | how to choose a marriage bureau |
| Bengaluru page | /fees, /faq, /submit-biodata | descriptive |
| Hyderabad/Chennai pages | Bengaluru page | "our Bengaluru office" |

## 9. Tracker updates (append/modify rows)

```
keyword,target_url,est_difficulty,volume,week0_pos,week4_impr,week4_clicks,week4_pos,week8_impr,week8_clicks,week8_pos
muslim marriage bureau bangalore,/muslim-matrimony/bengaluru,Med,,,,,,,,
muslim matrimony cox town,/muslim-matrimony/bengaluru (H3),Easy,,,,,,,,
muslim matrimony richards town,/muslim-matrimony/bengaluru (H3),Easy,,,,,,,,
muslim matrimony benson town,/muslim-matrimony/bengaluru (H3),Easy,,,,,,,,
muslim matrimony tannery road,/muslim-matrimony/bengaluru (H3),Easy,,,,,,,,
muslim matrimony rt nagar,/muslim-matrimony/bengaluru (H3),Easy,,,,,,,,
muslim matrimony dj halli / kg halli,/muslim-matrimony/bengaluru (H3),Easy,,,,,,,,
muslim matrimony murphy town / jayamahal,/muslim-matrimony/bengaluru (H3),Easy,,,,,,,,
muslim marriage bureau shivajinagar,/muslim-matrimony/bengaluru (H3),Easy,,,,,,,,
muslim marriage bureau frazer town,/muslim-matrimony/bengaluru (H3),Easy,,,,,,,,
```
Also: change the target of `muslim marriage bureau in bangalore frazer town` from the blog to `/muslim-matrimony/bengaluru (H3)`. Mark `Memon matrimony` as `HOLD`. After Phase 2, change area rows to the new area URLs.

## 10. QA checklist

- [ ] No `TODO`, `OWNER:` or placeholder text visible on any live page (`grep` the built HTML).
- [ ] Chennai page: no office block, no "100% Verified".
- [ ] India page: no "100% Verified, Shariah-Compliant".
- [ ] Bengaluru page: title ≤ 60, meta ≤ 155, one H1, exact phrase appears 3–4 times total (not stuffed).
- [ ] Bengaluru FAQ schema text equals visible FAQ text; LocalBusiness address equals the footer and GBP address exactly.
- [ ] Each area blurb is unique (no shared sentences) and contains a real fact; no area claims an office.
- [ ] Anchor links for TOC items work; no front-matter text in rendered blogs.
- [ ] Biodata download links return 200.
- [ ] All `/whatsapp?src=` links are `rel="nofollow"` and redirect to wa.me.
- [ ] `linkinator` passes with no broken internal links; sitemap lists any new pages.
- [ ] Lighthouse mobile ≥ 90 SEO on the Bengaluru page.

## 11. Owner inputs needed

1. Office hours for Cox Town.
2. Confirm "biodata submission is free".
3. Fees sentence for the FAQ.
4. Which Bangalore areas you actually serve, plus one real fact for each Tier A area.
5. Which Tamil Nadu towns you serve (Chennai towns block).
6. Memon: serve or not.
7. Google Business Profile URL once verified.
8. Biodata download files, if not already created.