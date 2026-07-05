import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  HeartPulse,
} from "lucide-react";


import logo from "../../assets/images/logos/brands/medilinklogo.png";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

       {/* Logo */}
<Link
  to="/"
  className="flex items-center gap-3"
>
  <img
    src={logo}
    alt="MediLink Medical Supplies"
    className="h-20 w-auto"
  />

  {/* <div>
    <h1 className="text-2xl font-bold text-[#005EB8] leading-none">
      MediLink
    </h1>

    <p className="text-xs text-gray-500">
      Medical Supplies
    </p>
  </div> */}
</Link>

        {/* Navigation */}

        <div className="hidden lg:flex gap-8 font-medium">

          <Link to="/">Home</Link>

          <Link to="/category/all">
            Categories
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="#">
            About
          </Link>

          <Link to="#">
            Contact
          </Link>

        </div>

        {/* Search */}

        <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 w-80">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none px-3 w-full"
          />

        </div>

        {/* Cart */}

        <button className="relative">

          <ShoppingCart
            size={28}
            className="text-[#005EB8]"
          />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
          </span>

        </button>

      </div>

    </nav>
  );
};

export default Navbar;