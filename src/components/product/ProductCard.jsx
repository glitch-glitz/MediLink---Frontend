import { ShoppingCart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../store/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cart } = useCart();

  // 🔥 normalize ID (fixes list + single product mismatch)
  const productId = product?.id || product?._id;

  const isInCart = cart?.some(
    (item) => item.id === productId
  );

  const whatsappMessage = encodeURIComponent(
    `Hello MediLink, I'm interested in "${product.name}". Kindly provide more information and a quotation.`
  );

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <Link to={`/products/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
      </Link>

      <div className="p-5">

        <span className="text-sm text-cyan-600 font-medium">
          {product.category}
        </span>

        <Link to={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold mt-2 hover:text-blue-700">
            {product.name}
          </h3>
        </Link>

        <p className="mt-3 text-2xl font-bold text-blue-700">
          {product.price
            ? `KSh ${product.price.toLocaleString()}`
            : "Price on Request"}
        </p>

        <div className="mt-5 space-y-3">

          <button
            onClick={() =>
              isInCart
                ? removeFromCart(productId)
                : addToCart(product)
            }
            className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 transition ${
              isInCart
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-blue-700 hover:bg-blue-800 text-white"
            }`}
          >
            <ShoppingCart size={18} />
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>

          <a
            href={`https://wa.me/254142629343?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border border-green-600 text-green-700 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-50 transition"
          >
            <MessageCircle size={18} />
            Request Quote
          </a>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;