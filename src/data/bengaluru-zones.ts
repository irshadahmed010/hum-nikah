/**
 * Bangalore zone pages (/muslim-matrimony/bengaluru/<slug>).
 *
 * One page per zone, never per locality. Copy is as supplied by the owner.
 * `phase: 2` zones are NOT published: they are 404, out of the sitemap and not
 * linked until the owner releases them (flip `phase` to 1).
 */
export type Zone = {
  slug: string;
  phase: 1 | 2;
  name: string;
  title: string; // <= 60 chars
  metaDescription: string; // <= 155 chars
  h1: string;
  intro: string;
  areas: { name: string; blurb: string }[];
  moreAreas: string;
  faqs: { q: string; a: string }[];
  neighbours: string[];
};

export const FREE_SENTENCE = "Submitting your biodata to HumNikah is free.";

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
      { name: "Tannery Road", blurb: "Tannery Road is in the north-eastern part of the central belt, near Pulakeshi Nagar and DJ Halli. Families here can reach us by phone or WhatsApp, and we can arrange a visit to the Cox Town office at a convenient time. If travel is difficult, most of the conversation can happen on a call." },
    ],
    moreAreas: "We also serve families in Murphy Town, Jayamahal, Ulsoor, Cooke Town, Cleveland Town and nearby areas of central Bangalore.",
    faqs: [
      { q: "Can I visit your office if I live in Shivajinagar or Frazer Town?", a: "Yes. Our office is at Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005. Please call or message us first so that we can set aside time for your family." },
      { q: "Is there a fee to submit my biodata?", a: "No. Submitting your biodata to HumNikah is free." },
      { q: "How do you protect my biodata?", a: "We do not post your biodata publicly. We share it only with families we introduce, with your consent." },
      { q: "Do you involve the bride's Wali?", a: "Yes, where the bride's family wishes, introductions go through her Wali and family." },
    ],
    neighbours: ["north-bangalore", "west-bangalore"],
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
      { name: "DJ Halli and KG Halli", blurb: "DJ Halli and KG Halli are in the north, near Nagavara and Tannery Road. Families here can call or message us, share a biodata and ask questions about how we screen profiles. We answer honestly, including what we do not verify." },
    ],
    moreAreas: "We also serve families in Hebbal, Thanisandra, Yelahanka, Jalahalli, Kothanur, Horamavu, Sahakara Nagar, Vidyaranyapura and nearby areas of North Bangalore.",
    faqs: [
      { q: "I live in North Bangalore. Do I have to visit your office?", a: "No. You can do the whole process by phone and WhatsApp. Visiting our Cox Town office is optional and by appointment." },
      { q: "How are profiles screened?", a: "Every profile is manually screened and we check identity and address documents. We do not run formal criminal-record checks, so we encourage families to make their own enquiries too." },
      { q: "Can I tell you my community and language preferences?", a: "Yes. Tell us your community, language and family preferences and we will take them into account when we shortlist profiles. We cannot promise a specific match or timeline." },
      { q: "Do you help with second marriages?", a: "Yes. We work with divorcees, widows and widowers with privacy and respect. Read more on our remarriage page." },
    ],
    neighbours: ["central-bangalore", "west-bangalore"],
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
      { name: "Yeshwanthpur", blurb: "Yeshwanthpur is in the north-west, near Tumkur Road and the railway station. Families here can share a biodata through our website and follow up on WhatsApp. If you would like help writing one, our free biodata format shows a simple one-page layout." },
    ],
    moreAreas: "We also serve families in Rajajinagar, Vijayanagar, Basaveshwaranagar, Nagarbhavi, Kengeri, Peenya, Tumkur Road, Rajarajeshwari Nagar and nearby areas of West Bangalore.",
    faqs: [
      { q: "How does the process work for families in West Bangalore?", a: "You submit your biodata for free or message us on WhatsApp. We talk to your family about what you are looking for, screen profiles manually, and make introductions through families, with the Wali involved where the bride's family wishes." },
      { q: "Can parents handle the search for their son or daughter?", a: "Yes, many families do. We encourage parents to involve their son or daughter in writing the biodata and in the decision, so that it reflects the person." },
      { q: "Is my biodata shared publicly?", a: "No. We do not post biodatas publicly and we do not add anyone to a WhatsApp group without permission." },
      { q: "Can I visit the office from West Bangalore?", a: "Yes, by appointment. Our office is at Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005. Call or message us first." },
    ],
    neighbours: ["central-bangalore", "south-bangalore"],
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
      { name: "BTM Layout", blurb: "BTM Layout is in the south, near Silk Board and Jayanagar. Working professionals and families here can start a private chat, share expectations and ask how we screen profiles. We answer honestly, including what we cannot verify." },
    ],
    moreAreas: "We also serve families in Jayanagar, JP Nagar, Banashankari, Basavanagudi, Electronic City, Bannerghatta Road, Kanakapura Road and nearby areas of South Bangalore.",
    faqs: [
      { q: "I work long hours. Can we speak outside office time?", a: "Tell us what time suits you for calls and WhatsApp messages, and we will try to accommodate you." },
      { q: "Do you help working professionals find a match?", a: "Yes. Tell us about your work, education and plans, and we take them into account. Read more on our page for Muslim professionals." },
      { q: "Do I need to come to your office?", a: "No. You can do the whole process by phone and WhatsApp. Visiting the Cox Town office is optional and by appointment." },
      { q: "Is it free to submit a biodata?", a: "Yes. Submitting your biodata to HumNikah is free." },
    ],
    neighbours: ["south-east-bangalore", "west-bangalore"],
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
      { name: "Bellandur", blurb: "Bellandur is in the south-east, near the Outer Ring Road. If you work in this part of the city, tell us what time suits you for calls and messages. We keep your biodata private and share it only with families we introduce, with your consent." },
    ],
    moreAreas: "We also serve families in Silk Board, Agara, Haralur, Kasavanahalli, Kudlu, Haralur Road and nearby areas of South-East Bangalore.",
    faqs: [
      { q: "I live in Koramangala or HSR Layout. Can I do everything online?", a: "Yes. You can submit your biodata on our website and talk to our team by phone and WhatsApp. Visiting our Cox Town office is optional and by appointment." },
      { q: "Can IT professionals use HumNikah?", a: "Yes. Tell us about your work, education and expectations, and we take them into account when we shortlist profiles. We cannot promise a match or a timeline." },
      { q: "How do you keep my details private?", a: "We do not post biodatas publicly, we share them only with families we introduce, with your consent, and we do not add anyone to a group without permission." },
      { q: "Is there a fee to submit a biodata?", a: "No. Submitting your biodata to HumNikah is free." },
    ],
    neighbours: ["south-bangalore", "east-bangalore"],
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
      { name: "KR Puram", blurb: "KR Puram is in the east, near the Old Madras Road. If you are searching from KR Puram, tell us your expectations about education, work, family and language. We use them to shortlist profiles, but we cannot promise a match." },
    ],
    moreAreas: "We also serve families in Indiranagar, Mahadevapura, Hoodi, Kadugodi, Varthur, Brookefield and nearby areas of East Bangalore.",
    faqs: [
      { q: "Is the Cox Town office too far for me in Whitefield?", a: "You do not need to visit. You can do the whole process by phone and WhatsApp. If you would like to meet us, we can arrange a time by appointment." },
      { q: "Do you help NRI and Gulf-based families?", a: "Yes. Read more on our page for NRI and Gulf families." },
      { q: "How are profiles screened?", a: "Every profile is manually screened and we check identity and address documents. We do not run formal criminal-record checks, so we encourage families to make their own enquiries too." },
      { q: "Is my biodata kept private?", a: "Yes. We do not post it publicly and we share it only with families we introduce, with your consent." },
    ],
    neighbours: ["south-east-bangalore", "north-bangalore"],
  },
];

/** Only phase 1 zones are published. */
export const liveZones: Zone[] = bengaluruZones.filter((z) => z.phase === 1);

export function getLiveZone(slug: string): Zone | undefined {
  return liveZones.find((z) => z.slug === slug);
}

// Build-time guard: limits, and the free sentence on every zone page.
for (const z of bengaluruZones) {
  if (z.title.length > 60) throw new Error(`Zone ${z.slug}: title ${z.title.length}/60`);
  if (z.metaDescription.length > 155) {
    throw new Error(`Zone ${z.slug}: description ${z.metaDescription.length}/155`);
  }
  if (!z.intro.includes(FREE_SENTENCE)) {
    throw new Error(`Zone ${z.slug}: intro must contain the free-biodata sentence`);
  }
  for (const n of z.neighbours) {
    if (!bengaluruZones.some((o) => o.slug === n)) throw new Error(`Zone ${z.slug}: unknown neighbour ${n}`);
  }
}
