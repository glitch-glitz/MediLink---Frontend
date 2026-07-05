import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#005EB8] rounded-3xl overflow-hidden">
          <div className="px-8 py-16 lg:px-20 lg:py-20 text-center text-white">
            <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
              Ready to Get Started?
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-8 leading-tight">
              Your Trusted Partner for
              <span className="block text-secondary">
                Quality Medical Supplies
              </span>
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg leading-8">
              Whether you're equipping a hospital, clinic, pharmacy,
              laboratory, or healthcare facility, we're here to provide
              dependable products, competitive pricing, and exceptional
              customer support.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
              <Link
                to="/category/all"
                className="inline-flex items-center justify-center gap-2 bg-[#005EB8] text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Shop Products
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition"
              >
                <PhoneCall size={20} />
                Request a Quote
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12 text-blue-100 text-sm">
              <span>✔ Genuine Medical Products</span>
              <span>✔ Nationwide Delivery</span>
              <span>✔ Expert Customer Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;