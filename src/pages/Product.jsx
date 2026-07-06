import toast from "react-hot-toast";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";import MainLayout from "../layouts/MainLayout";
import products from "../data/products";
import { ShoppingCart, MessageCircle, CheckCircle } from "lucide-react";
import { useCart } from "../store/CartContext";
import ProductGrid from "../components/product/ProductGrid";


const Product = () => {
  const { slug } = useParams();

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.slug === slug);
const relatedProducts = products.filter(
  (item) =>
    item.category === product.category &&
    item.id !== product.id
);
  if (!product) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold">Product Not Found</h1>

          <Link
            to="/products"
            className="inline-block mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Back to Products
          </Link>
        </div>
      </MainLayout>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello MediLink, I'm interested in "${product.name}". Kindly provide more information and a quotation.`
  );

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Product Image */}

          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-2xl shadow-lg bg-gray-100 object-cover"
            />
          </div>

          {/* Product Information */}

          <div>

            <span className="text-cyan-600 font-semibold">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold mt-2">
              {product.name}
            </h1>

            {product.brand && (
              <p className="mt-4 text-gray-600">
                <strong>Brand:</strong> {product.brand}
              </p>
            )}

            <p className="text-gray-600 mt-2">
              <strong>SKU:</strong> {product.sku}
            </p>

            <div className="mt-6">

              <p className="text-4xl font-bold text-blue-700">
                {product.price
                  ? `KSh ${product.price.toLocaleString()}`
                  : "Price on Request"}
              </p>

              <div className="flex items-center gap-2 mt-4">

                <CheckCircle className="text-green-600" size={20} />

                <span className="text-green-700 font-medium">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>

              </div>

            </div>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
<div className="mt-8 flex items-center gap-4">

  <span className="font-semibold">
    Quantity
  </span>

  <div className="flex items-center border rounded-lg overflow-hidden">

    <button
      onClick={() =>
        setQuantity((q) => Math.max(1, q - 1))
      }
      className="px-4 py-2 hover:bg-gray-100"
    >
      −
    </button>

    <span className="px-6 font-semibold">
      {quantity}
    </span>

    <button
      onClick={() => setQuantity((q) => q + 1)}
      className="px-4 py-2 hover:bg-gray-100"
    >
      +
    </button>

  </div>

</div>
              
           <button
  onClick={() => {
    addToCart(product, quantity);

    toast.success(
      `${quantity} × ${product.name} added to cart`
    );
  }}
  className="bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-blue-800 transition"
>
  <ShoppingCart size={20} />
  Add to Cart
</button>

              <a
                href={`https://wa.me/254700000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-600 text-green-700 px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-green-50 transition"
              >
                <MessageCircle size={20} />
                Request Quote
              </a>

            </div>

          </div>

        </div>

        {/* Description */}

        {product.description && (
          <section className="mt-20">

            <h2 className="text-3xl font-bold mb-6">
              Product Description
            </h2>

            <p className="text-gray-700 leading-8">
              {product.description}
            </p>

          </section>
        )}

        {/* Specifications */}

        {product.specifications &&
          product.specifications.length > 0 && (

            <section className="mt-16">

              <h2 className="text-3xl font-bold mb-6">
                Specifications
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                {product.specifications.map((spec, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg"
                  >
                    <CheckCircle
                      className="text-blue-700"
                      size={18}
                    />

                    <span>{spec}</span>

                  </div>

                ))}

              </div>

            </section>

          )}
{relatedProducts.length > 0 && (
  <section className="mt-24">

    <div className="mb-10">
      <h2 className="text-3xl font-bold">
        Related Products
      </h2>

      <p className="text-gray-500 mt-2">
        You may also be interested in these products.
      </p>
    </div>

    <ProductGrid products={relatedProducts} />

  </section>
)}
      </div>
    </MainLayout>
  );
};

export default Product;