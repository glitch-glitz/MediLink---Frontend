import MainLayout from "../layouts/MainLayout";
import { useCart } from "../store/CartContext";
import { Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    total,
  } = useCart();

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">

            <ShoppingBag
              size={80}
              className="mx-auto text-gray-300"
            />

            <h2 className="text-2xl font-semibold mt-6">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Browse our medical supplies and add products to your cart.
            </p>

            <Link
              to="/products"
              className="inline-block mt-8 bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800"
            >
              Continue Shopping
            </Link>

          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Cart Items */}

            <div className="lg:col-span-2 space-y-5">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow p-5 flex justify-between items-center"
                >

                  <div>

                    <h2 className="font-semibold text-xl">
                      {item.name}
                    </h2>

                    <p className="text-gray-500">
                      {item.category}
                    </p>

                    <p className="mt-2 text-blue-700 font-bold">
                      {item.price
                        ? `KSh ${item.price.toLocaleString()}`
                        : "Price on Request"}
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-100 p-2 rounded-lg"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="font-bold text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-100 p-2 rounded-lg"
                    >
                      <Plus size={18} />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 ml-4"
                    >
                      <Trash2 size={20} />
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Order Summary */}

            <div className="bg-slate-100 rounded-xl p-6 h-fit">

              <h2 className="text-2xl font-bold">
                Order Summary
              </h2>

              <div className="flex justify-between mt-6">

                <span>Items</span>

                <span>{cart.length}</span>

              </div>

              <div className="flex justify-between mt-3">

                <span>Total</span>

                <span className="font-bold text-xl text-blue-700">
                  KSh {total.toLocaleString()}
                </span>

              </div>

              <Link
                to="/checkout"
                className="block text-center mt-8 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
              >
                Proceed to Checkout
              </Link>

            </div>

          </div>
        )}

      </div>
    </MainLayout>
  );
};

export default Cart;