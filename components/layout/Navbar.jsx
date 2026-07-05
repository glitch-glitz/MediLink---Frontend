import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-700"
        >
          MediLink
        </Link>

        <div className="flex gap-6 font-medium">

          <Link to="/">Home</Link>

          <Link to="/category/all">
            Shop
          </Link>

          <Link to="/cart">
            Cart
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;