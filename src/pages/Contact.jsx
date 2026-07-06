import MainLayout from "../layouts/MainLayout";
import CallToAction from "../components/home/CallToAction";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <MainLayout>

      {/* Hero */}

      <section className="bg-[#005EB8] text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-blue-100">
            We'd love to hear from you. Whether you need a quotation,
            product information or support, our team is ready to help.
          </p>

        </div>

      </section>

      {/* Contact Cards */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white shadow rounded-xl p-6 text-center">

            <Phone className="mx-auto text-[#005EB8]" size={40} />

            <h3 className="font-bold text-xl mt-4">
              Phone
            </h3>

            <p className="text-gray-500 mt-2">
              +254 700 000 000
            </p>

          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">

            <Mail className="mx-auto text-[#005EB8]" size={40} />

            <h3 className="font-bold text-xl mt-4">
              Email
            </h3>

            <p className="text-gray-500 mt-2">
              info@medilink.co.ke
            </p>

          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">

            <MapPin className="mx-auto text-[#005EB8]" size={40} />

            <h3 className="font-bold text-xl mt-4">
              Location
            </h3>

            <p className="text-gray-500 mt-2">
              Nairobi, Kenya
            </p>

          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">

            <MessageCircle
              className="mx-auto text-green-600"
              size={40}
            />

            <h3 className="font-bold text-xl mt-4">
              WhatsApp
            </h3>

            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 mt-2 block"
            >
              Chat with us
            </a>

          </div>

        </div>

      </section>

      {/* Contact Form */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid lg:grid-cols-2 gap-16">

          <div>

            <h2 className="text-4xl font-bold">
              Send Us a Message
            </h2>

            <p className="text-gray-500 mt-4">
              Complete the form below and we'll get back to you as
              soon as possible.
            </p>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border rounded-xl px-4 py-3 resize-none"
              ></textarea>

              <button
                className="bg-[#005EB8] text-white px-8 py-3 rounded-xl hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Business Hours */}

          <div className="bg-slate-100 rounded-2xl p-10">

            <Clock
              size={40}
              className="text-[#005EB8]"
            />

            <h2 className="text-3xl font-bold mt-6">
              Business Hours
            </h2>

            <div className="mt-8 space-y-4">

              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>

            </div>

            {/* Map Placeholder */}

            <div className="mt-10 h-64 bg-gray-300 rounded-xl flex items-center justify-center">

              <p className="text-gray-600">
                Google Map goes here
              </p>

            </div>

          </div>

        </div>

      </section>

      <CallToAction />

    </MainLayout>
  );
};

export default Contact;