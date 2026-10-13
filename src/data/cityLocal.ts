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
  moreFaqs: { q: string; a: string }[];
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
        q: "Do you cover Frazer Town, Shivaji Nagar and RT Nagar?",
        a: "Yes. Families in Frazer Town, Shivaji Nagar and RT Nagar are served from our Cox Town office, and can visit in person or work with us by phone and WhatsApp.",
      },
      {
        q: "Do you match Beary and Bhatkali families?",
        a: "Yes. Beary and Bhatkali community preferences are recorded in your biodata and respected when we shortlist profiles.",
      },
      {
        q: "Can I find Urdu-speaking matches in Bangalore?",
        a: "Yes. Language is treated as a genuine preference, so Urdu-speaking families are matched with Urdu-speaking proposals where your preferences allow.",
      },
    ],
  },
  chennai: {
    areas: [
      {
        heading: "Chennai and Tamil Nadu cities we serve",
        places: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
        body: "We work with Tamil Muslim families in Chennai, Coimbatore, Madurai and Tiruchirappalli (Trichy). Preferences for community, language and family background are recorded in the biodata and used when we shortlist, not treated as generic filters.",
      },
      {
        heading: "Vaniyambadi, Ambur and Nagore",
        places: ["Vaniyambadi", "Ambur", "Nagore"],
        body: "Families in Vaniyambadi, Ambur and Nagore are served by phone and WhatsApp, with in-person meetings at our Bengaluru office when needed.",
      },
    ],
    moreFaqs: [
      {
        q: "How do you match Labbai, Rowther and Marakkayar families?",
        a: "You can state a community preference such as Labbai, Rowther or Marakkayar in your biodata. Your relationship manager uses it when shortlisting, together with language, education and family expectations.",
      },
      {
        q: "Do you serve Vaniyambadi and Ambur?",
        a: "Yes. We serve Muslim families in Vaniyambadi, Ambur and Nagore as well as Chennai, Coimbatore, Madurai and Tiruchirappalli.",
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
        places: ["Malappuram", "Kozhikode (Calicut)", "Kannur", "Thrissur", "Kochi", "Kollam", "Thiruvananthapuram"],
        body: "We support Mappila Muslim families in Malappuram, Kozhikode (Calicut), Kannur and Thrissur, as well as Kochi, Kollam and Thiruvananthapuram. Families anywhere in Kerala can work with us by phone and WhatsApp.",
      },
    ],
    moreFaqs: [
      {
        q: "How does Mappila matchmaking work?",
        a: "You submit a biodata with your community and family preferences. A relationship manager verifies it, shortlists aligned profiles and introduces the families once both sides are interested, with the Wali involved.",
      },
      {
        q: "Do you cover Malappuram, Kozhikode and Kannur?",
        a: "Yes. We serve families in Malappuram, Kozhikode (Calicut), Kannur and Thrissur, as well as Kochi, Kollam and Thiruvananthapuram.",
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
