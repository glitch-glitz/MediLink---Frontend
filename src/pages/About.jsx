import MainLayout from "../layouts/MainLayout";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";

import CallToAction from "../components/home/CallToAction";

const About = () => {
  return (
    <MainLayout>

      {/* Hero */}
      <section className="bg-[#005EB8] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            About MediLink
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg">
            MediLink Medical Supplies is committed to providing hospitals,
            clinics, laboratories, pharmacies and healthcare professionals
            with genuine, high-quality medical equipment and supplies across
            Kenya.
          </p>

        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Who We Are
            </h2>

           <p className="text-gray-600 leading-8 mb-6">
  MediLink Medical Supplies is a trusted supplier of quality medical
  equipment, hospital furniture, laboratory supplies, diagnostic
  devices, rehabilitation products, personal protective equipment
  (PPE), and healthcare consumables. We proudly serve hospitals,
  clinics, laboratories, pharmacies, NGOs, government institutions,
  and healthcare professionals across Kenya with genuine products,
  competitive pricing, and reliable delivery services.
</p>

<p className="text-gray-600 leading-8 mb-6">
  We are committed to improving healthcare by providing dependable
  medical solutions sourced from reputable manufacturers and trusted
  brands. Our focus on quality, integrity, and exceptional customer
  service ensures that every client receives the right products to
  support better patient care and operational excellence.
</p>

            <p className="text-gray-600 leading-8">
              Our mission is to make healthcare products accessible,
              affordable and reliable by partnering with leading
              manufacturers and delivering exceptional customer service.
            </p>

          </div>

          <div className="bg-slate-100 rounded-2xl p-10">

            <h3 className="text-2xl font-bold mb-6">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8 mb-10">
              To empower healthcare providers with quality medical supplies
              that improve patient care and save lives.
            </p>

            <h3 className="text-2xl font-bold mb-6">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8">
              To become Kenya's most trusted medical supplies partner,
              recognized for quality, reliability and outstanding customer
              service.
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <WhyChooseUs />

      {/* Company Statistics */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>

              <h2 className="text-5xl font-bold text-[#005EB8]">
                500+
              </h2>

              <p className="mt-3 text-gray-600">
                Medical Products
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#005EB8]">
                100+
              </h2>

              <p className="mt-3 text-gray-600">
                Healthcare Clients
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#005EB8]">
                24/7
              </h2>

              <p className="mt-3 text-gray-600">
                Customer Support
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#005EB8]">
                100%
              </h2>

              <p className="mt-3 text-gray-600">
                Genuine Products
              </p>

            </div>

          </div>

        </div>

      </section>

   

      {/* Testimonials */}

      <Testimonials />

      {/* Leave a Review */}

      <section className="max-w-4xl mx-auto px-6 py-20">

        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold">
            Leave a Review
          </h2>

          <p className="text-gray-500 mt-3">
            We'd love to hear about your experience with MediLink Medical
            Supplies.
          </p>

        </div>

        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-700"
          />

          <input
            type="text"
            placeholder="Hospital / Clinic / Organization (Optional)"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-700"
          />

          <select
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-700"
          >
            <option>★★★★★ Excellent</option>
            <option>★★★★☆ Very Good</option>
            <option>★★★☆☆ Good</option>
            <option>★★☆☆☆ Fair</option>
            <option>★☆☆☆☆ Poor</option>
          </select>

          <textarea
            rows="6"
            placeholder="Share your experience..."
            className="w-full border rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-700"
          ></textarea>

          <button
            type="submit"
            className="bg-[#005EB8] text-white px-8 py-3 rounded-xl hover:bg-blue-800 transition"
          >
            Submit Review
          </button>

        </form>

      </section>

      {/* Call To Action */}

      <CallToAction />

    </MainLayout>
  );
};

export default About;