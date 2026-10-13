/**
 * Community and situation landing pages (Batch 1).
 * Copy uses only facts already on the site (communities, towns served, the
 * verification and Wali-involved process). Owner to review before launch.
 */
export interface CommunityFaq {
  q: string;
  a: string;
}

export interface CommunityPage {
  slug: string;
  primaryKeyword: string;
  /** <= 60 chars including brand */
  title: string;
  /** <= 155 chars */
  description: string;
  h1: string;
  /** Short label used in nav, breadcrumbs and link anchors. */
  navLabel: string;
  intro: string[];
  sections: { heading: string; body: string[] }[];
  placesHeading: string;
  places: { heading: string; body: string }[];
  /** City page slugs this page links to. */
  relatedCities: string[];
  faqs: CommunityFaq[];
}

export const COMMUNITY_PAGES: CommunityPage[] = [
  {
    slug: "labbai-rowther-marakkayar",
    primaryKeyword: "Labbai matrimony",
    title: "Labbai, Rowther & Marakkayar Matrimony | HumNikah",
    description:
      "Labbai, Rowther and Marakkayar Muslim matrimony in Tamil Nadu. Verified profiles, Wali-involved introductions, Tamil support. Submit biodata free.",
    h1: "Labbai, Rowther & Marakkayar Muslim Matrimony",
    navLabel: "Labbai, Rowther & Marakkayar",
    intro: [
      "HumNikah offers Labbai matrimony, along with Rowther and Marakkayar matchmaking, for Tamil Muslim families who want a verified, family-led process instead of an open matrimonial website. Community is treated as a genuine preference, recorded in your biodata and used when your relationship manager shortlists profiles.",
      "Every biodata is manually screened, and introductions are arranged between families with the Wali involved from the first conversation. You can communicate with us in Tamil, Urdu or English.",
    ],
    sections: [
      {
        heading: "Labbai matrimony",
        body: [
          "Families who prefer a Labbai match can state this in their biodata. We use it alongside language, education, profession and family expectations, so the proposals you receive are aligned with what you actually asked for.",
        ],
      },
      {
        heading: "Rowther matrimony",
        body: [
          "For Rowther families, the same process applies: a relationship manager reads your brief, shortlists verified profiles that match your community preference, and discusses each one with you and your Wali before any introduction is made.",
        ],
      },
      {
        heading: "Marakkayar matrimony",
        body: [
          "Marakkayar families can register in the same way. We never share your photographs, contact details or documents publicly. They are passed on only to matches that you and your family approve.",
        ],
      },
      {
        heading: "How verification works",
        body: [
          "Before a profile is shared, we verify identity through government ID, along with phone number, marital status, education or profession and residence. We do not run formal criminal-record checks, so families should still do their own due diligence before deciding.",
        ],
      },
    ],
    placesHeading: "Tamil Nadu towns we serve",
    places: [
      {
        heading: "Chennai, Coimbatore, Madurai and Trichy",
        body: "We serve Tamil Muslim families in Chennai, Coimbatore, Madurai and Tiruchirappalli (Trichy), by phone and WhatsApp, with in-person meetings at our Bengaluru office when needed.",
      },
      {
        heading: "Vaniyambadi, Ambur and Nagore",
        body: "Families in Vaniyambadi, Ambur and Nagore can use the same verified, Wali-involved process, and can also be matched with families elsewhere in India and in the Gulf.",
      },
    ],
    relatedCities: ["chennai"],
    faqs: [
      {
        q: "Can I ask for a Labbai, Rowther or Marakkayar match specifically?",
        a: "Yes. You can state your community preference in the biodata form, and your relationship manager uses it when shortlisting.",
      },
      {
        q: "Can I communicate in Tamil?",
        a: "Yes. You can choose Tamil, Urdu or English as the language for communication with your relationship manager.",
      },
      {
        q: "Do you serve Vaniyambadi, Ambur and Nagore?",
        a: "Yes. We serve families in these towns as well as Chennai, Coimbatore, Madurai and Tiruchirappalli.",
      },
      {
        q: "Do I need to travel to Bengaluru?",
        a: "No. You can begin and continue the process by phone and WhatsApp. In-person meetings take place at our Bengaluru office when a family wishes to meet.",
      },
    ],
  },
  {
    slug: "mappila",
    primaryKeyword: "Mappila matrimony",
    title: "Mappila Muslim Matrimony in Kerala | HumNikah",
    description:
      "Mappila matrimony in Kerala for families in Malappuram, Kozhikode, Kannur and Thrissur. Verified profiles, Wali involved. Submit biodata free.",
    h1: "Mappila Muslim Matrimony in Kerala",
    navLabel: "Mappila (Kerala)",
    intro: [
      "HumNikah provides Mappila matrimony for Muslim families across Kerala who expect discretion, clear communication and a verified process. Your biodata is reviewed by a relationship manager who then shortlists profiles that match your community, family and religious preferences.",
      "Privacy comes first. Photographs, contact details and documents are never publicly searchable, and the Wali is involved in every introduction.",
    ],
    sections: [
      {
        heading: "How Mappila matchmaking works with HumNikah",
        body: [
          "You submit a biodata with your community and family preferences. A relationship manager verifies it, shortlists aligned profiles and discusses each one with you and your family. Introductions are made only when both sides are interested.",
        ],
      },
      {
        heading: "Families in the Gulf with Kerala roots",
        body: [
          "Many Kerala families have members working in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman. We coordinate cross-border introductions between Kerala families and Malayali members in the Gulf, around time zones and travel plans.",
        ],
      },
      {
        heading: "Verification and privacy",
        body: [
          "Identity, education or profession, marital status and residence are verified before a profile is shared, using government ID and phone verification, with respectful home visits by our representatives where possible. We do not run formal criminal-record checks, so families should still do their own due diligence.",
        ],
      },
    ],
    placesHeading: "Kerala districts we serve",
    places: [
      {
        heading: "Malappuram, Kozhikode (Calicut), Kannur and Thrissur",
        body: "We support Mappila Muslim families in Malappuram, Kozhikode (Calicut), Kannur and Thrissur, working with them by phone and WhatsApp.",
      },
      {
        heading: "Kochi, Kollam and Thiruvananthapuram",
        body: "Families in Kochi, Kollam and Thiruvananthapuram can use the same process, with proposals available from across Kerala, India and the Gulf.",
      },
    ],
    relatedCities: ["kochi"],
    faqs: [
      {
        q: "Does HumNikah serve Mappila families?",
        a: "Yes. Mappila and Malayali Muslim families are a core part of our Kerala service, and community preferences are respected when we shortlist.",
      },
      {
        q: "Can Gulf-based Kerala families register?",
        a: "Yes. We regularly coordinate matches between Kerala families and Malayali members in the Gulf.",
      },
      {
        q: "Do you cover Malappuram, Kozhikode and Kannur?",
        a: "Yes. We serve families in Malappuram, Kozhikode (Calicut), Kannur, Thrissur, Kochi, Kollam and Thiruvananthapuram.",
      },
      {
        q: "How is my privacy protected?",
        a: "Your photographs, contact details and documents are shared only with matches that you and your family approve, and only as far as needed.",
      },
    ],
  },
  {
    slug: "konkani",
    primaryKeyword: "Konkani Muslim matrimony",
    title: "Konkani Muslim Matrimony in Mumbai | HumNikah",
    description:
      "Konkani Muslim matrimony in Mumbai, Pune, Malegaon and Bhiwandi. Verified profiles, Wali-involved introductions. Submit biodata free.",
    h1: "Konkani Muslim Matrimony",
    navLabel: "Konkani (Mumbai)",
    intro: [
      "HumNikah offers Konkani Muslim matrimony for families in Mumbai and across Maharashtra who want a discreet, dignified process handled by a personal matchmaker. Community and language are recorded in your biodata and respected when profiles are shortlisted.",
      "Introductions are arranged between families, with the Wali involved throughout and no open browsing of profiles.",
    ],
    sections: [
      {
        heading: "Konkani matchmaking, handled for you",
        body: [
          "For busy professionals and business families, a dedicated relationship manager does the screening and shortlisting. You receive a short list of verified, aligned profiles and discuss each one with your family, rather than spending evenings scrolling.",
        ],
      },
      {
        heading: "Verification and privacy",
        body: [
          "Every biodata is manually screened. Identity, education or profession, marital status and residence are verified before sharing, and your photographs and contact details stay private until you approve an introduction. We do not run formal criminal-record checks, so families should still do their own due diligence.",
        ],
      },
      {
        heading: "Gulf and overseas families",
        body: [
          "Many Maharashtra families have members working in the Gulf and overseas. We coordinate introductions across time zones and travel plans.",
        ],
      },
    ],
    placesHeading: "Maharashtra cities we serve",
    places: [
      {
        heading: "Mumbai and Pune",
        body: "We serve Konkani Muslim families in Mumbai and Pune by phone and WhatsApp. There is no HumNikah office in Mumbai; in-person meetings take place at our Bengaluru office.",
      },
      {
        heading: "Malegaon and Bhiwandi",
        body: "Families in Malegaon and Bhiwandi are served in the same way, along with Nagpur and Aurangabad, with proposals available across India.",
      },
    ],
    relatedCities: ["mumbai"],
    faqs: [
      {
        q: "Can I ask for a Konkani Muslim match?",
        a: "Yes. State your community preference in the biodata form and your relationship manager will use it when shortlisting.",
      },
      {
        q: "Is there a HumNikah office in Mumbai?",
        a: "No. Mumbai families are served by phone and WhatsApp, and in-person meetings take place at our Bengaluru office in Cox Town.",
      },
      {
        q: "Do you cover Pune, Malegaon and Bhiwandi?",
        a: "Yes. We serve Muslim families in Pune, Malegaon, Bhiwandi, Nagpur and Aurangabad as well as Mumbai.",
      },
      {
        q: "Can I delegate the search?",
        a: "Yes. A relationship manager does the screening and shortlisting and shares only curated, aligned profiles with you.",
      },
    ],
  },
  {
    slug: "deccani",
    primaryKeyword: "Deccani Muslim matrimony",
    title: "Deccani Muslim Matrimony in Hyderabad | HumNikah",
    description:
      "Deccani Muslim matrimony for Hyderabad, Warangal and Nizamabad families. Verified profiles, Urdu support, Wali involved. Submit biodata free.",
    h1: "Deccani Muslim Matrimony",
    navLabel: "Deccani (Hyderabad)",
    intro: [
      "HumNikah offers Deccani Muslim matrimony for Hyderabadi and Urdu-speaking families who value the traditional marriage bureau approach: a known matchmaker, verified details and introductions made family to family.",
      "We take time to understand your family, your expectations and your school of thought, and then share only the proposals that genuinely fit, with the Wali informed at every step.",
    ],
    sections: [
      {
        heading: "Deccani and Hyderabadi family preferences",
        body: [
          "Sect, maslak, community and language preferences common among Hyderabadi and Deccani families are recorded in your biodata and respected during shortlisting. They are not treated as generic filters.",
        ],
      },
      {
        heading: "Urdu-speaking proposals",
        body: [
          "Urdu-speaking families are matched with Urdu-speaking proposals where their preferences allow, and your relationship manager can communicate with you in Urdu.",
        ],
      },
      {
        heading: "Hyderabadis settled abroad",
        body: [
          "Many Hyderabadi families have members in the Gulf, the UK and North America. We coordinate cross-border introductions and family meetings around time zones and travel plans.",
        ],
      },
      {
        heading: "Verification",
        body: [
          "Identity, education or profession, marital status and residence are verified before a profile is shared. We do not run formal criminal-record checks, so families should still do their own due diligence.",
        ],
      },
    ],
    placesHeading: "Telangana areas we serve",
    places: [
      {
        heading: "Hyderabad and Secunderabad",
        body: "We serve families across Hyderabad, including the Old City, Malakpet, Tolichowki and Mehdipatnam, and in Secunderabad, by phone and WhatsApp.",
      },
      {
        heading: "Warangal and Nizamabad",
        body: "Deccani families in Warangal and Nizamabad can use the same process, with verified profiles shared from Hyderabad and across India.",
      },
    ],
    relatedCities: ["hyderabad"],
    faqs: [
      {
        q: "Do you support Deccani families?",
        a: "Yes. Deccani and Hyderabadi family preferences are recorded and respected when we shortlist profiles.",
      },
      {
        q: "Can I get Urdu-speaking proposals?",
        a: "Yes, where your preferences allow. Your relationship manager can communicate with you in Urdu.",
      },
      {
        q: "Do you cover Warangal and Nizamabad?",
        a: "Yes. We serve families in Warangal and Nizamabad as well as Hyderabad and Secunderabad.",
      },
      {
        q: "Can NRI Hyderabadis register?",
        a: "Yes. We coordinate introductions for Hyderabadi families settled in the Gulf, the UK and North America.",
      },
    ],
  },
  {
    slug: "divorcee-widow-remarriage",
    primaryKeyword: "divorcee Muslim matrimony",
    title: "Muslim Divorcee & Widow Remarriage | HumNikah",
    description:
      "Muslim divorcee and widow matrimony: respectful second-marriage matchmaking with verification, privacy and Wali involvement. Submit biodata free.",
    h1: "Muslim Remarriage: Divorcee & Widow Matrimony",
    navLabel: "Divorcee & Widow Remarriage",
    intro: [
      "HumNikah supports divorcee Muslim matrimony and widow remarriage with the same care, privacy and Shariah-minded process we offer every member. Divorced and widowed members are welcome to register, and a second marriage is handled with dignity and discretion.",
      "A relationship manager reviews your biodata, understands what you are looking for, and shortlists only profiles that are genuinely aligned, with the Wali involved in every introduction.",
    ],
    sections: [
      {
        heading: "Muslim second marriage, handled respectfully",
        body: [
          "Marital status is recorded openly in the biodata. You can state whether you are divorced, widowed or separated, and what you are looking for, so proposals reach you with full clarity on both sides.",
        ],
      },
      {
        heading: "Verification for remarriage profiles",
        body: [
          "Marital status is verified like every other detail, alongside identity, education or profession and residence. We do not run formal criminal-record checks, so families should still do their own due diligence.",
        ],
      },
      {
        heading: "Privacy",
        body: [
          "Photographs, contact details and documents are never publicly searchable. They are shared only with matches that you and your family approve, which matters especially when a member wants discretion about their past.",
        ],
      },
      {
        heading: "Wali and family involvement",
        body: [
          "We encourage Wali involvement and treat every introduction as a family matter. Parents or guardians can speak with our team, share preferences and take part in discussions.",
        ],
      },
    ],
    placesHeading: "Families we support across India",
    places: [
      {
        heading: "Every city we serve",
        body: "We serve remarriage and second-marriage families in Bengaluru, Chennai, Hyderabad, Kochi, Mumbai and Vijayawada, and across India, mostly by phone and WhatsApp.",
      },
    ],
    relatedCities: ["bengaluru", "chennai", "hyderabad", "kochi", "mumbai", "vijayawada"],
    faqs: [
      {
        q: "Do you help Muslim divorcees and widows?",
        a: "Yes. Divorced and widowed members are welcome to register, and the matchmaking process is the same private, verified and Wali-involved one we offer everyone.",
      },
      {
        q: "Is second marriage handled with Wali involvement?",
        a: "Yes. We encourage Wali involvement in every introduction, including second marriages.",
      },
      {
        q: "How is my privacy protected?",
        a: "Your photographs, contact details and documents are never publicly searchable and are shared only with matches that you and your family approve.",
      },
      {
        q: "Is marital status verified?",
        a: "Yes. Marital status is verified before a profile is shared, together with identity, education or profession and residence.",
      },
    ],
  },
];

export function getCommunityPage(slug: string): CommunityPage | undefined {
  return COMMUNITY_PAGES.find((c) => c.slug === slug);
}

/** Community pages relevant to each city page (for cross-links). */
export const CITY_COMMUNITY_LINKS: Record<string, string[]> = {
  bengaluru: ["divorcee-widow-remarriage"],
  chennai: ["labbai-rowther-marakkayar", "divorcee-widow-remarriage"],
  hyderabad: ["deccani", "divorcee-widow-remarriage"],
  kochi: ["mappila", "divorcee-widow-remarriage"],
  mumbai: ["konkani", "divorcee-widow-remarriage"],
  vijayawada: ["divorcee-widow-remarriage"],
};

function validateCommunities(pages: CommunityPage[]) {
  for (const p of pages) {
    if (p.title.length > 60) throw new Error(`${p.slug}: title > 60`);
    if (p.description.length > 155) throw new Error(`${p.slug}: description > 155`);
    if (p.faqs.length < 4) throw new Error(`${p.slug}: needs at least 4 FAQs`);
  }
}
validateCommunities(COMMUNITY_PAGES);
