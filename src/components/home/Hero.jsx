import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#005EB8] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* Left Side */}
          <div>

            <span className="bg-cyan-500 px-4 py-2 rounded-full text-sm font-semibold">
              Trusted Medical Supplier
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-8 leading-tight">
              Your Trusted Partner in
              <span className="block text-cyan-300">
                Medical Supplies
              </span>
            </h1>

            <p className="mt-8 text-lg text-blue-100 leading-8">
              Supplying hospitals, clinics, pharmacies and homecare
              providers with quality medical equipment, diagnostics,
              laboratory products and healthcare essentials across Kenya.
            </p>

            <div className="flex gap-4 mt-10">

              <Link
                to="/category/all"
                className="bg-white text-[#005EB8] px-8 py-4 rounded-xl font-semibold"
              >
                Shop Products
              </Link>

              <button className="border border-white px-8 py-4 rounded-xl">
                Request Quote
              </button>

            </div>

            <div className="flex flex-wrap gap-8 mt-12 text-sm">

              <div>✔ Genuine Products</div>

              <div>✔ Fast Delivery</div>

              <div>✔ Professional Support</div>

            </div>

          </div>

          {/* Right Side */}

          <div className="hidden lg:flex justify-center">

            <div className="bg-white/10 rounded-3xl h-[500px] w-full flex items-center justify-center text-8xl">

              🏥

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;