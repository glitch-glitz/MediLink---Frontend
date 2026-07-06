import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useCart } from "../store/CartContext";

const Checkout = () => {
  const { cart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + (item.price || 0) * item.quantity,
    0
  );

  return (
    <MainLayout>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Customer Information */}

          <div className="lg:col-span-2 bg-white shadow rounded-2xl p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Customer Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3"
              />

              <input
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3"
              />

              <input
                name="organization"
                placeholder="Hospital / Clinic (Optional)"
                value={form.organization}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3"
              />

            </div>

            <input
              name="location"
              placeholder="Delivery Location"
              value={form.location}
              onChange={handleChange}
              className="border rounded-lg px-4 py-3 w-full mt-5"
            />

            <textarea
              name="notes"
              placeholder="Additional Notes"
              value={form.notes}
              onChange={handleChange}
              rows="5"
              className="border rounded-lg px-4 py-3 w-full mt-5"
            />

          </div>

          {/* Order Summary */}

          <div className="bg-slate-50 rounded-2xl p-8 h-fit">

            <h2 className="text-2xl font-semibold mb-6">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">
                Your cart is empty.
              </p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between border-b py-3"
                  >
                    <div>
                      <p className="font-medium">
                        {item.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p>
                      {item.price
                        ? `KSh ${(item.price * item.quantity).toLocaleString()}`
                        : "Quote"}
                    </p>
                  </div>
                ))}

                <div className="flex justify-between text-xl font-bold mt-6">

                  <span>Subtotal</span>

                  <span>
                    KSh {subtotal.toLocaleString()}
                  </span>

                </div>

                <button
                  className="w-full mt-8 bg-blue-700 text-white py-4 rounded-xl hover:bg-blue-800 transition"
                >
                  Submit Order Request
                </button>

              </>
            )}

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default Checkout;