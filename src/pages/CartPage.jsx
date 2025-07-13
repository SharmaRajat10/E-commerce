import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import axios from "axios";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/cart`);
        setCartItems(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleQuantityChange = (id, value) => {
    const updatedItems = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: value > 0 ? value : 1 } : item
    );
    setCartItems(updatedItems);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/cart/${id}`);
      setCartItems(cartItems.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Delete failed:", err.message);
    }
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const total = subtotal + shipping;

  if (loading) return <div className="px-6 py-12">Loading...</div>;

  if (cartItems.length === 0) {
    return (
      <div className="px-6 py-12 text-center">
        <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
        <p className="text-gray-600">No item in the cart.</p>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <div className="px-6 py-12">
        <h2 className="text-xl font-semibold border-b pb-2 mb-6">
          <span className="text-xl text-gray-700 font-semibold">YOUR </span>
          CART
          <span className="font-medium text-3xl"> —</span>
        </h2>

        {cartItems.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b pb-4 mb-8"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-32 object-cover"
            />

            <div className="col-span-2">
              <h3 className="font-medium text-lg">{item.name}</h3>
              <p className="text-gray-700 mt-1">Rs.{item.price}</p>
              <span className="inline-block mt-2 border px-3 py-1 text-sm">
                {item.size || "M"}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item._id, parseInt(e.target.value))
                }
                className="w-16 border px-2 py-1 text-center"
                min={1}
              />
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(item._id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}

        {/* Cart Totals */}
        <div className="max-w-sm ml-auto">
          <h3 className="text-lg font-medium border-b pb-2 mb-4">
            <span className="text-xl text-gray-700 font-medium">CART </span>
            TOTALS
            <span className="font-medium text-gray-700 text-3xl"> —</span>
          </h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs.{subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping Fee</span>
            <span>Rs.{shipping}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total</span>
            <span>Rs.{total}</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
