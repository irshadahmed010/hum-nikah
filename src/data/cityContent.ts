export interface CityFaq {
  q: string;
  a: string;
}

export interface CityContent {
  slug: string;
  city: string;
  state: string;
  tagline: string;
  intro: string[];
  communities: string[];
  areasServed: string;
  localNote: string;
  mapQuery: string;
  faqs: CityFaq[];
}

export const CITY_CONTENT: CityContent[] = [
  {
    slug: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    tagline: "Walk-in matchmaking from our Cox Town head office",
    intro: [
      "Bengaluru is where HumNikah began. Our head office in Cox Town is a working marriage bureau as much as it is a matrimonial service — families sit with our matchmakers, review profiles together, and let us handle verification in person.",
      "For busy IT professionals and business families across the city, we translate those in-person relationships into a private, curated search: no public browsing, no open chatting, just hand-picked proposals discussed with you and your Wali.",
    ],
    communities: [
      "Kannada-speaking Muslim families",
      "Urdu-speaking families in the Old City belt",
      "Beary and Bhatkali communities",
      "Professionals working in the Gulf and overseas",
    ],
    areasServed:
      "TODO(owner): list the Bengaluru localities and neighbourhoods HumNikah actively serves (for example the existing copy references Cox Town, Frazer Town, Shivaji Nagar, RT Nagar, Whitefield and others — confirm and trim).",
    localNote:
      "TODO(owner): add any Bengaluru-specific context — walk-in office timings for this branch, local community events HumNikah attends, or a local success story the family has agreed to share.",
    mapQuery: "Splendid Plaza, Wheeler Road, Cox Town, Bengaluru 560005",
    faqs: [
      {
        q: "Can I visit the HumNikah office in Bengaluru in person?",
        a: "Yes. Our head office at Splendid Plaza, Wheeler Road, Cox Town, Bengaluru 560005 is open for walk-in family consultations. We recommend calling ahead so a senior matchmaker is available to sit with you.",
      },
      {
        q: "Does HumNikah hold home visits in Bengaluru?",
        a: "For profiles within Bengaluru and nearby districts, our field representatives carry out respectful home visits as part of verification before a proposal is shared with other families.",
      },
      {
        q: "Do you match Bengaluru families with proposals outside Karnataka?",
        a: "Yes. Bengaluru members are regularly matched with verified families across Kerala, Tamil Nadu, Telangana, Andhra Pradesh, Maharashtra, and the Gulf, based on the preferences you share.",
      },
    ],
  },
  {
    slug: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    tagline: "Tamil Muslim matchmaking with community-aware shortlisting",
    intro: [
      "HumNikah works closely with Tamil Muslim families in Chennai who want a respectful, verified process rather than an open matrimonial website. Language, community, and family expectations are treated as first-class preferences, not afterthoughts.",
      "Every Chennai biodata is screened by a relationship manager who understands Tamil Muslim social conventions, and introductions are arranged between families with the wali involved from the first conversation.",
    ],
    communities: [
      "Tamil Muslim families",
      "Labbai community",
      "Rowther community",
      "Marakkayar families",
    ],
    areasServed:
      "TODO(owner): confirm the Chennai neighbourhoods and nearby towns HumNikah serves, and the districts beyond the city that the team covers for Tamil Nadu families.",
    localNote:
      "TODO(owner): add Chennai-specific detail — a local coordinator, regular visit days, or community functions the HumNikah team attends in Tamil Nadu.",
    mapQuery: "Chennai, Tamil Nadu 600001",
    faqs: [
      {
        q: "Do you respect Tamil-speaking and community preferences for Chennai families?",
        a: "Yes. You can specify Tamil, Urdu, or English as the preferred language of communication, and community preferences such as Labbai, Rowther, or Marakkayar, and we honour them when shortlisting.",
      },
      {
        q: "Is there a HumNikah presence in Chennai or only in Bengaluru?",
        a: "Our relationship managers serve Chennai families directly and coordinate with our Bengaluru head office for verification and meetings. You do not need to travel to Bengaluru to begin your search.",
      },
      {
        q: "Can Tamil Nadu families match with proposals elsewhere in India?",
        a: "Absolutely. If your preferences allow, we share verified profiles from across India and from Tamil-speaking families in the Gulf, Singapore, and Malaysia.",
      },
    ],
  },
  {
    slug: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    tagline: "Deccani and Urdu-speaking matchmaking with family involvement",
    intro: [
      "In Hyderabad, HumNikah serves Urdu-speaking and Deccani families who value the traditional marriage bureau approach — a known matchmaker, verified references, and introductions made family-to-family.",
      "We take the time to understand your khandaan, your expectations, and your maslak, and then share only the proposals that genuinely fit, with the wali kept informed at every step.",
    ],
    communities: [
      "Deccani Muslim families",
      "Urdu-speaking families of the Old City",
      "Hyderabadi families settled in the Gulf",
      "Professionals across HITEC City and Banjara Hills",
    ],
    areasServed:
      "TODO(owner): list the Hyderabad and Secunderabad localities and the surrounding districts HumNikah actively covers for Telangana families.",
    localNote:
      "TODO(owner): add Hyderabad-specific detail — local consultation availability, community events, or a verified local success story.",
    mapQuery: "Hyderabad, Telangana 500001",
    faqs: [
      {
        q: "Does HumNikah understand Deccani and Hyderabadi family preferences?",
        a: "Yes. Sects, maslak, community, and language preferences common among Hyderabadi and Deccani families are recorded and respected during shortlisting, not treated as generic filters.",
      },
      {
        q: "Do you help non-resident Hyderabadis settled abroad?",
        a: "Many of our Hyderabad members are NRIs in the Gulf, the UK, and North America. We coordinate cross-border introductions and family meetings around time zones and travel plans.",
      },
      {
        q: "How does verification work for Hyderabad profiles?",
        a: "Identity, education or profession, marital status, and residence are verified before sharing a profile, using government ID, phone verification, and where possible, a home visit by our representatives.",
      },
    ],
  },
  {
    slug: "vijayawada",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    tagline: "Andhra Muslim matrimony with personal, verified guidance",
    intro: [
      "HumNikah supports Muslim families in Vijayawada and across Andhra Pradesh who want a considered, dignified matchmaking process. Rather than scrolling endless profiles, families receive a short, curated list from a relationship manager who knows their brief.",
      "We work in Telugu and Urdu, respect community and regional preferences, and coordinate introductions with the bride's wali and both families fully involved.",
    ],
    communities: [
      "Telugu-speaking Muslim families",
      "Urdu-speaking families across coastal Andhra",
      "Business and agricultural families",
      "Professionals working in Hyderabad and the Gulf",
    ],
    areasServed:
      "TODO(owner): confirm the Vijayawada localities and Andhra Pradesh districts HumNikah serves, including Guntur, Visakhapatnam, Kurnool, Nellore and others as applicable.",
    localNote:
      "TODO(owner): add Andhra Pradesh-specific detail such as local representative coverage or community gatherings the team attends.",
    mapQuery: "Vijayawada, Andhra Pradesh 520001",
    faqs: [
      {
        q: "Can Vijayawada families search in Telugu and Urdu?",
        a: "Yes. Your relationship manager communicates in Telugu, Urdu, or English as you prefer, and language is treated as a genuine matching preference.",
      },
      {
        q: "Does HumNikah cover districts beyond Vijayawada?",
        a: "We serve Muslim families across Andhra Pradesh, including Guntur, Visakhapatnam, Kurnool, Nellore, and Kadapa, and connect them with verified profiles statewide and pan-India.",
      },
      {
        q: "What is expected from the family during the process?",
        a: "Family involvement is central. Parents or a wali speak with our team, share preferences, review shortlisted profiles, and join introductions — we never bypass the family.",
      },
    ],
  },
  {
    slug: "kochi",
    city: "Kochi",
    state: "Kerala",
    tagline: "Mappila and Malayali Muslim matchmaking with privacy first",
    intro: [
      "In Kochi and across Kerala, HumNikah works with Mappila and Malayali Muslim families who expect discretion, clear communication, and a verified process. Privacy is not an add-on here — photos and contact details are shared only with your approval.",
      "Our matchmakers understand Kerala's community and family networks, and help families navigate proposals across the state and with Malayali families settled in the Gulf.",
    ],
    communities: [
      "Mappila Muslim families",
      "Malayali families across central Kerala",
      "Families in the Gulf with Kerala roots",
      "Professionals in Kochi and neighbouring districts",
    ],
    areasServed:
      "TODO(owner): list the Kochi and central Kerala localities and districts HumNikah covers, such as Malappuram, Kozhikode, Thrissur, Kollam and Thiruvananthapuram if applicable.",
    localNote:
      "TODO(owner): add Kerala-specific detail — local coordinator presence, visit days, or a verified success story from the region.",
    mapQuery: "Kochi, Kerala 682001",
    faqs: [
      {
        q: "Does HumNikah serve Mappila families in Kerala?",
        a: "Yes. Mappila and Malayali Muslim families are a core part of our Kerala service, with shortlisting that respects maslak, community, and regional preferences.",
      },
      {
        q: "How do you protect privacy for Kerala families?",
        a: "Your photographs, contact details, and documents are never publicly searchable. They are shared only with matches you and your family approve, and only to the extent needed.",
      },
      {
        q: "Can you match Kerala families settled in the Gulf?",
        a: "We regularly coordinate cross-border matches between Kerala families and Malayali members in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.",
      },
    ],
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    tagline: "Konkani, Memon and Urdu-speaking matchmaking in Mumbai",
    intro: [
      "Mumbai's Muslim families span many communities, and HumNikah treats that diversity with care. We match Konkani Muslim, Memon, and Urdu-speaking families while respecting the community, language, and business-family preferences that matter to you.",
      "For professionals with little time to search, our relationship managers do the shortlisting, coordinate introductions, and keep the whole process discreet and dignified.",
    ],
    communities: [
      "Konkani Muslim families",
      "Memon community",
      "Urdu-speaking families",
      "Business and professional families in the city",
    ],
    areasServed:
      "TODO(owner): confirm the Mumbai neighbourhoods and Maharashtra districts HumNikah serves, such as Pune, Nagpur, Aurangabad, Malegaon and Bhiwandi if applicable.",
    localNote:
      "TODO(owner): add Mumbai-specific detail — local representative availability, community events, or a verified success story.",
    mapQuery: "Mumbai, Maharashtra 400001",
    faqs: [
      {
        q: "Does HumNikah serve Memon and Konkani Muslim families in Mumbai?",
        a: "Yes. Community and language preferences such as Konkani, Memon, or Urdu are captured and respected when we shortlist and share proposals.",
      },
      {
        q: "Can busy Mumbai professionals delegate the search?",
        a: "That is exactly our model. A dedicated relationship manager does the screening and shortlisting, and shares only curated, aligned profiles, so you spend time on genuine conversations rather than browsing.",
      },
      {
        q: "Do you cover the rest of Maharashtra?",
        a: "We serve Muslim families across Maharashtra, including Pune, Nagpur, Aurangabad, Malegaon, and Bhiwandi, alongside pan-India and overseas matching.",
      },
    ],
  },
];

export function getCityContent(slug: string): CityContent | undefined {
  return CITY_CONTENT.find((city) => city.slug === slug);
}
