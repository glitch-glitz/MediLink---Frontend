import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@fontsource/poppins";
import { CartProvider } from "./store/CartContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
       <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          borderRadius: "12px",
          background: "#0f172a",
          color: "#fff",
        },
      }}
    />
    </CartProvider>
  </StrictMode>
);