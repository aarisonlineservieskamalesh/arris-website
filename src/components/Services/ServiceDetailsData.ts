export type LocalizedText = {
  ta: string;
  en: string;
};

export type ServiceDetails = {
  title: LocalizedText;
  documents: {
    ta: string[];
    en: string[];
  };
  uses: {
    ta: string[];
    en: string[];
  };
};

export const serviceDetails: Record<string, ServiceDetails> = {
  "community-certificate": {
    title: {
      ta: "சமூகச் சான்றிதழ்",
      en: "Community Certificate",
    },
    documents: {
      ta: [
        "ஆதார் அட்டை",
        "புகைப்படம்",
        "கையொப்பம்",
        "பழைய சமூகச் சான்றிதழ் / தந்தை அல்லது தாய் சமூகச் சான்றிதழ்",
      ],
      en: [
        "Aadhaar Card",
        "Passport Size Photo",
        "Signature",
        "Old Community Certificate / Father or Mother Community Certificate",
      ],
    },
    uses: {
      ta: [
        "பள்ளி / கல்லூரி சேர்க்கை",
        "Scholarship விண்ணப்பம்",
        "அரசு வேலை விண்ணப்பம்",
        "இடஒதுக்கீடு (Reservation) பெற",
        "அரசு நலத்திட்டங்கள்",
      ],
      en: [
        "School & College Admission",
        "Scholarship Application",
        "Government Job Application",
        "Reservation Benefits",
        "Government Welfare Schemes",
      ],
    },
  },
  "voter-id": {
    title: {
      ta: "வாக்காளர் அடையாள அட்டை",
      en: "Voter ID",
    },
    documents: {
      ta: ["ஆதார் அட்டை", "பாஸ்போர்ட் சைஸ் புகைப்படம்"],
      en: ["Aadhaar Card", "Passport Size Photo"],
    },
    uses: {
      ta: [
        "புதிய Voter ID விண்ணப்பம்",
        "பெயர் / முகவரி திருத்தம்",
        "DOB திருத்தம்",
        "வாக்காளர் பட்டியலில் பெயர் சேர்த்தல்",
        "அடையாள ஆவணம்",
        "முகவரி மாற்றம்",
      ],
      en: [
        "New Voter ID Application",
        "Name / Address Correction",
        "DOB Correction",
        "Add Name in Electoral Roll",
        "Identity Proof",
        "Address Change",
      ],
    },
  },
  "aadhaar-address-change": {
    title: {
      ta: "ஆதார் முகவரி மாற்றம்",
      en: "Aadhaar Address Change",
    },
    documents: {
      ta: [
        "ஆதார் அட்டை",
        "ஆதாருடன் இணைக்கப்பட்ட மொபைல் எண்",
        "முகவரி சான்று (ரேஷன் கார்டு / EB Bill / Bank Passbook / Rental Agreement / Passport / Voter ID / Driving Licence)",
        "அல்லது அதே முகவரியுள்ள குடும்ப உறுப்பினர் ஆதார்",
      ],
      en: [
        "Aadhaar Card",
        "Aadhaar Linked Mobile Number",
        "Address Proof (Any One)",
        "OR Family Member Aadhaar Card (Same Address)",
      ],
    },
    uses: {
      ta: [
        "ஆதார் முகவரி புதுப்பித்தல்",
        "வங்கி / PAN / SIM KYC",
        "அரசு சேவைகள்",
        "ஆன்லைன் Verification",
        "அரசு நலத்திட்டங்கள்",
      ],
      en: [
        "Aadhaar Address Update",
        "Bank / PAN / SIM KYC",
        "Government Services",
        "Online Verification",
        "Welfare Scheme Benefits",
      ],
    },
  },
  "farmer-certificate": {
    title: {
      ta: "விவசாயி சான்றிதழ்",
      en: "Farmer Certificate",
    },
    documents: {
      ta: [
        "ஆதார் அட்டை",
        "ரேஷன் கார்டு",
        "பட்டா / சிட்டா",
        "பாஸ்போர்ட் சைஸ் புகைப்படம்",
        "கையொப்பம்",
      ],
      en: [
        "Aadhaar Card",
        "Ration Card",
        "Patta / Chitta Copy",
        "Passport Size Photo",
        "Signature",
      ],
    },
    uses: {
      ta: [
        "புதிய விவசாயி சான்றிதழ்",
        "அரசு விவசாய நலத்திட்டங்கள்",
        "Subsidy",
        "விவசாய கடன்",
        "அதிகாரப்பூர்வ விவசாயி அடையாளம்",
      ],
      en: [
        "New Farmer Certificate",
        "Farmer Welfare Schemes",
        "Subsidy Benefits",
        "Agricultural Loan",
        "Official Farmer Identity",
      ],
    },
  },
  "unemployment-certificate": {
    title: {
      ta: "வேலையாய்ப்பு இல்லாமைச் சான்றிதழ்",
      en: "Unemployment Certificate",
    },
    documents: {
      ta: [
        "ஆதார் அட்டை",
        "ரேஷன் கார்டு",
        "பாஸ்போர்ட் சைஸ் புகைப்படம்",
        "கையொப்பம்",
        "கல்வி சான்றிதழ்",
      ],
      en: [
        "Aadhaar Card",
        "Ration Card",
        "Passport Size Photo",
        "Signature",
        "Educational Certificate",
      ],
    },
    uses: {
      ta: [
        "அரசு வேலை விண்ணப்பம்",
        "அரசு நலத்திட்டங்கள்",
        "வேலைவாய்ப்பு ஆதாரம்",
        "கல்வி தொடர்பான பயன்பாடு",
        "அதிகாரப்பூர்வ சான்று",
      ],
      en: [
        "Government Job Application",
        "Government Schemes",
        "Employment Proof",
        "Education Purpose",
        "Official Certificate",
      ],
    },
  },
  "obc-certificate": {
    title: {
      ta: "OBC சான்றிதழ்",
      en: "OBC Certificate",
    },
    documents: {
      ta: [
        "ஆதார் அட்டை",
        "ரேஷன் கார்டு",
        "புகைப்படம்",
        "கையொப்பம்",
        "சமூகச் சான்றிதழ்",
        "வருமானச் சான்றிதழ்",
      ],
      en: [
        "Aadhaar Card",
        "Ration Card",
        "Passport Size Photo",
        "Signature",
        "Community Certificate",
        "Income Certificate",
      ],
    },
    uses: {
      ta: [
        "கல்வி சேர்க்கை",
        "Scholarship",
        "அரசு வேலை",
        "அரசு நலத்திட்டங்கள்",
        "இடஒதுக்கீடு",
      ],
      en: [
        "Education Admission",
        "Scholarship",
        "Government Jobs",
        "Welfare Schemes",
        "Reservation Benefits",
      ],
    },
  },
  "fssai-registration": {
    title: {
      ta: "FSSAI பதிவு / உணவு உரிமம்",
      en: "FSSAI Registration / Food License",
    },
    documents: {
      ta: ["ஆதார் அட்டை", "புகைப்படம்", "மொபைல் எண்", "கடை முகவரி"],
      en: ["Aadhaar Card", "Passport Size Photo", "Mobile Number", "Shop Address"],
    },
    uses: {
      ta: [
        "Food License",
        "உணவு தொழில் அங்கீகாரம்",
        "Business Registration",
        "Online Food Delivery",
        "தொழில் நம்பகத்தன்மை",
      ],
      en: [
        "Food License",
        "Food Business Approval",
        "Business Registration",
        "Online Food Delivery",
        "Business Credibility",
      ],
    },
  },
  "msme-registration": {
    title: {
      ta: "MSME / உத்யம் பதிவு",
      en: "MSME / Udyam Registration",
    },
    documents: {
      ta: ["ஆதார் அட்டை", "PAN கார்டு", "கடை முகவரி", "தொழில் / கடை பெயர்"],
      en: ["Aadhaar Card", "PAN Card", "Shop Address", "Business Name"],
    },
    uses: {
      ta: [
        "MSME பதிவு",
        "வங்கி கடன்",
        "அரசு சலுகைகள்",
        "Tender வாய்ப்புகள்",
        "தொழில் நம்பகத்தன்மை",
      ],
      en: [
        "MSME Registration",
        "Business Loan",
        "Government Benefits",
        "Tender Eligibility",
        "Business Credibility",
      ],
    },
  },
  "legal-heir-certificate": {
    title: {
      ta: "வாரிசுச் சான்றிதழ்",
      en: "Legal Heir Certificate",
    },
    documents: {
      ta: [
        "குடும்ப உறுப்பினர்களின் ஆதார்",
        "புகைப்படம்",
        "கையொப்பம்",
        "இறப்பு சான்றிதழ்",
        "ரேஷன் கார்டு",
      ],
      en: [
        "Aadhaar Card (All Family Members)",
        "Passport Size Photo",
        "Signature",
        "Death Certificate",
        "Ration Card",
      ],
    },
    uses: {
      ta: [
        "சொத்து பெயர் மாற்றம்",
        "வங்கி தொகை பெற",
        "Pension",
        "EB / Patta பெயர் மாற்றம்",
        "சட்ட வாரிசு சான்று",
      ],
      en: [
        "Property Transfer",
        "Bank Claim",
        "Pension Benefits",
        "EB / Patta Transfer",
        "Legal Heir Proof",
      ],
    },
  },
  "driving-licence": {
    title: {
      ta: "ஓட்டுநர் உரிமம்",
      en: "Driving Licence",
    },
    documents: {
      ta: [
        "புதிய விண்ணப்பம்: ஆதார் அட்டை",
        "புதிய விண்ணப்பம்: மொபைல் எண்",
        "ரினியூவல்: ஆதார் அட்டை",
        "ரினியூவல்: மொபைல் எண்",
        "ரினியூவல்: பழைய டிரைவிங் லைசன்ஸ்",
      ],
      en: [
        "New: Aadhaar Card",
        "New: Mobile Number",
        "Renewal: Aadhaar Card",
        "Renewal: Mobile Number",
        "Renewal: Old Driving Licence",
      ],
    },
    uses: {
      ta: [
        "புதிய Licence",
        "Renewal",
        "முகவரி மாற்றம்",
        "அடையாள ஆவணம்",
        "சட்டபூர்வமாக வாகனம் ஓட்ட",
      ],
      en: [
        "New Driving Licence",
        "Licence Renewal",
        "Address Update",
        "Identity Proof",
        "Legal Driving Authorization",
      ],
    },
  },
  passport: {
    title: {
      ta: "பாஸ்போர்ட்",
      en: "Passport",
    },
    documents: {
      ta: [
        "புதிய விண்ணப்பம்: ஆதார் அட்டை",
        "புதிய விண்ணப்பம்: பிறப்பு சான்றிதழ் / 10ஆம் வகுப்பு சான்றிதழ்",
        "புதிய விண்ணப்பம்: மொபைல் எண்",
        "புதிய விண்ணப்பம்: Email ID",
        "ரினியூவல்: பழைய பாஸ்போர்ட்",
        "50 வயதுக்கு மேல்: ஆதார் அட்டை",
        "50 வயதுக்கு மேல்: PAN கார்டு",
      ],
      en: [
        "New Application: Aadhaar Card",
        "New Application: Birth Certificate / 10th Marksheet",
        "New Application: Mobile Number",
        "New Application: Email ID",
        "Renewal: Old Passport (Original)",
        "50+ Years: Aadhaar Card",
        "50+ Years: PAN Card",
      ],
    },
    uses: {
      ta: [
        "வெளிநாட்டு பயணம்",
        "வேலைவாய்ப்பு Visa",
        "சுற்றுலா",
        "வெளிநாட்டு கல்வி",
        "அடையாள ஆவணம்",
        "Passport Renewal",
      ],
      en: [
        "International Travel",
        "Employment Visa",
        "Tourism",
        "Overseas Education",
        "Identity Proof",
        "Passport Renewal / Reissue",
      ],
    },
  },
};
