/**
 * Plain-text FAQ copy used to build FAQPage structured data.
 *
 * ponytail: mirrors the questions/answers rendered by
 * `src/app/faq/FaqPageClient.tsx` (whose answers are JSX with inline links).
 * If the FAQ copy changes in the component, update it here too. Collapsing
 * both into one typed source would mean dropping the inline links from the UI.
 */
export interface FaqEntry {
  q: string;
  a: string;
}

export const FAQ_SCHEMA: FaqEntry[] = [
  {
    q: "Is HumNikah only for arranged marriages?",
    a: "Not at all. HumNikah supports every path to a blessed Muslim marriage — whether your family leads the search, you take the initiative yourself, or it is a shared effort. What stays constant is a process that is respectful, transparent, and rooted in Islamic values, with Wali and family involvement encouraged at every stage.",
  },
  {
    q: "What does HumNikah believe about marriage?",
    a: "We believe Nikah completes half of your deen. It is a sacred covenant, not a transaction — so we treat every introduction with the seriousness, modesty, and sincerity the decision deserves.",
  },
  {
    q: "Who are your members?",
    a: "Our members are practising Muslims and their families across India and the diaspora — students, professionals, entrepreneurs, and homemakers. What they share is a serious intention for marriage, respect for privacy, and a preference for a guided, verified process over open browsing.",
  },
  {
    q: "Do you only work with people in India?",
    a: "Our roots are in India, with offices and verification teams across Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Telangana, and Maharashtra. We also serve Non-Resident Indians and families in the Gulf, UK, USA, Canada, and beyond, and regularly coordinate cross-border matches.",
  },
  {
    q: "What does membership include?",
    a: "Depending on the plan you choose: a manually verified profile, a dedicated relationship manager, curated match suggestions, coordinated introductions, privacy controls for your photos and contact details, and support for your family or Wali throughout the search.",
  },
  {
    q: "What is your success rate, and can you guarantee a match?",
    a: "No one can honestly guarantee marriage — rizq and Nikah are from Allah. We do not quote a single success figure or promise a timeline. What we commit to is sincere, structured effort: verified profiles, thoughtful shortlisting, and hands-on coordination until you and your family feel confident.",
  },
  {
    q: "Do you work with specific communities or schools of thought?",
    a: "We serve Muslims across all communities, languages, and maslaks. You can specify community, sect, language, or regional preferences, and we will respect them in the matches we share with you.",
  },
  {
    q: "How do I sign up?",
    a: "Complete the Submit Biodata form and a member of our team will reach out to understand you and your expectations. If there is mutual alignment, you will be guided through completing your profile and verification. Every search begins with an in-depth conversation so we know who you are and what you are looking for.",
  },
  {
    q: "Is there an eligibility criterion?",
    a: "You must be a Muslim of legal marriageable age under Indian law, seeking a lawful Nikah, and able to provide truthful information. Profiles that cannot be verified, or that misrepresent key details, are not activated.",
  },
  {
    q: "How do you ensure matches are aligned?",
    a: "We look beyond surface filters — deen and practice, family background, expectations of married life, location, education, and lifestyle — and your relationship manager discusses each shortlist with you and your family before an introduction is made.",
  },
  {
    q: "What is the difference between profile sharing and an introduction?",
    a: "Profile sharing is when we send you a curated profile to consider. An introduction happens only when both sides express interest — at that point we facilitate respectful contact between the families or individuals.",
  },
  {
    q: "Is there a minimum number of introductions each month?",
    a: "No. Matchmaking is quality-led, not quota-led. Some months bring several suitable profiles, others none, depending on your criteria and who is genuinely aligned. A quiet period is not a lapse in service.",
  },
  {
    q: "What if I do not like the matches?",
    a: "Tell your relationship manager. Your feedback refines the search — we would rather recalibrate than keep sending profiles that do not fit. There is no obligation to proceed with anyone.",
  },
  {
    q: "How long does the process usually take?",
    a: "It varies widely — from a few weeks to many months — depending on your preferences, flexibility, and family readiness. We keep the search active and stay in regular contact throughout.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Yes. Your contact details, photos, and verification documents are never made publicly searchable. They are shared only with matches you and your family approve, and only to the extent needed. See our Privacy Policy for full details.",
  },
  {
    q: "Will my profile be visible on your website or app?",
    a: "No. HumNikah is not an open-browsing platform. Your profile is shared privately and selectively with suitable matches by our team — never displayed publicly.",
  },
  {
    q: "Can my family or Wali be involved in the search?",
    a: "Absolutely — we encourage it. Parents, guardians, and your Wali can speak with your relationship manager, join discussions, visit our offices, and share preferences. Family involvement is central to how we work.",
  },
  {
    q: "Can I pause my membership?",
    a: "Yes. If you need time — for exams, travel, a family matter, or an ongoing conversation — ask your relationship manager to pause your search and resume it when you are ready.",
  },
  {
    q: "Can I upgrade my membership?",
    a: "Yes. You can move to a higher plan at any time; the difference is adjusted and the added benefits apply from the upgrade date.",
  },
  {
    q: "What happens if I find someone independently?",
    a: "That is wonderful — the goal is a successful Nikah, however it happens. Let us know so we can close your search. Fees already paid are not refunded, but if things are still uncertain you are welcome to pause your membership instead.",
  },
  {
    q: "Do you conduct background checks?",
    a: "We verify government ID, education or employment proof, marital status, and residence through our field representatives, and we rely on family references and careful human judgement. We do not run formal criminal-record checks, so families should still carry out their own due diligence before Nikah.",
  },
  {
    q: "Tell me about your team — can I meet them before joining?",
    a: "HumNikah is run by experienced matchmakers, relationship managers, and trained verification representatives, with walk-in offices for in-person family meetings. You are welcome to call us or visit an office for a no-obligation conversation before you decide.",
  },
  {
    q: "Can I see testimonials or success stories?",
    a: "Yes — you can view stories that families have agreed to share on our website and in our gallery. Many members prefer privacy, so not every success is published.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, bank transfers, and major credit and debit cards. For office visits, a cheque can also be accepted.",
  },
  {
    q: "Do you charge expensive commissions after Nikah?",
    a: "We believe in complete transparency and clarity. We charge a registration fee initially upon signup, and when the marriage is successfully fixed, a mutually agreed predetermined fixed amount is charged as discussed with the family. There are no hidden fees or exorbitant percentage-based broker commissions.",
  },
  {
    q: "How are the matchmaking charges and payments structured?",
    a: "HumNikah follows a fair, transparent and success-aligned payment structure: half in advance upon registration and initiation of personalized matchmaking and verification, and half after marriage once your Nikah is successfully blessed and finalized. There are no hidden recurring monthly fees.",
  },
  {
    q: "Can I split my membership payment?",
    a: "Yes. Our primary fee arrangement is split into two straightforward parts: half in advance and half after marriage. Speak to your relationship manager for custom family arrangements.",
  },
  {
    q: "Are membership fees refundable?",
    a: "The initial advance fee covers the dedicated matchmaking, background checks, and verification that begin immediately upon enrollment. Full details are outlined in our Terms & Conditions.",
  },
];
