import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#005EB8] text-white rounded-3xl px-8 py-16 lg:px-20 text-center text-white">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-8">
            <Mail size={38} className="text-secondary" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold">
            Stay Updated
          </h2>

          <p className="mt-6 text-blue-100 max-w-2xl mx-auto leading-8 text-lg">
            Subscribe to receive updates on new medical products,
            special offers, healthcare solutions, and industry news
            delivered straight to your inbox.
          </p>

          {/* Newsletter Form */}
          <form className="mt-10 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 text-gray-700 outline-none"
              />

              <button
                type="submit"
                className="bg-secondary px-8 py-4 font-semibold hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </div>
          </form>

          {/* Small Text */}
          <p className="mt-6 text-sm text-blue-100">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;