import React from "react";
import ProductCard from "./ProductCard";

const BestCollections = ({ products }) => {
  return (
    <section className="px-6 md:px-16 py-10">
      <div className="text-center py-8 text-3xl">
        <h2 className="text-gray-500 mb-3 md:text-2xl">
          BEST <span className="font-meidum text-gray-700 ">SELLERS</span>{" "}
          <span className="inline-block w-12 h-[2px] bg-black align-middle ml-2" />
        </h2>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Our best seller — loved by many, styled by all. Elevate your look with
          timeless charm.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((item, idx) => (
          <ProductCard
            key={idx}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default BestCollections;
