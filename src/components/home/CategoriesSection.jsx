import products from "../../data/products";
import ProductCard from "../product/ProductCard";

const ProductsSection = () => {
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

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;