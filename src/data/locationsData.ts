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
}

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: "loc-karnataka",
    state: "Karnataka",
    city: "Bangalore",
    address: "Splendid Plaza, No. 6, 2nd Floor, Wheeler Road, Cox Town, Bangalore 560005",
    phone: "+91 9019082205",
    phone2: "+91 9844321312",
    phones: ["+91 9019082205", "+91 9844321312"],
    email: "connect@humnikah.com",
    timing: "Mon - Sat: 10:00 AM - 7:00 PM",
    isHeadquarters: true,
  },
  {
    id: "loc-kerala",
    state: "Kerala",
    city: "Kochi",
    address: "Kochi, Kerala – 682001",
    phone: "+91 9019082205",
    phone2: "+91 9844321312",
    phones: ["+91 9019082205", "+91 9844321312"],
    email: "connect@humnikah.com",
    timing: "Mon - Sat: 10:00 AM - 6:30 PM",
  },
  {
    id: "loc-tamilnadu",
    state: "Tamil Nadu",
    city: "Chennai",
    address: "Chennai, Tamil Nadu – 600001",
    phone: "+91 9019082205",
    phone2: "+91 9844321312",
    phones: ["+91 9019082205", "+91 9844321312"],
    email: "connect@humnikah.com",
    timing: "Mon - Sat: 10:00 AM - 6:30 PM",
  },
  {
    id: "loc-andhra",
    state: "Andhra Pradesh",
    city: "Vijayawada",
    address: "Vijayawada, Andhra Pradesh – 520001",
    phone: "+91 9019082205",
    phone2: "+91 9844321312",
    phones: ["+91 9019082205", "+91 9844321312"],
    email: "connect@humnikah.com",
    timing: "Mon - Sat: 10:00 AM - 6:30 PM",
  },
  {
    id: "loc-telangana",
    state: "Telangana",
    city: "Hyderabad",
    address: "Hyderabad, Telangana – 500001",
    phone: "+91 9019082205",
    phone2: "+91 9844321312",
    phones: ["+91 9019082205", "+91 9844321312"],
    email: "connect@humnikah.com",
    timing: "Mon - Sat: 10:00 AM - 6:30 PM",
  },
  {
    id: "loc-maharashtra",
    state: "Maharashtra",
    city: "Mumbai",
    address: "Mumbai, Maharashtra – 400001",
    phone: "+91 9019082205",
    phone2: "+91 9844321312",
    phones: ["+91 9019082205", "+91 9844321312"],
    email: "connect@humnikah.com",
    timing: "Mon - Sat: 10:00 AM - 6:30 PM",
  },
];
