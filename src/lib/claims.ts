/**
 * Single source of truth for trust / verification claims used in copy.
 * Only put claims here that the business can prove. Do not add counters
 * ("1,500+ homes", "0% fake", "5/5") without owner-supplied evidence.
 */
export const CLAIMS = {
  verificationSteps: 7,
  governmentId: "Government ID (Aadhaar / PAN)",
  screening: "Every profile manually screened",
  addressCheck: "Address verified",
  tagline: "Trusted Muslim Matrimony Across India",
  disclaimer:
    "HumNikah does not run formal criminal-record checks. Families should still do their own due diligence.",
} as const;
