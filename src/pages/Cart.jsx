import MainLayout from "../layouts/MainLayout";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../store/CartContext";

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
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow p-5 flex justify-between items-center"
                >
                  <div>
                    <h2 className="font-semibold text-lg">
                      {item.name}
                    </h2>

                    <p className="text-gray-500">
                      {item.price
                        ? `KSh ${item.price.toLocaleString()}`
                        : "Price on Request"}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-2 rounded bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="p-2 rounded bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 ml-4"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>
                </div>
              ))}

            </div>

            <div className="mt-10 bg-slate-100 rounded-xl p-6">

              <h2 className="text-2xl font-bold">
                Total
              </h2>

              <p className="text-3xl text-blue-700 mt-2">
                KSh {total.toLocaleString()}
              </p>

            </div>
          </>
        )}

      </div>
    </MainLayout>
  );
};

export default Cart;