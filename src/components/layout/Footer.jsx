import { Link } from "react-router-dom";
import Brands from "../home/Brands";
import Newsletter from "../home/Newsletter";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">

      {/* Brands */}
      <Brands />

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h3 className="text-2xl font-bold">
              MediLink
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Your trusted supplier of quality medical equipment,
              diagnostics, hospital furniture, laboratory supplies,
              PPE and healthcare consumables across Kenya.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/products">Products</Link></li>

              <li><Link to="/category/all">Categories</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="font-semibold text-lg mb-4">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Diagnostics</li>

              <li>Hospital Furniture</li>

              <li>Laboratory</li>

              <li>PPE</li>

              <li>Medical Consumables</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Nairobi, Kenya</p>

              <p>+254 700 000 000</p>

              <p>info@medilink.co.ke</p>

            </div>
            
      

          </div>

        </div>

      </div>

      {/* Bottom */}
<Newsletter/> 
      <div className="border-t border-slate-700 py-6">

        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} MediLink Medical Supplies. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;