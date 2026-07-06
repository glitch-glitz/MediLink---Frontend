import { useSearchParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductGrid from "../components/product/ProductGrid";
import ProductSearch from "../components/product/ProductSearch";
import products from "../data/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const setSearch = (value) => {
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = products.filter((product) => {
    const term = search.toLowerCase();

    return (
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.subcategory.toLowerCase().includes(term) ||
      (product.brand &&
        product.brand.toLowerCase().includes(term))
    );
  });

  return (
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-10">

          <h1 className="text-5xl font-bold">
            Our Products
          </h1>

          <p className="text-gray-500 mt-3">
            Browse our complete catalog of medical supplies.
          </p>

        </div>

        <ProductSearch
          search={search}
          setSearch={setSearch}
        />

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">
              No products found
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching for another product.
            </p>
          </div>
        )}

      </section>
    </MainLayout>
  );
};

export default Products;