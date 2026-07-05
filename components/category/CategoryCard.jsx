const CategoryCard = ({ title, total }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-6 cursor-pointer border border-gray-100">

      <div className="text-4xl mb-4">🩺</div>

      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-gray-500 mt-2">
        {total} Products
      </p>

    </div>
  );
};

export default CategoryCard;