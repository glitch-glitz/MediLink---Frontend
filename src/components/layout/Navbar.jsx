import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ShoppingCart,
  Search,
} from "lucide-react";

import { useCart } from "../../store/CartContext";
import logo from "../../assets/images/logos/brands/medilinklogo.png";

const Navbar = () => {
  const { cart } = useCart();

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search)}`);
    } else {
      navigate("/products");
    }
  };
const { totalItems } = useCart();
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

          <Link to="/about">
  About
</Link>

         <Link to="/contact">
  Contact
</Link>

        </div>

        {/* Search */}
        <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 w-80">

         <button
  onClick={handleSearch}
  className="text-gray-400 hover:text-[#005EB8] transition"
>
  <Search size={18} />
</button>

          <input
            type="text"
            placeholder="Search products..."
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

      </div>

    </nav>
  );
};

export default Navbar;