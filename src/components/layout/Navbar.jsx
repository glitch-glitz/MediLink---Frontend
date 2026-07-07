import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
} from "lucide-react";

import { useCart } from "../../store/CartContext";
import logo from "../../assets/images/logos/brands/medilinklogo.png";

const Navbar = () => {
  const { totalItems } = useCart();

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search)}`);
    } else {
      navigate("/products");
    }

    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="MediLink Medical Supplies"
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex gap-8 font-medium">

          <Link
            to="/"
            className="hover:text-[#005EB8] transition"
          >
            Home
          </Link>

          <Link
            to="/category/all"
            className="hover:text-[#005EB8] transition"
          >
            Categories
          </Link>

          <Link
            to="/products"
            className="hover:text-[#005EB8] transition"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="hover:text-[#005EB8] transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#005EB8] transition"
          >
            Contact
          </Link>

        </div>

        {/* Desktop Search */}

        <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 w-80">

          <button
            onClick={handleSearch}
            className="text-gray-400 hover:text-[#005EB8]"
          >
            <Search size={18} />
          </button>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="bg-transparent outline-none px-3 w-full"
          />

        </div>

        {/* Right Side */}

        <div className="relative flex items-center gap-4">

          {/* Cart */}

          <Link
            to="/cart"
            className="relative"
          >
            <ShoppingCart
              size={28}
              className="text-[#005EB8]"
            />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>

          </Link>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          {/* Floating Mobile Menu */}

          <div
            className={`absolute right-0 top-14
            w-48
            bg-white
            rounded-xl
            shadow-xl
            border
            transition-all
            duration-200
            origin-top-right
            ${
              mobileMenuOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }
            lg:hidden`}
          >

            <div className="p-3">

              <div className="flex flex-col gap-1 text-sm">

                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#005EB8]"
                >
                  Home
                </Link>

                <Link
                  to="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#005EB8]"
                >
                  Products
                </Link>

                <Link
                  to="/category/all"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#005EB8]"
                >
                  Categories
                </Link>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#005EB8]"
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-[#005EB8]"
                >
                  Contact
                </Link>

              </div>

              <div className="border-t my-3"></div>

              <div className="flex items-center bg-slate-100 rounded-full px-3 py-2">

                <button
                  onClick={handleSearch}
                  className="text-gray-400"
                >
                  <Search size={16} />
                </button>

                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  className="bg-transparent outline-none px-2 text-sm w-full"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;