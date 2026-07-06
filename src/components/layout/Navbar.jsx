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

        <Link
          to="/"
          className="flex items-center"
        >
          <img
            src={logo}
            alt="MediLink Medical Supplies"
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex gap-8 font-medium">

          <Link to="/">Home</Link>

          <Link to="/category/all">
            Categories
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
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

        <div className="flex items-center gap-4 relative">

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
            className="lg:hidden"
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

          {/* Small Dropdown Menu */}

          {mobileMenuOpen && (

            <div className="absolute right-0 top-14 w-72 bg-white rounded-xl shadow-xl border p-5 lg:hidden">

              <div className="flex flex-col gap-4">

                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/products"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>

                <Link
                  to="/category/all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Categories
                </Link>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="border-t pt-4">

                  <div className="flex items-center bg-slate-100 rounded-full px-4 py-2">

                    <button
                      onClick={handleSearch}
                      className="text-gray-400"
                    >
                      <Search size={18} />
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
                      className="bg-transparent outline-none px-3 w-full"
                    />

                  </div>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;