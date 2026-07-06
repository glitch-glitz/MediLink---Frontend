import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="border-b border-slate-700">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left */}

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-[#005EB8] flex items-center justify-center">
              <Mail size={26} className="text-white" />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-white">
                Subscribe to Our Newsletter
              </h2>

              <p className="text-gray-400 mt-1">
                Get updates on new medical products, offers and healthcare news.
              </p>

            </div>

          </div>

          {/* Right */}

          <form className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-800 border border-slate-600 rounded-lg px-5 py-3 text-white outline-none w-full sm:w-80"
            />

            <button
              type="submit"
              className="bg-[#005EB8] hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Subscribe
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;