import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Nairobi Medical Centre",
    role: "Hospital Procurement Team",
    review:
      "The quality of the medical equipment and the professionalism of the team exceeded our expectations. Delivery was prompt and the entire purchasing process was seamless.",
  },
  {
    name: "CarePlus Pharmacy",
    role: "Retail Pharmacy",
    review:
      "We've been sourcing PPE and diagnostic supplies from them for months. Their products are genuine, competitively priced, and always delivered on time.",
  },
  {
    name: "Hope Diagnostic Laboratory",
    role: "Laboratory Manager",
    review:
      "Excellent customer support and a wide range of laboratory products. They are our preferred supplier because of their consistency and reliability.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-6">
            What Our Customers Say
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            We're proud to serve hospitals, clinics, pharmacies, laboratories,
            and healthcare professionals across Kenya with quality medical
            supplies and dependable service.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 text-secondary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-7 italic">
                "{testimonial.review}"
              </p>

              {/* Customer */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;