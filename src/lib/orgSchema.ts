import { SITE_URL, SOCIAL_LINKS } from "./site";

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "HumNikah",
  alternateName: ["Hum Nikah", "HumNikah.com"],
  url: SITE_URL,
  logo: `${SITE_URL}/images/hum-nikah-new-logo.png`,
  sameAs: SOCIAL_LINKS.length > 0 ? SOCIAL_LINKS : undefined,
};
