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
];

export default products;