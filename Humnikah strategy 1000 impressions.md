# HumNikah: Master Agent Spec (Bangalore + Impressions Growth)

Site: `https://www.humnikah.com` (`.in` already 301 → www).
This file is **self-contained**. Everything the agent needs (rules, copy, data, schema, checklists) is in here. No other file is required.

## 0. Decisions already made by the owner (do not ask again)

1. **No religious pages for now.** Do NOT create any page about mahr, nikah rules, sunnah, wali rulings, walima, nikahnama, khutbah, dua, istikhara or similar. (See section 12, parked.)
2. **Biodata submission is free.** Use the exact sentence: "Submitting your biodata to HumNikah is free."
3. **All Bangalore locations are served.** First priority: Muslim-dense areas (Central, North, West zones). Other zones (South, South-East, East) are Phase 2.
4. **Other cities:** use only the cities already on the live site (Bengaluru, Chennai, Hyderabad, Vijayawada, Kochi, Mumbai) and the locations in the site footer "Our Locations & Regional Hubs". Do not add new cities.
5. **Social profile links:** use only the social links already in the site footer. Do not invent any.

## 1. Global rules

- **One office only:** Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005. Everywhere else is "served by phone and WhatsApp". Never show an office, address or hours for any other place.
- **Contacts:** call +91 98443 21312; WhatsApp +91 90190 82205 (always through the redirect `/whatsapp?src=<tag>`, `rel="nofollow"`).
- **No overclaims:** no "100% verified", no "guaranteed match", no ratings or reviews, no statistics, no population claims about any area. Use this screening sentence only: "Every profile is manually screened and we check identity and address documents. We do not run formal criminal-record checks."
- One primary keyword per page. No copy-paste between pages. All new pages: self-referencing canonical on `https://www.humnikah.com/...`, in `sitemap.xml`, linked from at least 3 pages.
- Title ≤ 60 characters, meta description ≤ 155. Schema text must match the visible text.
- Use "Bangalore" and "Bengaluru" both, naturally (people search both).
- No `TODO`, `OWNER:` or placeholder text may appear on any live page.

## 2. Work order

| P | Task | Section |
|---|------|---------|
| P0 | Fix existing pages (Chennai cleanup, claims, "free" wording, India page, Kochi) | 2 |
| P0 | Rewrite the Bengaluru page | 3 |
| P0 | Contact page + brand schema | 6, 7 |
| P1 | Zone pages, Phase 1 (Central, North, West) | 4 |
| P1 | Karnataka page | 5 |
| P1 | Content pages 1 to 5 (English) | 8 |
| P2 | Hinglish pages and blocks | 9 |
| P2 | Zone pages, Phase 2 (South, South-East, East) | 4 |
| P2 | Remaining content pages | 8 |

---

## 2. Fixes to existing pages (P0)

### 2.1 Chennai page `/muslim-matrimony/chennai`
- Delete both visible `TODO(owner)` lines.
- Delete the "HumNikah Chennai Office" block (address "Chennai, Tamil Nadu – 600001", phone, hours).
- Replace it with this block (same pattern as Hyderabad/Kochi/Mumbai):
  - H2: `Serving Chennai Families`
  - Text: "HumNikah does not have an office in Chennai. We serve Chennai families by phone and WhatsApp. In-person meetings are at our office in Cox Town, Bengaluru (Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005). Please call or message us before visiting."
- Fix the contradictions: the intro line about "walk-in support at our head office" becomes "In-person meetings are at our Bengaluru office"; the FAQ line "Chennai managers coordinate with the Bengaluru head office" becomes "Our team serves Chennai families by phone and WhatsApp. Our office is in Bengaluru."
- Rename H3 "100% Verified Profiles" to "Manually Screened Profiles" (same as the other city pages).
- Add a new H3 under the "areas" part: `Tamil Nadu towns near Chennai` with: "Families from Vaniyambadi, Ambur, Nagore, Coimbatore, Madurai and Tiruchirappalli (Trichy) can also reach us by phone and WhatsApp." (Use the wording "can reach us". Do not write "we serve" or "we have coordinators".)
- Add the phrase "Muslim marriage bureau in Chennai" once in the intro and use this H2: `How Our Muslim Marriage Bureau in Chennai Works`.
- Title: `Muslim Marriage Bureau in Chennai | HumNikah`.

### 2.2 India page `/muslim-matrimony-india`
- Replace "100% Verified, Shariah-Compliant" with "Manually Screened. Privacy First."
- Add a section "Communities we serve" with 8 links (descriptive anchors):
  - `/muslim-matrimony/labbai-rowther-marakkayar`: Labbai, Rowther and Marakkayar matrimony
  - `/muslim-matrimony/mappila`: Mappila matrimony
  - `/muslim-matrimony/konkani`: Konkani Muslim matrimony
  - `/muslim-matrimony/deccani`: Deccani Muslim matrimony
  - `/muslim-matrimony/divorcee-widow-remarriage`: Muslim divorcee and widow remarriage
  - `/muslim-matrimony/beary-bhatkali`: Beary and Bhatkali matrimony
  - `/muslim-matrimony/nri-gulf`: NRI and Gulf Muslim rishta
  - `/muslim-matrimony/professionals`: Muslim doctors, engineers and professionals
- Add links to `/blog/how-to-verify-a-muslim-rishta` and `/blog/muslim-biodata-format-for-marriage`.
- Add the Hinglish block from section 9.1.
- Add the free sentence once: "Submitting your biodata to HumNikah is free."

### 2.3 `/fees`
Add this plain sentence near the top: "Submitting your biodata to HumNikah is free."

### 2.4 Kochi page `/muslim-matrimony/kochi`
Add "Ernakulam" to the Kerala districts list, and write the intro as "Kochi (Ernakulam)". One sentence is enough.

### 2.5 Site-wide
- Remove the empty `meta-next-size-adjust` meta tag.
- Strip the raw front-matter text that shows on the Bangalore blog post (parse frontmatter, do not render it).
- Make the "In this guide" table-of-contents items in the Bangalore, Hyderabad and Konkani posts anchor links (add heading ids).
- Confirm these 4 files return 200, or create them from the two templates in the biodata post, or remove the 4 download links until they exist: `/downloads/muslim-biodata-format-boy.docx`, `.pdf`, `/downloads/muslim-biodata-format-girl.docx`, `.pdf`.
- Konkani cannibalization: the community page `/muslim-matrimony/konkani` owns "konkani muslim matrimony". The blog `/blog/konkani-muslim-matrimony-mumbai-guide` owns "konkani muslim matrimony in mumbai" and "konkani muslim marriage bureau". Do not repeat the same H1 phrase on both. Add a link from each to the other.

---

## 3. Bengaluru page rewrite `/muslim-matrimony/bengaluru`

This page is the only page that targets "muslim marriage bureau bangalore".

### 3.1 Metadata
- Title: `Muslim Marriage Bureau in Bangalore | HumNikah`
- Meta description: `Muslim marriage bureau in Bangalore (Cox Town). Free biodata submission, manual profile screening, Wali involved, private. Call or WhatsApp.`
- H1: `Muslim Marriage Bureau in Bangalore`
- Canonical: `https://www.humnikah.com/muslim-matrimony/bengaluru`

### 3.2 Heading structure
- H1 Muslim Marriage Bureau in Bangalore
- H2 Muslim Matrimony and Matchmaking in Bangalore (Bengaluru) (keep existing H3 "Communities we serve in Bengaluru")
- H2 Why Bangalore Families Choose HumNikah (keep the 4 H3s; "Manually Screened Profiles" not "100% Verified")
- H2 How Our Muslim Marriage Bureau in Bangalore Works (keep the 4 steps)
- H2 Muslim Areas of Bangalore We Serve (**new**, text in 3.4)
- H2 Karnataka Towns We Serve (keep existing; link to the Karnataka page)
- H2 Remarriage, Professionals and Overseas Families in Bengaluru (keep)
- H2 HumNikah Bengaluru Office, Cox Town (keep, add map embed, see 3.6)
- H2 How to Choose a Muslim Marriage Bureau in Bangalore (**new**, text in 3.5)
- H2 Related guides (keep, add the new links from section 8)
- H2 Muslim Marriage Bureau in Bangalore: FAQs (keep and extend, text in 3.7)
- H2 Begin Your Nikah Journey in Bangalore (keep)

### 3.3 Intro (replace the first paragraph under the first H2)
```
HumNikah is a Muslim marriage bureau in Bangalore with its office in Cox Town, Bengaluru. We help Muslim families find a suitable rishta with privacy and respect. Every profile is manually screened, we check identity and address documents, and we involve the Wali where the bride's family wishes. Submitting your biodata to HumNikah is free. Families from Cox Town, Frazer Town, Shivajinagar, RT Nagar and across Bangalore can submit a biodata or message us on WhatsApp to begin.
```
Use the exact phrase "Muslim marriage bureau in Bangalore" about 3 to 4 times on the page (intro, one H2, the "how to choose" section, one FAQ). Do not stuff more.

### 3.4 New section "Muslim Areas of Bangalore We Serve"
Text above the links:
```
We serve Muslim families across Bangalore. Choose your part of the city to see how we work with families nearby. Every area page has the same free biodata submission and the same private, manually screened process.
```
Then a card list linking to the zone pages (Phase 1 pages first; add Phase 2 cards only when those pages are live):
- Central Bangalore: Shivajinagar, Frazer Town, Cox Town → `/muslim-matrimony/bengaluru/central-bangalore`
- North Bangalore: Banaswadi, Hennur, RT Nagar → `/muslim-matrimony/bengaluru/north-bangalore`
- West Bangalore: Chamarajpet, Mysore Road → `/muslim-matrimony/bengaluru/west-bangalore`
- South Bangalore → `/muslim-matrimony/bengaluru/south-bangalore` (Phase 2)
- South-East Bangalore: Koramangala, HSR → `/muslim-matrimony/bengaluru/south-east-bangalore` (Phase 2)
- East Bangalore: Whitefield, Marathahalli → `/muslim-matrimony/bengaluru/east-bangalore` (Phase 2)
Keep the existing text "Bangalore neighbourhoods we serve" but merge it into this section (do not delete the area names, they help).

### 3.5 New section "How to Choose a Muslim Marriage Bureau in Bangalore" (text)
```
When you compare marriage bureaus in Bangalore, ask five things: how profiles are screened and what is not verified, who will see your biodata, whether the bride's Wali is involved, what the fees are in writing, and who your contact person will be. A good bureau never promises a match or a date. Read our full guide: How to Choose the Best Muslim Marriage Bureau in Bangalore.
```
Link the last sentence to `/blog/muslim-marriage-bureau-bangalore-guide`.

### 3.6 Office block + map
- Show: HumNikah, Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005. Call +91 98443 21312. WhatsApp through `/whatsapp?src=bengaluru-office`.
- Text: "Please call or message before you visit, so we can set aside time for your family."
- Embed a Google Map of this address in a lazy-loaded iframe with a `title` attribute. Do not show office hours.

### 3.7 FAQs (visible HTML and `FAQPage` schema with identical text)
Keep the existing FAQs and make sure these exist:
1. **Is there a Muslim marriage bureau in Bangalore I can visit?** Yes. Our office is at Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005. Please call or message us first so that we can set aside time for your family.
2. **Is it free to submit my biodata?** Yes. Submitting your biodata to HumNikah is free. See our fees page for more.
3. **Which areas of Bangalore do you serve?** We serve families across Bangalore, including Cox Town, Frazer Town, Shivajinagar, RT Nagar, Banaswadi, Hennur, Chamarajpet and nearby areas, by phone, WhatsApp and in person at our office.
4. **How do you screen profiles?** Every profile is manually screened and we check identity and address documents. We do not run formal criminal-record checks, so we encourage families to make their own enquiries too.
5. **Do you serve Urdu, Beary, Bhatkali and Deccani families in Bangalore?** Yes. Tell us your community, language and family preferences and we take them into account when we shortlist profiles. We cannot promise a specific match or timeline.
6. **Can I join a Bangalore Muslim matrimony WhatsApp group?** We do not run an open group, because groups show every member's phone number and can expose biodatas. Chat with our team personally on WhatsApp instead (link `/whatsapp?src=bengaluru-faq`). We will not add you to any group without your permission.

### 3.8 Schema (JSON-LD `@graph`, server-rendered in the page HTML)
- `LocalBusiness` with `@type: ["LocalBusiness","ProfessionalService"]`, `@id: "https://www.humnikah.com/#bengaluru-office"`, name `HumNikah`, url = the Bengaluru page, telephone `+919844321312`, address (streetAddress "Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town", addressLocality "Bengaluru", addressRegion "Karnataka", postalCode "560005", addressCountry "IN"), `areaServed` (Bengaluru), `parentOrganization: {"@id": "https://www.humnikah.com/#organization"}`. No `openingHours`, no `aggregateRating`, no `Review`.
- `BreadcrumbList`: Home › Muslim Matrimony › Bengaluru.
- `FAQPage` generated from the visible FAQ.

---

## 4. Zone pages (Bangalore areas)

### 4.1 Rules
- URL: `/muslim-matrimony/bengaluru/<slug>`. One page per zone, not per locality (no pages for single neighbourhoods).
- Next.js App Router: `app/muslim-matrimony/bengaluru/[zone]/page.tsx`, with `generateStaticParams` and `generateMetadata` reading `data/bengaluru-zones.ts` (section 4.3). Return 404 for unknown slugs.
- **Phase 1 (publish now):** `central-bangalore`, `north-bangalore`, `west-bangalore`. **Phase 2 (publish after Phase 1 pages are indexed, roughly 3 to 4 weeks):** `south-bangalore`, `south-east-bangalore`, `east-bangalore`. The data has a `phase` field. Only pages with phase 1 are in the sitemap and linked until the owner says phase 2 goes live. (If the owner says "publish all", set all to phase 1.)
- Do not add population claims, travel times or ratings. Do not add any area outside the data.

### 4.2 Page template (render in this order)
1. `<h1>` = `h1` from data. Intro paragraph = `intro`.
2. H2 `Areas we serve in {name}`, then one H3 per area: `Muslim Matrimony in {area.name}` with its `blurb`. After the H3s, one paragraph: `moreAreas`.
3. H2 `How it works`: 4 short steps: (1) Submit your biodata (free) or message us on WhatsApp. (2) We speak with your family about what you are looking for. (3) Every profile is manually screened and we check identity and address documents. (4) Introductions are made through families, with the Wali involved where the bride's family wishes.
4. H2 `Who we help`: three links in a list: Remarriage → `/muslim-matrimony/divorcee-widow-remarriage`; Working professionals → `/muslim-matrimony/professionals`; NRI and Gulf families → `/muslim-matrimony/nri-gulf`.
5. H2 `Visit our Cox Town office`: the office block from 3.6 (small, no map).
6. H2 `{name}: FAQs` using `faqs` (with `FAQPage` schema).
7. Related: links to the Bengaluru page, the 2 `neighbours` pages (if live), `/blog/how-to-verify-a-muslim-rishta`, `/blog/muslim-biodata-format-for-marriage`.
8. CTA block: "Submit your biodata (free)" → `/submit-biodata`; "Chat on WhatsApp" → `/whatsapp?src=zone-{slug}`; Call +91 98443 21312.
- Schema: `BreadcrumbList` (Home › Muslim Matrimony › Bengaluru › {name}), `FAQPage`, and the `LocalBusiness` reference by `@id` only (`https://www.humnikah.com/#bengaluru-office`). Do not create a new business per zone.

### 4.3 Data file `data/bengaluru-zones.ts` (paste as is)

```ts
export type Zone = {
  slug: string;
  phase: 1 | 2;
  name: string;
  title: string;            // <= 60 chars
  metaDescription: string;  // <= 155 chars
  h1: string;
  intro: string;
  areas: { name: string; blurb: string }[];
  moreAreas: string;
  faqs: { q: string; a: string }[];
  neighbours: string[];
};

export const bengaluruZones: Zone[] = [
  {
    slug: "central-bangalore",
    phase: 1,
    name: "Central Bangalore",
    title: "Muslim Matrimony: Shivajinagar, Frazer Town | HumNikah",
    metaDescription: "Muslim matrimony in Shivajinagar, Frazer Town and Cox Town, Bangalore. Free biodata submission, manual screening, Wali involved. Office in Cox Town.",
    h1: "Muslim Matrimony in Shivajinagar, Frazer Town and Central Bangalore",
    intro: "HumNikah's office is in Central Bangalore, on Wheeler Road in Cox Town. If you live in Shivajinagar, Frazer Town, Cox Town, Richards Town, Benson Town or Tannery Road, you can visit us by appointment, call us, or start a private chat on WhatsApp. Every profile is manually screened, and your biodata is not shared without your consent. Submitting your biodata to HumNikah is free.",
    areas: [
      { name: "Cox Town", blurb: "Our office is on Wheeler Road in Cox Town, so families here can meet our team in person by appointment. Bring your family, ask your questions about screening and introductions, and decide at your own pace. Please call or message before you visit so that we can set aside time for you." },
      { name: "Frazer Town", blurb: "Frazer Town, also known as Pulakeshi Nagar, is next to Cox Town, so our office is close by. Families here can submit a biodata online, speak to us by phone or WhatsApp, or come and talk to us in person. We involve the bride's Wali where her family wishes." },
      { name: "Shivajinagar", blurb: "Shivajinagar is in the heart of the city, near Commercial Street and Russell Market. Families who live or work here can reach us easily by phone or WhatsApp, and visit the Cox Town office by appointment. We take time to understand your family's expectations before suggesting any introduction." },
      { name: "Richards Town", blurb: "Richards Town is a short distance from Cox Town and Frazer Town. Families here can begin with a private WhatsApp chat, send a biodata, and meet us at the office when they are ready. We keep each biodata private and share it only with families we introduce, with your consent." },
      { name: "Benson Town", blurb: "Benson Town lies close to Jayamahal and Nandidurga Road. If you are searching from Benson Town, tell us your priorities, such as education, work, family background and language, and we will take them into account when we shortlist profiles. We cannot promise a match or a timeline, but we listen carefully." },
      { name: "Tannery Road", blurb: "Tannery Road is in the north-eastern part of the central belt, near Pulakeshi Nagar and DJ Halli. Families here can reach us by phone or WhatsApp, and we can arrange a visit to the Cox Town office at a convenient time. If travel is difficult, most of the conversation can happen on a call." }
    ],
    moreAreas: "We also serve families in Murphy Town, Jayamahal, Ulsoor, Cooke Town, Cleveland Town and nearby areas of central Bangalore.",
    faqs: [
      { q: "Can I visit your office if I live in Shivajinagar or Frazer Town?", a: "Yes. Our office is at Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005. Please call or message us first so that we can set aside time for your family." },
      { q: "Is there a fee to submit my biodata?", a: "No. Submitting your biodata to HumNikah is free." },
      { q: "How do you protect my biodata?", a: "We do not post your biodata publicly. We share it only with families we introduce, with your consent." },
      { q: "Do you involve the bride's Wali?", a: "Yes, where the bride's family wishes, introductions go through her Wali and family." }
    ],
    neighbours: ["north-bangalore", "west-bangalore"]
  },
  {
    slug: "north-bangalore",
    phase: 1,
    name: "North Bangalore",
    title: "Muslim Matrimony in North Bangalore | HumNikah",
    metaDescription: "Muslim matrimony in North Bangalore: Banaswadi, Hennur, Nagavara, RT Nagar, Kammanahalli and Kalyan Nagar. Free biodata submission, manual screening.",
    h1: "Muslim Matrimony in North Bangalore: Banaswadi, Hennur and RT Nagar",
    intro: "If you live in North Bangalore, in Banaswadi, Hennur, Nagavara, RT Nagar, Kammanahalli, Kalyan Nagar, or DJ Halli and KG Halli, you do not have to travel to find help with a rishta. Most of our work with North Bangalore families happens by phone and WhatsApp, and you are welcome to visit our Cox Town office by appointment. Every profile is manually screened. Submitting your biodata to HumNikah is free.",
    areas: [
      { name: "Banaswadi", blurb: "Banaswadi is in the north-east of the city, near Kammanahalli and Ramamurthy Nagar. Families here can submit a biodata online and speak to our team on the phone, so there is no need for a long trip. If you would like to meet us, we can arrange a time at the Cox Town office." },
      { name: "Hennur", blurb: "Hennur is on the north-eastern side, along Hennur Main Road. Many families here balance work and family time, so we are happy to talk at a time that suits you, by call or WhatsApp. Tell us what you are looking for in a partner, and we will keep your biodata private." },
      { name: "Nagavara", blurb: "Nagavara is in the north, close to Manyata Tech Park and the Outer Ring Road. If you or your family work in this part of the city, you can reach us by phone or WhatsApp and share your biodata without leaving your area. We screen each profile manually before any introduction." },
      { name: "RT Nagar", blurb: "RT Nagar is in the north, near Hebbal and Sanjay Nagar. Families from RT Nagar can start with a private WhatsApp chat or a phone call. We involve the bride's Wali where her family wishes, and we do not share any biodata without consent." },
      { name: "Kammanahalli", blurb: "Kammanahalli is in the north-east, near Banaswadi and HRBR Layout. If you are looking for a rishta from Kammanahalli, share your expectations about education, work, family and language. We use them to shortlist profiles, but we cannot promise a match or a date." },
      { name: "Kalyan Nagar", blurb: "Kalyan Nagar is in the north-east, close to Hennur and Banaswadi. Families here can submit a biodata through our website and follow up with our team on WhatsApp. If you are not sure how to write a biodata, our free format guide shows what to include and what to leave out." },
      { name: "DJ Halli and KG Halli", blurb: "DJ Halli and KG Halli are in the north, near Nagavara and Tannery Road. Families here can call or message us, share a biodata and ask questions about how we screen profiles. We answer honestly, including what we do not verify." }
    ],
    moreAreas: "We also serve families in Hebbal, Thanisandra, Yelahanka, Jalahalli, Kothanur, Horamavu, Sahakara Nagar, Vidyaranyapura and nearby areas of North Bangalore.",
    faqs: [
      { q: "I live in North Bangalore. Do I have to visit your office?", a: "No. You can do the whole process by phone and WhatsApp. Visiting our Cox Town office is optional and by appointment." },
      { q: "How are profiles screened?", a: "Every profile is manually screened and we check identity and address documents. We do not run formal criminal-record checks, so we encourage families to make their own enquiries too." },
      { q: "Can I tell you my community and language preferences?", a: "Yes. Tell us your community, language and family preferences and we will take them into account when we shortlist profiles. We cannot promise a specific match or timeline." },
      { q: "Do you help with second marriages?", a: "Yes. We work with divorcees, widows and widowers with privacy and respect. Read more on our remarriage page." }
    ],
    neighbours: ["central-bangalore", "west-bangalore"]
  },
  {
    slug: "west-bangalore",
    phase: 1,
    name: "West Bangalore",
    title: "Muslim Matrimony in West Bangalore | HumNikah",
    metaDescription: "Muslim matrimony in West Bangalore: Chamarajpet, Kalasipalya, Mysore Road and Yeshwanthpur. Free biodata submission, manual screening, private.",
    h1: "Muslim Matrimony in West Bangalore: Chamarajpet and Mysore Road",
    intro: "Families in West Bangalore, in Chamarajpet, Kalasipalya, Mysore Road and Yeshwanthpur, can work with HumNikah by phone and WhatsApp, and visit our Cox Town office by appointment. We listen to what your family is looking for, screen every profile manually and make introductions through families. Submitting your biodata to HumNikah is free.",
    areas: [
      { name: "Chamarajpet", blurb: "Chamarajpet is in the west-central part of the city, near Basavanagudi and the City Market side. Families here can start with a phone call, share a biodata online and ask us how introductions work. We keep every biodata private and share it only with consent." },
      { name: "Kalasipalya", blurb: "Kalasipalya is close to K.R. Market in the centre-south of the city. If you live or work around the market area, you can reach us by phone or WhatsApp at a time that suits you. We can also arrange a visit to the Cox Town office by appointment." },
      { name: "Mysore Road", blurb: "Mysore Road is a long corridor running to the south-west. Because the distances are large, we suggest starting with a WhatsApp chat or a call, and meeting in person only when your family is ready. We involve the bride's Wali where her family wishes." },
      { name: "Yeshwanthpur", blurb: "Yeshwanthpur is in the north-west, near Tumkur Road and the railway station. Families here can share a biodata through our website and follow up on WhatsApp. If you would like help writing one, our free biodata format shows a simple one-page layout." }
    ],
    moreAreas: "We also serve families in Rajajinagar, Vijayanagar, Basaveshwaranagar, Nagarbhavi, Kengeri, Peenya, Tumkur Road, Rajarajeshwari Nagar and nearby areas of West Bangalore.",
    faqs: [
      { q: "How does the process work for families in West Bangalore?", a: "You submit your biodata for free or message us on WhatsApp. We talk to your family about what you are looking for, screen profiles manually, and make introductions through families, with the Wali involved where the bride's family wishes." },
      { q: "Can parents handle the search for their son or daughter?", a: "Yes, many families do. We encourage parents to involve their son or daughter in writing the biodata and in the decision, so that it reflects the person." },
      { q: "Is my biodata shared publicly?", a: "No. We do not post biodatas publicly and we do not add anyone to a WhatsApp group without permission." },
      { q: "Can I visit the office from West Bangalore?", a: "Yes, by appointment. Our office is at Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005. Call or message us first." }
    ],
    neighbours: ["central-bangalore", "south-bangalore"]
  },
  {
    slug: "south-bangalore",
    phase: 2,
    name: "South Bangalore",
    title: "Muslim Matrimony in South Bangalore | HumNikah",
    metaDescription: "Muslim matrimony in South Bangalore: Wilson Garden, Madiwala, Bommanahalli and BTM Layout. Free biodata submission, manual profile screening.",
    h1: "Muslim Matrimony in South Bangalore: Wilson Garden, Madiwala and BTM",
    intro: "Families in South Bangalore, in Wilson Garden, Madiwala, Bommanahalli and BTM Layout, can work with HumNikah by phone and WhatsApp. Many working families in this part of the city have busy schedules, so tell us what time suits you for calls and messages and we will try to accommodate you. Submitting your biodata to HumNikah is free.",
    areas: [
      { name: "Wilson Garden", blurb: "Wilson Garden is in the south-central part of the city, near Lalbagh and Hosur Road. Families here can submit a biodata online, speak to our team by phone and meet us at the Cox Town office by appointment. We screen every profile manually." },
      { name: "Madiwala", blurb: "Madiwala is on Hosur Road in the south, near Silk Board. If you live here, the easiest way to start is a WhatsApp chat or a call. We listen to your family's expectations first and do not rush any introduction." },
      { name: "Bommanahalli", blurb: "Bommanahalli is on the Hosur Road corridor in the south-east of the south zone. Families here can share a biodata through our website and follow up by phone. We keep your biodata private and share it only with families we introduce, with your consent." },
      { name: "BTM Layout", blurb: "BTM Layout is in the south, near Silk Board and Jayanagar. Working professionals and families here can start a private chat, share expectations and ask how we screen profiles. We answer honestly, including what we cannot verify." }
    ],
    moreAreas: "We also serve families in Jayanagar, JP Nagar, Banashankari, Basavanagudi, Electronic City, Bannerghatta Road, Kanakapura Road and nearby areas of South Bangalore.",
    faqs: [
      { q: "I work long hours. Can we speak outside office time?", a: "Tell us what time suits you for calls and WhatsApp messages, and we will try to accommodate you." },
      { q: "Do you help working professionals find a match?", a: "Yes. Tell us about your work, education and plans, and we take them into account. Read more on our page for Muslim professionals." },
      { q: "Do I need to come to your office?", a: "No. You can do the whole process by phone and WhatsApp. Visiting the Cox Town office is optional and by appointment." },
      { q: "Is it free to submit a biodata?", a: "Yes. Submitting your biodata to HumNikah is free." }
    ],
    neighbours: ["south-east-bangalore", "west-bangalore"]
  },
  {
    slug: "south-east-bangalore",
    phase: 2,
    name: "South-East Bangalore",
    title: "Muslim Matrimony in Koramangala & HSR Layout | HumNikah",
    metaDescription: "Muslim matrimony in Koramangala, HSR Layout, Sarjapur Road and Bellandur, Bangalore. Free biodata submission, manual screening, private.",
    h1: "Muslim Matrimony in Koramangala, HSR Layout and South-East Bangalore",
    intro: "Many working professionals live in and around Koramangala, HSR Layout, Sarjapur Road and Bellandur. HumNikah works with families and individuals in this part of Bangalore by phone and WhatsApp, so you do not need to cross the city. Every profile is manually screened and your biodata stays private. Submitting your biodata to HumNikah is free.",
    areas: [
      { name: "Koramangala", blurb: "Koramangala is in the south-east of the city. If you live or work here, you can start with a WhatsApp chat and share your biodata online. We take time to understand your priorities, such as career, family and where you want to live, before suggesting introductions." },
      { name: "HSR Layout", blurb: "HSR Layout is in the south-east, next to Bommanahalli and Silk Board. Families in HSR Layout can speak with our team by phone, ask questions about screening and fees, and decide at their own pace. We will not add you to any group without your permission." },
      { name: "Sarjapur Road", blurb: "Sarjapur Road is a long corridor on the south-east side, with many newer residential areas. Because distances are large, we suggest a call or WhatsApp first and an in-person meeting only when your family is ready." },
      { name: "Bellandur", blurb: "Bellandur is in the south-east, near the Outer Ring Road. If you work in this part of the city, tell us what time suits you for calls and messages. We keep your biodata private and share it only with families we introduce, with your consent." }
    ],
    moreAreas: "We also serve families in Silk Board, Agara, Haralur, Kasavanahalli, Kudlu, Haralur Road and nearby areas of South-East Bangalore.",
    faqs: [
      { q: "I live in Koramangala or HSR Layout. Can I do everything online?", a: "Yes. You can submit your biodata on our website and talk to our team by phone and WhatsApp. Visiting our Cox Town office is optional and by appointment." },
      { q: "Can IT professionals use HumNikah?", a: "Yes. Tell us about your work, education and expectations, and we take them into account when we shortlist profiles. We cannot promise a match or a timeline." },
      { q: "How do you keep my details private?", a: "We do not post biodatas publicly, we share them only with families we introduce, with your consent, and we do not add anyone to a group without permission." },
      { q: "Is there a fee to submit a biodata?", a: "No. Submitting your biodata to HumNikah is free." }
    ],
    neighbours: ["south-bangalore", "east-bangalore"]
  },
  {
    slug: "east-bangalore",
    phase: 2,
    name: "East Bangalore",
    title: "Muslim Matrimony in Whitefield & East Bangalore | HumNikah",
    metaDescription: "Muslim matrimony in Whitefield, Marathahalli and KR Puram, East Bangalore. Free biodata submission, manual profile screening, private chat on WhatsApp.",
    h1: "Muslim Matrimony in Whitefield, Marathahalli and East Bangalore",
    intro: "East Bangalore, including Whitefield, Marathahalli and KR Puram, is a long way from our Cox Town office, so most of our work with families here happens by phone and WhatsApp. You can submit your biodata online, talk to our team privately and meet us in person only if you wish. Submitting your biodata to HumNikah is free.",
    areas: [
      { name: "Whitefield", blurb: "Whitefield is on the eastern edge of the city and has many working professionals. You can start with a WhatsApp chat and share your biodata online, then talk to our team at a time that suits you. We screen every profile manually." },
      { name: "Marathahalli", blurb: "Marathahalli is in the east, on the Outer Ring Road and Airport Road. Families here can submit a biodata, ask how we screen profiles and what we do not verify, and decide at their own pace." },
      { name: "KR Puram", blurb: "KR Puram is in the east, near the Old Madras Road. If you are searching from KR Puram, tell us your expectations about education, work, family and language. We use them to shortlist profiles, but we cannot promise a match." }
    ],
    moreAreas: "We also serve families in Indiranagar, Mahadevapura, Hoodi, Kadugodi, Varthur, Brookefield and nearby areas of East Bangalore.",
    faqs: [
      { q: "Is the Cox Town office too far for me in Whitefield?", a: "You do not need to visit. You can do the whole process by phone and WhatsApp. If you would like to meet us, we can arrange a time by appointment." },
      { q: "Do you help NRI and Gulf-based families?", a: "Yes. Read more on our page for NRI and Gulf families." },
      { q: "How are profiles screened?", a: "Every profile is manually screened and we check identity and address documents. We do not run formal criminal-record checks, so we encourage families to make their own enquiries too." },
      { q: "Is my biodata kept private?", a: "Yes. We do not post it publicly and we share it only with families we introduce, with your consent." }
    ],
    neighbours: ["south-east-bangalore", "north-bangalore"]
  }
];
```
(Once the template sections render, each zone page will be roughly 450 to 750 words. Do not pad with filler or copied text. If the owner later supplies real local facts, add them as extra paragraphs.)

### 4.4 Links to and from zone pages
- Bengaluru page: the "Muslim Areas of Bangalore We Serve" cards (3.4).
- Homepage footer: new column "Bangalore Areas" with links to the live zone pages.
- Each zone page: up to Bengaluru, across to `neighbours`, plus the 2 blog links in 4.2.
- Add all live zone pages to `sitemap.xml`.

---

## 5. Karnataka page `/muslim-matrimony/karnataka`

- Primary keyword: "muslim matrimony karnataka".
- Title: `Muslim Matrimony in Karnataka | HumNikah` · H1: `Muslim Matrimony in Karnataka`.
- Meta: `Muslim matrimony in Karnataka: Bengaluru and towns across the state. Free biodata submission, manual profile screening, private. Call or WhatsApp.`
- **Towns list:** take the Karnataka towns from the existing "Karnataka towns we serve" section on `/muslim-matrimony/bengaluru` (read them from the page or its data file). Use only those. Do not add any other town.
- Page content (≥ 600 words):
  - Intro: "HumNikah helps Muslim families across Karnataka find a suitable rishta. Our office is in Cox Town, Bengaluru, and we serve families in other towns by phone and WhatsApp. Submitting your biodata to HumNikah is free."
  - H2 `Muslim matrimony in Bengaluru`: 2 to 3 sentences with links to the Bengaluru page and the zone pages.
  - H2 `Towns across Karnataka`: the towns from the Bengaluru page, each with one sentence: "Families from {town} can submit a biodata online and speak to our team by phone or WhatsApp."
  - H2 `Communities we serve`: links to Beary and Bhatkali, Deccani, Konkani, and Divorcee and widow remarriage pages (these exist).
  - H2 `How it works` (the 4 steps from 4.2) and a CTA block.
  - FAQs (3): "Do you have offices in other Karnataka towns?" (No, we serve them by phone and WhatsApp; our office is in Bengaluru.) · "Is it free to submit my biodata?" (Yes.) · "How do you screen profiles?" (the screening sentence).
- Schema: `BreadcrumbList` (Home › Muslim Matrimony › Karnataka), `FAQPage`.
- Link the Bengaluru page's "Karnataka Towns We Serve" heading to this page; add to sitemap and footer.

---

## 6. Contact page `/contact`

- Title: `Contact HumNikah | Muslim Marriage Bureau Bangalore`
- Meta: `Contact HumNikah, a Muslim marriage bureau in Cox Town, Bangalore. Call, WhatsApp or visit by appointment. Free biodata submission.`
- H1: `Contact HumNikah`
- Visible text (not only in the title):
  - "HumNikah is a Muslim marriage bureau in Cox Town, Bangalore. Call us, message us on WhatsApp, or visit our office by appointment."
  - Contact number for calls: +91 98443 21312 (`tel:` link). WhatsApp: button to `/whatsapp?src=contact` (nofollow).
  - Address: Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005, with a map iframe.
  - "Please call or message before you visit so that we can set aside time for your family."
  - "Submitting your biodata to HumNikah is free." with a button to `/submit-biodata`.
  - H2 `Muslim marriage bureau contact number`: one sentence: "If you are looking for a Muslim marriage bureau contact number in Bangalore, call +91 98443 21312 or message us on WhatsApp."
  - Show no office hours and no other offices.
- Schema: `ContactPage` with `mainEntity` the Organization `@id`; reuse the Cox Town `LocalBusiness` `@id`.

---

## 7. Brand and Organization schema (site-wide)

Put in the layout (server-rendered, once per page):

```ts
// lib/orgSchema.ts
export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.humnikah.com/#organization",
  name: "HumNikah",
  alternateName: ["Hum Nikah", "HumNikah.com"],
  url: "https://www.humnikah.com",
  logo: "https://www.humnikah.com/<existing-logo-path>.png",   // use the real logo path
  sameAs: [] // fill ONLY with the social URLs already in the site footer; if none, leave the array out
};
```
- On the homepage intro and the About page, write the brand once as "HumNikah (Hum Nikah)".
- Do not target "hunnikah" or "freenikah" on purpose.
- Add `rel="me"`-style consistency: the footer social links and `sameAs` must match.

---

## 8. Content pages (non-religious) (briefs)

Write each as a blog post in the existing blog format (frontmatter, "Short answer" box, "In this guide" anchor TOC, FAQs section with `FAQPage` schema, `BlogPosting` + `BreadcrumbList` JSON-LD as on the existing posts). Each: 1,000 to 1,400 words, plain simple English, short paragraphs, one primary keyword, 5 FAQs, an author "HumNikah Editorial Team", `publishedAt` = real publish date. Include 3 internal links and one soft CTA ("Chat on WhatsApp" with the src below, "Submit your biodata (free)"). Do not quote any religious text or give religious rulings. Where a topic touches faith practice, treat it only as something families discuss, not as a rule.

| # | Slug | Title (≤ 60) | Primary keyword | WhatsApp src |
|---|------|---|---|---|
| 1 | `muslim-marriage-bureau-fees-bangalore` | Muslim Marriage Bureau Fees in Bangalore: What to Expect | muslim marriage bureau fees bangalore | blog-fees |
| 2 | `questions-to-ask-before-a-muslim-marriage` | Questions to Ask Before a Muslim Marriage: Family Checklist | questions to ask before marriage | blog-questions |
| 3 | `how-to-find-a-muslim-bride-or-groom-in-bangalore` | How to Find a Muslim Bride or Groom in Bangalore | muslim bride groom bangalore | blog-find |
| 4 | `muslim-matrimony-for-it-professionals-bangalore` | Muslim Matrimony for IT Professionals in Bangalore | muslim matrimony it professionals bangalore | blog-it |
| 5 | `first-rishta-meeting-checklist-for-families` | First Rishta Meeting: A Simple Checklist for Families | rishta meeting checklist | blog-meeting |

Outlines (agent writes the full text from these; no invented prices, statistics, reviews or quotes):

1. **Fees (no numbers):** Short answer: "Fees differ between bureaus, so always ask for them in writing and ask for a receipt. Submitting your biodata to HumNikah is free." H2s: Why fees differ between bureaus; What a fee should and should not cover; Questions to ask before paying (written terms, receipt, refund terms, what is verified); Red flags (pressure to pay, promises of a guaranteed match, no written terms); How HumNikah works (free biodata submission; see `/fees`); FAQs. Links: `/fees`, `/blog/muslim-marriage-bureau-bangalore-guide`, `/blog/how-to-verify-a-muslim-rishta`, `/muslim-matrimony/bengaluru`.
2. **Questions before marriage:** Short answer lists the topic areas. H2s: Work and income plans (how families talk about it respectfully); Education and career after marriage; Where the couple will live; Family expectations and roles; Children and plans; Finances and shared responsibilities; Health and any past marriage (be open, with respect); How to ask without offending the other family. FAQs. Links: verify post, biodata post, `/muslim-matrimony-india`.
3. **Find a bride or groom in Bangalore:** H2s: Start with family and community; Use a marriage bureau (what a good one does); Use online profiles carefully; Write a clear biodata; Verify before you decide; Areas of Bangalore (link to the zone pages that are live and the Bengaluru page); FAQs. Links: Bengaluru page, zone pages, biodata post, verify post.
4. **IT professionals:** H2s: Busy schedules and how to plan the search; Be clear about location and work plans (hybrid, relocation); Expectations about careers after marriage; Keep your biodata short and private; Safety checks for online profiles; Areas where many professionals live (Koramangala, HSR, Whitefield, Marathahalli, Electronic City, as general mentions only; link the live zone pages); FAQs. Links: `/muslim-matrimony/professionals`, south-east and east zone pages (when live), biodata post.
5. **First meeting checklist:** H2s: Before the meeting (who comes, where, what to bring); During the meeting (topics, listening, respect, time); What not to do (interrogation, comparisons, pressure, photos without consent); After the meeting (take time, talk to elders, give an honest answer kindly); FAQs. Links: questions post, verify post, `/muslim-matrimony/bengaluru`.

Add all five to the blog index, the sitemap and "Related guides" on the Bengaluru page.

---

## 9. Hinglish (Roman script) content (P2)

### 9.1 Block for `/muslim-matrimony-india` (and keep the homepage line as it is)
H2: `Muslim Rishta Chahiye? Apna Biodata Free Submit Karein`
```
HumNikah ek Muslim rishtey bureau hai. Hamara office Cox Town, Bangalore mein hai, aur hum Bangalore, Chennai, Hyderabad, Vijayawada, Kochi aur Mumbai ke families se phone aur WhatsApp par baat karte hain. Apna biodata free submit karein. Hamari team har profile ko khud screen karti hai, aur zarurat ho to ladki ke Wali ko shamil karti hai. Aapka biodata aapki ijazat ke bina kisi ko nahi diya jaata.
```
- Bullets: "Biodata free submit karein" · "Hamari team aapke family se baat karegi" · "Screened profiles ke saath introduction".
- Buttons: "Biodata Submit Karein" → `/submit-biodata`; "WhatsApp Par Baat Karein" → `/whatsapp?src=india-hinglish`.
- Set `lang="hi-Latn"` on this block's element (`<section lang="hi-Latn">`).

### 9.2 New Hinglish pages
| Slug | Title (≤ 60) | Primary keyword | Brief |
|---|---|---|---|
| `muslim-rishta-kaise-dhundhe` | Muslim Rishta Kaise Dhundhe: Simple Guide | muslim rishta kaise dhundhe | H2s: Pehle apna biodata banayein; Rishtedaar aur jaan-pehchaan; Marriage bureau kaise chunein; Online profiles se bachke; Rishta verify kaise karein; Bangalore ke families ke liye (links). 5 FAQs in Hinglish. Links: biodata post, verify post, Bengaluru page. |
| `muslim-biodata-kaise-banayein` | Muslim Biodata Kaise Banayein: Free Format | muslim biodata kaise banayein | Hinglish version of the biodata post's practical steps (what to include, what to leave out, mistakes), with the same free template links. Not a word-for-word copy. Links to `/blog/muslim-biodata-format-for-marriage` and `/submit-biodata`. |
Same blog format as section 8. Write in simple Hinglish (how people actually type), no religious rulings. WhatsApp srcs: `blog-kaise-dhundhe`, `blog-biodata-kaise`.

---

## 10. Internal links, navigation, sitemap

- Homepage: link to the Bengaluru page ("Muslim marriage bureau in Bangalore"), the live zone pages via the footer column, and the latest 3 blog posts.
- Footer on every page: add "Bangalore Areas" (live zone pages) and keep community links.
- Bengaluru page ↔ zone pages (3.4, 4.4). Zone pages ↔ neighbours.
- Bangalore blog: add one exact-match link in the intro: "Muslim marriage bureau in Bangalore" → `/muslim-matrimony/bengaluru`; and a closing link "our Bangalore matrimony page".
- Beary/Bhatkali and Deccani pages: add a link to `/muslim-matrimony/bengaluru` ("Muslim matrimony in Bangalore").
- Hyderabad, Chennai, Kochi, Mumbai, Vijayawada pages: add one line "In-person meetings are at our Bengaluru office" linking to the Bengaluru page.
- Anchor text must be descriptive and varied. Never "click here".
- `sitemap.xml`: add every new live page. `robots.txt`: no changes.

---

## 11. Tracking

Tracker rows to add (CSV, columns as before: `keyword,target_url,est_difficulty,volume,week0_pos,...`):
```
muslim marriage bureau bangalore,/muslim-matrimony/bengaluru,Med,,,,,,,,
muslim matrimony shivajinagar,/muslim-matrimony/bengaluru/central-bangalore,Easy,,,,,,,,
muslim matrimony frazer town,/muslim-matrimony/bengaluru/central-bangalore,Easy,,,,,,,,
muslim marriage bureau cox town,/muslim-matrimony/bengaluru/central-bangalore,Easy,,,,,,,,
muslim matrimony banaswadi,/muslim-matrimony/bengaluru/north-bangalore,Easy,,,,,,,,
muslim matrimony hennur,/muslim-matrimony/bengaluru/north-bangalore,Easy,,,,,,,,
muslim matrimony rt nagar,/muslim-matrimony/bengaluru/north-bangalore,Easy,,,,,,,,
muslim matrimony chamarajpet,/muslim-matrimony/bengaluru/west-bangalore,Easy,,,,,,,,
muslim matrimony koramangala,/muslim-matrimony/bengaluru/south-east-bangalore,Med,,,,,,,,
muslim matrimony whitefield,/muslim-matrimony/bengaluru/east-bangalore,Med,,,,,,,,
muslim matrimony karnataka,/muslim-matrimony/karnataka,Med,,,,,,,,
muslim marriage broker contact number,/contact,Easy,,,,,,,,
muslim marriage bureau fees bangalore,/blog/muslim-marriage-bureau-fees-bangalore,Easy,,,,,,,,
questions to ask before marriage,/blog/questions-to-ask-before-a-muslim-marriage,Med,,,,,,,,
muslim rishta kaise dhundhe,/blog/muslim-rishta-kaise-dhundhe,Easy,,,,,,,,
```
Also change the target of "muslim marriage bureau in bangalore frazer town" from the blog to the central zone page.

Analytics: the `/whatsapp?src=` tags show which page produced each lead. Keep the existing GA4 events `whatsapp_click` and `biodata_download`, and add the new `src` values from this file.

---

## 12. PARKED: do NOT build now

- Any religious page: mahr, nikah rules or conditions, sunnah of nikah, wali rulings, walima, nikahnama, khutbah, dua, istikhara, rights of husband and wife.
- The `/nikah-guide` hub.
- A "How to register a Muslim marriage in India" post (needs legal review).
- Pages for single localities, wedding halls, planners, astrologers, horoscope or other-community keywords.
- Labbai/Mappila blog posts (the community pages already exist).

---

## 13. Definition of done (QA)

- [ ] No `TODO`, `OWNER:` or placeholder text on any live page (search the built HTML).
- [ ] Chennai page: no office block, no "100% Verified". India page: no "100% Verified, Shariah-Compliant".
- [ ] "Submitting your biodata to HumNikah is free." appears on `/fees`, the Bengaluru page, the India page, `/contact` and every zone page.
- [ ] Bengaluru page: title ≤ 60, meta ≤ 155, one H1, exact phrase 3 to 4 times, FAQ schema equals visible text, LocalBusiness address equals the footer address.
- [ ] Zone pages: Phase 1 live and in the sitemap; Phase 2 not linked until released; every zone has the full template (about 450 to 750 words rendered); no text is copied between zones; no zone claims an office.
- [ ] Karnataka page lists only towns that are on the Bengaluru page.
- [ ] `/contact` has the number, address, map and the free sentence in visible text.
- [ ] Organization schema has `alternateName` and `sameAs` only with real footer links.
- [ ] No religious page exists (`/nikah-guide`, mahr, etc.).
- [ ] All `/whatsapp?src=` links are nofollow and redirect to wa.me.
- [ ] `linkinator` reports no broken internal links. Sitemap lists every new page. Biodata download links return 200.
- [ ] Lighthouse mobile SEO ≥ 90 on the Bengaluru page and one zone page.
- [ ] Report to the owner: list of pages published, URLs, and anything that could not be done.

---

## 14. Owner-only tasks (not for the agent)

- [ ] Google Business Profile for the Cox Town office: verify, category "Marriage bureau" (or the closest), add photos, services and the Bengaluru page link. Name, address and phone must be identical to the website.
- [ ] Ask real clients for Google reviews after a successful introduction. Never buy or fake reviews.
- [ ] Search Console: submit the sitemap, "Request indexing" for each new page, and every Monday export queries and pages. Also add the site to Bing Webmaster Tools.
- [ ] Share new pages on LinkedIn and Instagram (this also grows branded searches like "hum nikah").
- [ ] When you have a qualified scholar to review religious content, tell me and I will write the parked hub.

---

## 15. Expectation check (read once)

- Today: about 50 impressions across 31 queries in Search Console.
- Without religious pages, a realistic planning range is **about 250 to 500 impressions a day in 6 to 9 months** (Bangalore zones + Karnataka + content pages + Hinglish + other cities). This is an assumption, not a forecast, because I have no search-volume data for most keywords.
- 1,000 a day most likely needs the parked religious hub, because those topics have far larger search volume. Decision point at day 90: if impressions are below about 100 a day, fix indexing and quality first; if the owner has a scholar by then, build the hub.