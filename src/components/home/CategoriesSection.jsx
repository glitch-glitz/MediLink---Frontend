import categories from "../../data/categories";
import CategoryCard from "../category/CategoryCard";

const CategoriesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Shop by Category
        </h2>

        <p className="text-gray-500 mt-2">
          Browse our medical products by category.
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
  key={category.id}
  title={category.title}
  total={category.total}
  slug={category.slug}
/>
        ))}
      </div>

    </section>
  );
};

export default CategoriesSection;