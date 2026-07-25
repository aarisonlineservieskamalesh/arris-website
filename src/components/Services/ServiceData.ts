import {
  CreditCard,
  IdCard,
  Vote,
  FileBadge,
  BadgeIndianRupee,
  Map,
  Wheat,
  Plane,
  Building2,
} from "lucide-react";

export const categories = [
  "All",
  "Identity",
  "Certificates",
  "Ration",
  "Land",
  "Travel",
  "Business",
];

export const services = [
  // Identity
  {
    id: 1,
    slug: "aadhaar-services",
    detailSlug: "aadhaar-address-change",
    title: "Aadhaar Services",
    category: "Identity",
    description: "New, Update & PVC Card",
    icon: CreditCard,
  },
  {
    id: 2,
    slug: "pan-card",
    title: "PAN Card",
    category: "Identity",
    description: "New & Correction",
    icon: IdCard,
  },
  {
    id: 3,
    slug: "voter-id",
    title: "Voter ID",
    category: "Identity",
    description: "New, Update & Transfer",
    icon: Vote,
  },

  // Certificates
  {
    id: 4,
    slug: "community-certificate",
    title: "Community Certificate",
    category: "Certificates",
    description: "Apply & Download",
    icon: FileBadge,
  },
  {
    id: 5,
    slug: "income-certificate",
    title: "Income Certificate",
    category: "Certificates",
    description: "Apply Online",
    icon: BadgeIndianRupee,
  },
  {
    id: 6,
    slug: "nativity-certificate",
    title: "Nativity Certificate",
    category: "Certificates",
    description: "Apply Online",
    icon: FileBadge,
  },

  // Ration
  {
    id: 7,
    slug: "ration-card",
    title: "Ration Card",
    category: "Ration",
    description: "New, Transfer & Correction",
    icon: Wheat,
  },

  // Land
  {
    id: 8,
    slug: "patta-chitta",
    title: "Patta / Chitta",
    category: "Land",
    description: "Land Records",
    icon: Map,
  },
  {
    id: 9,
    slug: "encumbrance-certificate",
    title: "Encumbrance Certificate",
    category: "Land",
    description: "EC Apply & Download",
    icon: Map,
  },

  // Travel
  {
    id: 10,
    slug: "passport-services",
    detailSlug: "passport",
    title: "Passport Services",
    category: "Travel",
    description: "Fresh & Renewal",
    icon: Plane,
  },

  // Business
  {
    id: 11,
    slug: "gst-registration",
    title: "GST Registration",
    category: "Business",
    description: "New GST Registration",
    icon: Building2,
  },
  {
    id: 12,
    slug: "msme-udyam",
    detailSlug: "msme-registration",
    title: "MSME / UDYAM",
    category: "Business",
    description: "Business Registration",
    icon: Building2,
  },
  {
    id: 13,
    slug: "fssai-registration",
    title: "FSSAI Registration",
    category: "Business",
    description: "Food License",
    icon: Building2,
  },
];
