export type Area = {
  slug: string;
  name: string;
  alsoKnownAs?: string;
  blurb: string;
  dedicatedPage?: boolean;
};

export const bengaluruAreas: Area[] = [
  {
    slug: 'cox-town',
    name: 'Cox Town',
    blurb:
      'Our office is located in Cox Town on Wheeler Road, making in-person consultations convenient for local families by appointment. We assist families in Urdu, English, Kannada, and Hindi. Every profile is manually screened with document checks, and we take time to explain our Shariah-compliant process to elders. Please call or message us before visiting so our team can prepare and set aside dedicated time for your family.',
    dedicatedPage: false,
  },
  {
    slug: 'frazer-town',
    name: 'Frazer Town',
    alsoKnownAs: 'Pulakeshi Nagar',
    blurb:
      "Frazer Town is less than two kilometres from our Cox Town office along Wheeler Road and Coles Road. Many Urdu and Dakhni-speaking families from Mosque Road, MM Road, and Pulakeshi Nagar reach out for rishtas. We screen every profile manually and ensure the bride's Wali is respectfully involved throughout introductions. You can consult our team directly or visit our office by appointment.",
    dedicatedPage: false,
  },
  {
    slug: 'shivajinagar',
    name: 'Shivajinagar',
    blurb:
      'Shivajinagar is around three kilometres west of our Cox Town office, easily accessible via Broadway and Dispensary Road. The area has long-established Urdu-speaking trading and business families seeking educated, practicing matches. We verify identity and residence documents manually for every biodata, never publishing details in public groups. Families can submit their biodata online or schedule a meeting with our Bengaluru team.',
    dedicatedPage: false,
  },
  {
    slug: 'richards-town',
    name: 'Richards Town',
    blurb:
      'Richards Town borders Cox Town directly, situated just a short walk or drive across Wheeler Road and Davis Road. Many Urdu and English-speaking professionals and settled families from this serene neighbourhood prefer our confidential matchmaking approach. We verify personal profiles carefully without public exposure and coordinate introductions with elders. Local families are welcome to arrange a personal visit to our nearby office.',
    dedicatedPage: false,
  },
  {
    slug: 'benson-town',
    name: 'Benson Town',
    blurb:
      "Benson Town is located just west of Cox Town across the railway crossing via Pottery Road. Families from Benson Town, including corporate executives, doctors, and business owners, seek compatible rishtas with privacy. Our Bengaluru team manually reviews documents and ensures Wali involvement for prospective brides. You can share your biodata securely, discuss requirements on WhatsApp, or book a meeting at our office.",
    dedicatedPage: false,
  },
  {
    slug: 'tannery-road',
    name: 'Tannery Road',
    blurb:
      "Tannery Road lies approximately two kilometres north of our Cox Town office via Clarence Road. The locality is home to vibrant Urdu, Dakhni, and Tamil-speaking Muslim communities seeking traditional and family-centred rishtas. We screen every candidate's identity documents manually and maintain complete confidentiality without open WhatsApp groups. Connect with our Bengaluru team by message, call, or by booking an office visit.",
    dedicatedPage: false,
  },
  {
    slug: 'rt-nagar',
    name: 'RT Nagar',
    blurb:
      'RT Nagar is roughly four to five kilometres northwest of Cox Town, connected via Cantonment and Dinnur Main Road. Families here include government officials, academics, and tech professionals speaking Urdu and Kannada. We respect individual family values, screen biodatas manually, and arrange introductions with parental consent. You can submit your biodata online or connect with our Bengaluru team directly on WhatsApp.',
    dedicatedPage: false,
  },
  {
    slug: 'dj-halli-kg-halli',
    name: 'DJ Halli and KG Halli',
    alsoKnownAs: 'Devarajeevanahalli & Kadugondanahalli',
    blurb:
      "Devarajeevanahalli and Kadugondanahalli are situated just two to three kilometres northeast of our Wheeler Road office. Many multi-generational Urdu and Dakhni-speaking households in DJ Halli and KG Halli prefer traditional matchmaking with community references. We verify identity papers manually and ensure the bride's guardian leads communications. Families can consult us confidentially over phone, WhatsApp, or through a pre-booked office consultation.",
    dedicatedPage: false,
  },
  {
    slug: 'murphy-town',
    name: 'Murphy Town',
    blurb:
      "Murphy Town is situated just south of Cox Town and Ulsoor, a quick five-minute drive from our Wheeler Road location. Many established Urdu and Tamil-speaking families from this locality contact us for reliable rishtas. We manually verify all address and identity records to give families genuine peace of mind. Message our team directly to discuss your family's preferences or arrange an in-person meeting.",
    dedicatedPage: false,
  },
  {
    slug: 'jayamahal',
    name: 'Jayamahal',
    blurb:
      'Jayamahal is located around three kilometres northwest of Cox Town near Cantonment Railway Station and Nandi Durga Road. Urdu and English-speaking families from Jayamahal Extension frequently seek rishtas for educated professionals and entrepreneurs. Our service safeguards your privacy with manual document screening and no public forwarding. Message us on WhatsApp or request an appointment at our Cox Town office to begin.',
    dedicatedPage: false,
  },
];

export const BENGALURU_TIER_B_TEXT =
  'We also serve families in Banaswadi, Nagawara, Hennur, Kammanahalli, Yeshwanthpur, Chamarajpet, Mysore Road, Kalasipalya, Wilson Garden, Austin Town and nearby areas of Bangalore.';

export const BENGALURU_TIER_C_TEXT =
  'Whitefield, Electronic City, Yelahanka, Bommanahalli, and nearby areas.';
