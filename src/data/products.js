const products = [
  {
    id: 1,
    slug: "digital-blood-pressure-monitor",
    name: "Digital Blood Pressure Monitor",
    category: "Diagnostics",
    subcategory: "Blood Pressure Monitors",
    price: 3500,
    image: "/products/bp-monitor.jpg",
    inStock: true,
    featured: true,
    sku: "ML-DIAG-001",
    shortDescription:
      "Automatic upper arm blood pressure monitor for home and clinical use.",
  },
  {
    id: 2,
    slug: "stethoscope",
    name: "Stethoscope",
    category: "Diagnostics",
    subcategory: "Examination",
    price: 1800,
    image: "/products/stethoscope.jpg",
    inStock: true,
    featured: true,
    sku: "ML-DIAG-002",
    shortDescription:
      "Professional acoustic stethoscope for medical examinations.",
  },
  {
    id: 3,
    slug: "wheelchair",
    name: "Wheelchair",
    category: "Hospital Furniture",
    subcategory: "Mobility",
    price: null,
    image: "/products/wheelchair.jpg",
    inStock: true,
    featured: true,
    sku: "ML-HF-001",
    shortDescription:
      "Durable manual wheelchair suitable for hospitals and home care.",
  },
  {
    id: 4,
    slug: "hospital-bed",
    name: "Hospital Bed",
    category: "Hospital Furniture",
    subcategory: "Beds",
    price: null,
    image: "/products/hospital-bed.jpg",
    inStock: true,
    featured: false,
    sku: "ML-HF-002",
    shortDescription:
      "Adjustable hospital bed designed for patient comfort and clinical care.",
  },
];

export default products;