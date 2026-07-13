import { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import ProductCard from "../product/ProductCard";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();

        console.log("✅ Products from API:", data);
        console.log("📦 Number of products:", data.length);

        setProducts(data);
      } catch (error) {
        console.error("❌ Failed to load products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Happy Shopping!
        </h2>

        <p className="text-gray-500 mt-2">
          Browse all our medical products.
        </p>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          Loading products...
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsSection;