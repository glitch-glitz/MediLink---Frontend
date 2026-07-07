import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <MainLayout>
      <section className="min-h-[70vh] flex items-center justify-center px-6">

        <div className="text-center max-w-2xl">

          <AlertCircle
            size={80}
            className="mx-auto text-[#005EB8]"
          />

          <h1 className="text-7xl font-bold mt-6 text-[#005EB8]">
            404
          </h1>

          <h2 className="text-3xl font-bold mt-4">
            Page Not Found
          </h2>

          <p className="text-gray-500 mt-6 leading-8">
            Sorry, the page you're looking for doesn't exist or may have
            been moved.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/"
              className="bg-[#005EB8] text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Back Home
            </Link>

            <Link
              to="/products"
              className="border border-[#005EB8] text-[#005EB8] px-8 py-3 rounded-xl hover:bg-blue-50 transition"
            >
              Browse Products
            </Link>

          </div>

        </div>

      </section>
    </MainLayout>
  );
};

export default NotFound;