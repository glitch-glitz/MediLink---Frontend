const products = [
  {
    id: 1,
    slug: "digital-blood-pressure-monitor",
    name: "Digital Blood Pressure Monitor",

    category: "Diagnostics",
    subcategory: "Blood Pressure Monitors",

    brand: "Omron",
    sku: "ML-DIAG-001",

    price: 3500,

    image: "/products/bp-monitor.jpg",

    images: [
      "/products/bp-monitor.jpg",
      "/products/bp-monitor-side.jpg",
      "/products/bp-monitor-box.jpg",
    ],

    inStock: true,
    featured: true,

    shortDescription:
      "Automatic upper arm blood pressure monitor for home and clinical use.",

    description:
      "A clinically accurate automatic blood pressure monitor suitable for hospitals, clinics, pharmacies and home healthcare. Features one-touch operation, irregular heartbeat detection and memory storage.",

    specifications: [
      "Automatic inflation",
      "LCD display",
      "Stores up to 90 readings",
      "Adult cuff included",
      "2-year warranty",
    ],
  },

  {
    id: 2,
    slug: "stethoscope",
    name: "Stethoscope",

    category: "Diagnostics",
    subcategory: "Examination",

    brand: "3M Littmann",
    sku: "ML-DIAG-002",

    price: 1800,

    image: "/products/stethoscope.jpg",

    images: [
      "/products/stethoscope.jpg",
    ],

    inStock: true,
    featured: true,

    shortDescription:
      "Professional acoustic stethoscope for medical examinations.",

    description:
      "High-quality dual-head stethoscope providing exceptional acoustic performance for physicians, nurses and healthcare professionals.",

    specifications: [
      "Dual-head chest piece",
      "Soft ear tips",
      "Excellent acoustic sensitivity",
      "Latex free",
    ],
  },

  {
    id: 3,
    slug: "wheelchair",
    name: "Wheelchair",

    category: "Hospital Furniture",
    subcategory: "Mobility",

    brand: "MediLink",
    sku: "ML-HF-001",

    price: null,

    image: "/products/wheelchair.jpg",

    images: [
      "/products/wheelchair.jpg",
    ],

    inStock: true,
    featured: true,

    shortDescription:
      "Durable manual wheelchair suitable for hospitals and home care.",

    description:
      "Lightweight folding wheelchair with comfortable seating, strong steel frame and reliable braking system.",

    specifications: [
      "Foldable frame",
      "Steel construction",
      "24-inch rear wheels",
      "Weight capacity 120kg",
    ],
  },

  {
    id: 4,
    slug: "hospital-bed",
    name: "Hospital Bed",

    category: "Hospital Furniture",
    subcategory: "Beds",

    brand: "MediLink",
    sku: "ML-HF-002",

    price: null,

    image: "/products/hospital-bed.jpg",

    images: [
      "/products/hospital-bed.jpg",
    ],

    inStock: true,
    featured: false,

    shortDescription:
      "Adjustable hospital bed designed for patient comfort and clinical care.",

    description:
      "Manual adjustable hospital bed with durable steel construction, side rails and easy crank adjustment for patient positioning.",

    specifications: [
      "Adjustable backrest",
      "Steel frame",
      "Side rails included",
      "Mattress optional",
    ],
  },
  {
  id: 5,
  slug: "infrared-thermometer",
  name: "Infrared Thermometer",

  category: "Diagnostics",
  subcategory: "Thermometers",

  brand: "Omron",
  sku: "ML-DIAG-003",

  price: 2500,

  image: "/products/infrared-thermometer.jpg",

  images: [
    "/products/infrared-thermometer.jpg",
  ],

  inStock: true,
  featured: true,

  shortDescription:
    "Non-contact infrared thermometer for fast temperature measurement.",

  description:
    "Provides accurate, contactless temperature readings within seconds, suitable for hospitals, clinics and home use.",

  specifications: [
    "Non-contact",
    "LCD display",
    "Fever alarm",
    "Memory function",
  ],
},

{
  id: 6,
  slug: "pulse-oximeter",
  name: "Pulse Oximeter",

  category: "Diagnostics",
  subcategory: "Monitoring",

  brand: "ChoiceMMed",
  sku: "ML-DIAG-004",

  price: 2200,

  image: "/products/pulse-oximeter.jpg",

  images: [
    "/products/pulse-oximeter.jpg",
  ],

  inStock: true,
  featured: true,

  shortDescription:
    "Finger pulse oximeter for measuring oxygen saturation and pulse rate.",

  description:
    "Portable pulse oximeter with bright OLED display, ideal for hospitals, clinics and home monitoring.",

  specifications: [
    "OLED screen",
    "SpO2 monitoring",
    "Pulse rate display",
    "Auto power off",
  ],
},

{
  id: 7,
  slug: "glucometer-kit",
  name: "Glucometer Kit",

  category: "Diagnostics",
  subcategory: "Diabetes Care",

  brand: "Accu-Chek",
  sku: "ML-DIAG-005",

  price: 3200,

  image: "/products/glucometer.jpg",

  images: [
    "/products/glucometer.jpg",
  ],

  inStock: true,
  featured: false,

  shortDescription:
    "Complete blood glucose monitoring kit.",

  description:
    "Easy-to-use glucometer supplied with lancets, strips and carrying case for accurate blood sugar monitoring.",

  specifications: [
    "Fast results",
    "Test strips included",
    "Memory storage",
    "Carrying case",
  ],
},

{
  id: 8,
  slug: "examination-couch",
  name: "Examination Couch",

  category: "Hospital Furniture",
  subcategory: "Examination Beds",

  brand: "MediLink",
  sku: "ML-HF-003",

  price: null,

  image: "/products/examination-couch.jpg",

  images: [
    "/products/examination-couch.jpg",
  ],

  inStock: true,
  featured: false,

  shortDescription:
    "Comfortable examination couch for clinics and hospitals.",

  description:
    "Heavy-duty examination couch with padded mattress and strong steel frame for daily clinical use.",

  specifications: [
    "Steel frame",
    "Foam mattress",
    "Easy to clean",
    "150kg capacity",
  ],
},

{
  id: 9,
  slug: "oxygen-cylinder",
  name: "Medical Oxygen Cylinder",

  category: "Hospital Equipment",
  subcategory: "Oxygen Therapy",

  brand: "MediLink",
  sku: "ML-HE-001",

  price: null,

  image: "/products/oxygen-cylinder.jpg",

  images: [
    "/products/oxygen-cylinder.jpg",
  ],

  inStock: true,
  featured: true,

  shortDescription:
    "Medical oxygen cylinder for hospitals and emergency response.",

  description:
    "High-quality refillable oxygen cylinder designed for safe oxygen therapy in healthcare facilities.",

  specifications: [
    "Steel construction",
    "Refillable",
    "Pressure tested",
    "Available in multiple sizes",
  ],
},

{
  id: 10,
  slug: "surgical-gloves",
  name: "Sterile Surgical Gloves",

  category: "PPE",
  subcategory: "Gloves",

  brand: "Top Glove",
  sku: "ML-PPE-001",

  price: 1800,

  image: "/products/surgical-gloves.jpg",

  images: [
    "/products/surgical-gloves.jpg",
  ],

  inStock: true,
  featured: false,

  shortDescription:
    "Sterile latex surgical gloves for medical procedures.",

  description:
    "Powder-free sterile surgical gloves providing comfort, flexibility and excellent protection.",

  specifications: [
    "Latex",
    "Sterile",
    "Powder free",
    "Box of 100",
  ],
},

{
  id: 11,
  slug: "face-mask",
  name: "3-Ply Surgical Face Mask",

  category: "PPE",
  subcategory: "Masks",

  brand: "MediLink",
  sku: "ML-PPE-002",

  price: 600,

  image: "/products/face-mask.jpg",

  images: [
    "/products/face-mask.jpg",
  ],

  inStock: true,
  featured: false,

  shortDescription:
    "Disposable 3-ply surgical face masks.",

  description:
    "Comfortable disposable surgical masks offering high filtration efficiency for healthcare environments.",

  specifications: [
    "3-layer protection",
    "Disposable",
    "Elastic ear loops",
    "Box of 50",
  ],
},

{
  id: 12,
  slug: "crutches",
  name: "Aluminium Crutches",

  category: "Rehabilitation",
  subcategory: "Mobility Aids",

  brand: "MediLink",
  sku: "ML-REH-001",

  price: 4500,

  image: "/products/crutches.jpg",

  images: [
    "/products/crutches.jpg",
  ],

  inStock: true,
  featured: false,

  shortDescription:
    "Height-adjustable aluminium crutches.",

  description:
    "Lightweight walking crutches with comfortable hand grips and anti-slip rubber tips.",

  specifications: [
    "Height adjustable",
    "Aluminium frame",
    "Rubber tips",
    "Lightweight",
  ],
},
];

export default products;