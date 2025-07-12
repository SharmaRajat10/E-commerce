import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const CartPage = () => {
  const { state: item } = useLocation();

  if (!item) {
    return (
      <div className="px-6 py-12 text-center">
        <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
        <p className="text-gray-600">No item in the cart.</p>
      </div>
    );
  }

  const [quantity, setQuantity] = useState(1);
  const price = item.price;
  const shipping = 50;
  const subtotal = price * quantity;
  const total = subtotal + shipping;

  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value);
    setQuantity(val > 0 ? val : 1);
  };

  return (
    <>
      <div className="px-6 py-12">
        <h2 className="text-xl font-semibold border-b pb-2 mb-6">
          <span className="text-xl text-gray-700 font-semibold">YOUR </span>
          CART
          <span className="font-medium text-3xl"> —</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b pb-4 mb-8">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-32 object-cover"
          />

          <div className="col-span-2">
            <h3 className="font-medium text-lg">{item.name}</h3>
            <p className="text-gray-700 mt-1">Rs.{price}</p>
            <span className="inline-block mt-2 border px-3 py-1 text-sm">
              {item.size || "M"}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 border px-2 py-1 text-center"
              min={1}
            />
            <button className="text-red-500 hover:text-red-700">
              <FaTrashAlt />
            </button>
          </div>
        </div>

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
