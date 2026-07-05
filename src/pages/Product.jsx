import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import products from "../data/products";

const Product = () => {
  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto py-20">
          <h1 className="text-3xl font-bold">
            Product not found
          </h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold">
          {product.name}
        </h1>

        <p className="text-cyan-600 mt-2">
          {product.category}
        </p>

      </div>

    </MainLayout>
  );
};

export default Product;