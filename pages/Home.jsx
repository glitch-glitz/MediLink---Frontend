import MainLayout from "../layouts/MainLayout";
import categories from "../data/categories";
import CategoryCard from "../components/category/CategoryCard";

const Home = () => {
  return (
    <MainLayout>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Your Trusted Partner in
            <br />
            Medical Supplies
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-2xl text-blue-100">
            Supplying quality medical equipment, hospital furniture,
            laboratory products, diagnostics, PPE, and healthcare
            essentials across Kenya.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold">
              Shop Products
            </button>

            <button className="border border-white px-8 py-3 rounded-lg font-semibold">
              Request a Quote
            </button>
          </div>

        </div>
      </section>

      {/* Categories */}
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
            />
          ))}
        </div>

      </section>

    </MainLayout>
  );
};

export default Home;