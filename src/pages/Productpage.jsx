import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import axios from "axios";
import Footer from "../components/Footer";

const AddToCart = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleAddToCart = async () => {
    if (!selectedSize) return;

    const cartItem = {
      productId: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    };
    console.log("Sending productId:", product._id);
    // console.log(cartItem)

    try {
      const res = await axios.post("http://localhost:3000/cart", cartItem);
      console.log("Item added:", res.data);
      console.log(cartItem);

      navigate("/cart", { state: cartItem });
    } catch (err) {
      console.error("Add to cart failed:", err.response?.data || err.message);
    }
  };

  if (!product) return <p>No product selected</p>;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-12">
        <div className="flex gap-4 items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md object-cover"
          />
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-1">{product.name}</h1>

          <p className="flex items-center text-red-500 text-sm mb-2">
            {[...Array(4)].map((_, i) => (
              <IoMdStar key={i} className="text-lg mr-1" />
            ))}
            <IoMdStar className="text-lg text-red-200 mr-1" />
            <span className="text-gray-600 ml-2">(122)</span>
          </p>

          <p className="text-2xl font-bold text-gray-800 mb-4">
            Rs.{product.price}
          </p>

          <p className="text-gray-700 mb-6">
            {product.description || "Product details not available."}
          </p>

          <div className="mb-4">
            <p className="font-medium mb-2">Select Size</p>
            <div className="flex space-x-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-1 transition 
                  ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            disabled={!selectedSize}
            onClick={handleAddToCart}
            className={`px-6 py-2 mt-4 transition-colors duration-300
            ${
              selectedSize
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            ADD TO CART
          </button>

          <div className="mt-6 text-sm text-gray-600 space-y-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddToCart;
