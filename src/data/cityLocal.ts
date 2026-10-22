/**
 * Locality, community and extra FAQ copy per city. Every place and community
 * named here already appears on the existing site (India page / city data).
 * Owner to confirm the served areas are accurate before launch.
 */
export interface AreaGroup {
  heading: string;
  places: string[];
  body: string;
}

export interface CityLocal {
  areas: AreaGroup[];
  moreFaqs: { q: string; a: string; link?: { href: string; label: string } }[];
  /** Optional extra section rendered after the office block. */
  extraSection?: {
    heading: string;
    body: string;
    link: { href: string; label: string };
  };
}

export const CITY_LOCAL: Record<string, CityLocal> = {
  bengaluru: {
    areas: [
      {
        heading: "Bangalore neighbourhoods we serve",
        places: [
          "Cox Town", "Frazer Town", "Shivaji Nagar", "RT Nagar", "Commercial Street",
          "Tannery Road", "Whitefield", "Electronic City", "Marathahalli", "HSR Layout", "Koramangala",
        ],
        body: "Our office is in Cox Town, so families in neighbouring Frazer Town, Shivaji Nagar and RT Nagar can walk in for a consultation. We also serve Muslim families around Commercial Street and Tannery Road, and those working in the IT corridors of Whitefield, Electronic City, Marathahalli, HSR Layout and Koramangala.",
      },
      {
        heading: "Karnataka towns we serve",
        places: ["Mangaluru", "Mysuru", "Hubli-Dharwad", "Bhatkal", "Gulbarga", "Bijapur"],
        body: "Beyond the city, we support families in Mangaluru, Mysuru, Hubli-Dharwad, Bhatkal, Gulbarga and Bijapur, so a family outside Bangalore can use the same verified, Wali-involved process without relocating.",
      },
    ],
    moreFaqs: [
      {
        q: "Is it free to submit my biodata?",
        a: "Yes. Submitting your biodata to HumNikah is free. See our fees page for more.",
        link: { href: "/fees", label: "See our fees page" },
      },
      {
        q: "Which areas of Bangalore do you serve?",
        a: "We serve families across Bangalore, including Cox Town, Frazer Town, Shivajinagar, RT Nagar, Banaswadi, Hennur, Chamarajpet and nearby areas, by phone, WhatsApp and in person at our office.",
      },
      {
        q: "How do you screen profiles?",
        a: "Every profile is manually screened and we check identity and address documents. We do not run formal criminal-record checks, so we encourage families to make their own enquiries too.",
      },
      {
        q: "Do you serve Urdu, Beary, Bhatkali and Deccani families in Bangalore?",
        a: "Yes. Tell us your community, language and family preferences and we take them into account when we shortlist profiles. We cannot promise a specific match or timeline.",
      },
      {
        q: "Can I join a Bangalore Muslim matrimony WhatsApp group?",
        a: "We do not run an open group, because groups show every member's phone number and can expose biodatas. Chat with our team personally on WhatsApp instead. We will not add you to any group without your permission.",
        link: { href: "/whatsapp?src=bengaluru-faq", label: "Chat with our team on WhatsApp" },
      },
    ],
    extraSection: {
      heading: "How to Choose a Muslim Marriage Bureau in Bangalore",
      body: "When you compare marriage bureaus in Bangalore, ask five things: how profiles are screened and what is not verified, who will see your biodata, whether the bride's Wali is involved, what the fees are in writing, and who your contact person will be. A good bureau never promises a match or a date.",
      link: {
        href: "/blog/muslim-marriage-bureau-bangalore-guide",
        label: "Read our full guide: How to Choose the Best Muslim Marriage Bureau in Bangalore",
      },
    },
  },
  chennai: {
    areas: [
      {
        heading: "Chennai neighbourhoods we serve",
        places: ["Mannady", "George Town", "Triplicane", "Royapettah", "Thousand Lights", "T. Nagar", "Anna Nagar", "Perambur"],
        body: "We assist Tamil Muslim families across Chennai, including historic community hubs like Mannady, George Town, Triplicane, and Royapettah, as well as Thousand Lights, T. Nagar, Anna Nagar, and Perambur. Introductions are handled discreetly with Wali involvement.",
      },
      {
        heading: "Tamil Nadu towns near Chennai",
        places: ["Vaniyambadi", "Ambur", "Nagore", "Coimbatore", "Madurai", "Tiruchirappalli"],
        body: "Families from Vaniyambadi, Ambur, Nagore, Coimbatore, Madurai and Tiruchirappalli (Trichy) can also reach us by phone and WhatsApp.",
      },
    ],
    moreFaqs: [
      {
        q: "How do you match Labbai, Rowther and Marakkayar families?",
        a: "You can state a community preference such as Labbai, Rowther or Marakkayar in your biodata. Your relationship manager uses it when shortlisting, together with language, education and family expectations.",
      },
      {
        q: "Do you serve Vaniyambadi and Ambur?",
        a: "Families from Vaniyambadi, Ambur and Nagore can reach us by phone and WhatsApp, as can families from Coimbatore, Madurai and Tiruchirappalli.",
      },
    ],
  },
  hyderabad: {
    areas: [
      {
        heading: "Hyderabad and Secunderabad areas we serve",
        places: ["Old City", "Malakpet", "Tolichowki", "Mehdipatnam", "Secunderabad"],
        body: "We serve Urdu-speaking Muslim families across Hyderabad, including the Old City, Malakpet, Tolichowki and Mehdipatnam, and in Secunderabad. Introductions are made family to family, with the Wali informed at each step.",
      },
      {
        heading: "Warangal and Nizamabad",
        places: ["Warangal", "Nizamabad"],
        body: "Deccani families in Warangal and Nizamabad can use the same process by phone and WhatsApp, with verified profiles shared from Hyderabad and across India.",
      },
    ],
    moreFaqs: [
      {
        q: "Can I get Urdu-speaking proposals in Hyderabad?",
        a: "Yes. Urdu-speaking families are matched with Urdu-speaking proposals where your preferences allow, and your relationship manager can communicate in Urdu.",
      },
      {
        q: "Do you cover Old City, Malakpet, Tolichowki and Mehdipatnam?",
        a: "Yes. We serve families in the Old City, Malakpet, Tolichowki, Mehdipatnam and Secunderabad by phone and WhatsApp.",
      },
      {
        q: "Do you cover Warangal and Nizamabad?",
        a: "Yes. Deccani families in Warangal and Nizamabad are served in the same way as Hyderabad families.",
      },
    ],
  },
  kochi: {
    areas: [
      {
        heading: "Kerala districts we serve",
        places: ["Malappuram", "Kozhikode (Calicut)", "Kannur", "Thrissur", "Kochi (Ernakulam)", "Kollam", "Thiruvananthapuram"],
        body: "We support Mappila Muslim families in Malappuram, Kozhikode (Calicut), Kannur and Thrissur, as well as Kochi (Ernakulam), Kollam and Thiruvananthapuram. Families anywhere in Kerala can work with us by phone and WhatsApp.",
      },
    ],
    moreFaqs: [
      {
        q: "How does Mappila matchmaking work?",
        a: "You submit a biodata with your community and family preferences. A relationship manager verifies it, shortlists aligned profiles and introduces the families once both sides are interested, with the Wali involved.",
      },
      {
        q: "Do you cover Malappuram, Kozhikode and Kannur?",
        a: "Yes. We serve families in Malappuram, Kozhikode (Calicut), Kannur and Thrissur, as well as Kochi (Ernakulam), Kollam and Thiruvananthapuram.",
      },
    ],
  },
  mumbai: {
    areas: [
      {
        heading: "Mumbai and Maharashtra cities we serve",
        places: ["Mumbai", "Pune", "Nagpur", "Aurangabad", "Malegaon", "Bhiwandi"],
        body: "We serve Muslim families in Mumbai, Pune, Nagpur and Aurangabad, as well as Malegaon and Bhiwandi, including professionals working in the Gulf and overseas.",
      },
    ],
    moreFaqs: [
      {
        q: "Is there a HumNikah office in Mumbai?",
        a: "No. Mumbai families are served by phone and WhatsApp, and in-person meetings take place at our Bengaluru office in Cox Town.",
      },
    ],
  },
  vijayawada: {
    areas: [
      {
        heading: "Vijayawada areas we serve",
        places: ["One Town", "Two Town", "Bhavanipuram", "Governorpet", "Vidyadharapuram", "Auto Nagar", "Moghalrajpuram"],
        body: "We support Muslim families across Vijayawada, including prominent localities like One Town, Two Town, Bhavanipuram, Governorpet, Vidyadharapuram, Auto Nagar, and Moghalrajpuram. Our matchmakers work in Telugu and Urdu to find compatible, verified rishtas.",
      },
      {
        heading: "Andhra Pradesh cities we serve",
        places: ["Vijayawada", "Visakhapatnam", "Guntur", "Kurnool", "Nellore", "Kadapa"],
        body: "We support Muslim families in Vijayawada, Visakhapatnam, Guntur, Kurnool, Nellore and Kadapa, connecting them with verified profiles within the state and across India.",
      },
    ],
    moreFaqs: [
      {
        q: "How do I get started from Visakhapatnam or Guntur?",
        a: "Submit your biodata through our website. A relationship manager will contact you by phone or WhatsApp to understand your preferences, so you do not need to travel to begin.",
      },
      {
        q: "Is there a HumNikah office in Vijayawada?",
        a: "No. Families in Vijayawada are served by phone and WhatsApp, and in-person meetings take place at our Bengaluru office in Cox Town.",
      },
    ],
  },
};
