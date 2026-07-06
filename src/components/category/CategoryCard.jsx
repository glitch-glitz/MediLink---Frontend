import { Link } from "react-router-dom";

const CategoryCard = ({ title, total, slug }) => {
  return (
    <Link to={`/category/${slug}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 p-6 cursor-pointer border border-gray-100">

        <div className="text-4xl mb-4">🩺</div>

        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          {total} Products
        </p>

      </div>
    </Link>
  );
};

export default CategoryCard;