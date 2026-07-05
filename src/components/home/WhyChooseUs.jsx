import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Headset,
  Boxes,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Quality Assured Products",
    description:
      "We supply genuine, high-quality medical equipment and healthcare products sourced from trusted manufacturers.",
  },
  {
    icon: <Truck size={40} />,
    title: "Fast & Reliable Delivery",
    description:
      "Prompt delivery across Kenya, ensuring hospitals, clinics, and healthcare providers receive supplies when needed.",
  },
  {
    icon: <BadgeCheck size={40} />,
    title: "Certified Medical Supplies",
    description:
      "Our products meet industry standards, giving healthcare professionals confidence in every purchase.",
  },
  {
    icon: <Headset size={40} />,
    title: "Dedicated Customer Support",
    description:
      "Our knowledgeable team is always available to help with product selection, quotations, and after-sales support.",
  },
  {
    icon: <Boxes size={40} />,
    title: "Wide Product Range",
    description:
      "From diagnostics and laboratory equipment to PPE, hospital furniture, and rehabilitation products—all under one roof.",
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "Trusted Healthcare Partner",
    description:
      "We build lasting relationships by delivering dependable products, competitive pricing, and exceptional service.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-secondary font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Reliable Healthcare Solutions You Can Trust
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            We are committed to supplying high-quality medical equipment,
            laboratory products, diagnostics, PPE, and healthcare essentials
            with professionalism, reliability, and exceptional customer service.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="bg-[#005EB8] text-white  mb-6">{feature.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;