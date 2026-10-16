export interface OfficeLocation {
  id: string;
  state: string;
  city: string;
  address: string;
  phone?: string;
  phone2?: string;
  phones?: string[];
  email?: string;
  timing?: string;
  isHeadquarters?: boolean;
  /** True only for a real, staffed office with a verified street address. */
  hasOffice: boolean;
}

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: "loc-karnataka",
    state: "Karnataka",
    city: "Bengaluru",
    address:
      "Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bengaluru 560005",
    phone: "+91 9019082205",
    phone2: "+91 9844321312",
    phones: ["+91 9019082205", "+91 9844321312"],
    email: "connect@humnikah.com",
    isHeadquarters: true,
    hasOffice: true,
  },
  {
    id: "loc-tamilnadu",
    state: "Tamil Nadu",
    city: "Chennai",
    address: "",
    hasOffice: false,
    phone: "+91 9019082205",
    phone2: "+91 9844321312",
    phones: ["+91 9019082205", "+91 9844321312"],
    email: "connect@humnikah.com",
  },
  {
    id: "loc-telangana",
    state: "Telangana",
    city: "Hyderabad",
    address: "",
    hasOffice: false,
    phone: "+91 9019082205",
    phone2: "+91 9844321312",
    phones: ["+91 9019082205", "+91 9844321312"],
    email: "connect@humnikah.com",
  },
  {
    id: "loc-andhra",
    state: "Andhra Pradesh",
    city: "Vijayawada",
    address: "",
    hasOffice: false,
    phone: "+91 9019082205",
    phone2: "+91 9844321312",
    phones: ["+91 9019082205", "+91 9844321312"],
    email: "connect@humnikah.com",
  },
  {
    id: "loc-kerala",
    state: "Kerala",
    city: "Kochi",
    address: "",
    hasOffice: false,
    phone: "+91 9019082205",
    phone2: "+91 9844321312",
    phones: ["+91 9019082205", "+91 9844321312"],
    email: "connect@humnikah.com",
  },
  {
    id: "loc-maharashtra",
    state: "Maharashtra",
    city: "Mumbai",
    address: "",
    hasOffice: false,
    phone: "+91 9019082205",
    phone2: "+91 9844321312",
    phones: ["+91 9019082205", "+91 9844321312"],
    email: "connect@humnikah.com",
  },
];
