import { useParams, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductGrid from "../components/product/ProductGrid";
import products from "../data/products";
import categories from "../data/categories";

const Category = () => {
  const { slug } = useParams();

  const category = categories.find(
    (cat) => cat.slug === slug
  );

  if (!category) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <h1 className="text-4xl font-bold">
            Category Not Found
          </h1>

          <Link
            to="/products"
            className="inline-block mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Browse Products
          </Link>

        </div>
      </MainLayout>
    );
  }

  const categoryProducts = products.filter(
    (product) => product.category === category.name
  );

  return (
    <MainLayout>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-12">

          <p className="text-blue-700 font-semibold">
            Category
          </p>

          <h1 className="text-5xl font-bold mt-2">
            {category.name}
          </h1>

          <p className="text-gray-500 mt-3">
            {categoryProducts.length} product
            {categoryProducts.length !== 1 && "s"} available
          </p>

        </div>

        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} />
        ) : (
          <div className="bg-slate-50 rounded-2xl p-12 text-center">

            <h2 className="text-2xl font-semibold">
              No products available
            </h2>

            <p className="text-gray-500 mt-3">
              Products for this category will be added soon.
            </p>

          </div>
        )}

      </section>

    </MainLayout>
  );
};

export default Category;