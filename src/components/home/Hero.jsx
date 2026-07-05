import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="bg-[#005EB8] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* LEFT SIDE */}
          <div>

            <span className="bg-secondary/20 text-white px-4 py-1 rounded-full text-sm">
              Trusted Medical Supplier
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              Your Trusted Partner in
              <span className="block text-secondary">
                Medical Supplies
              </span>
            </h1>

            <p className="mt-6 text-blue-100">
              High-quality medical equipment, hospital furniture,
              diagnostics, PPE, and laboratory supplies across Kenya.
            </p>

            {/* SEARCH BAR */}
            <div className="mt-8 flex bg-white rounded-xl overflow-hidden max-w-xl">

              <input
                type="text"
                placeholder="Search medical products..."
                className="w-full px-4 py-3 text-gray-700 outline-none"
              />

              <button className="bg-secondary px-5 flex items-center justify-center">
                <Search size={20} />
              </button>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-6">

              <Link
                to="/category/all"
                className="bg-white text-[#005EB8] px-6 py-3 rounded-xl font-semibold"
              >
                Shop Products
              </Link>

              <button className="border border-white px-6 py-3 rounded-xl">
                Request Quote
              </button>

            </div>

            {/* FEATURES */}
            <div className="flex gap-6 mt-8 text-sm text-blue-100">
              <span>✔ Genuine Products</span>
              <span>✔ Fast Delivery</span>
              <span>✔ Support</span>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <HeroImage />

        </div>

      </div>
    </section>
  );
};

export default Hero;