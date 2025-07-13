import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const LatestCollections = ({ products }) => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    // console.log("click");
    console.log(product);

    navigate("/add-to-cart", { state: product });
  };

  return (
    <section className="px-6 md:px-16 py-10">
      <div className="text-center py-8 text-3xl">
        <h2 className="text-gray-500 mb-3 md:text-2xl">
          Latest <span className="font-meidum text-gray-700 ">Collections</span>{" "}
          <span className="inline-block w-12 h-[2px] bg-black align-middle ml-2" />
        </h2>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Chlothzy’s latest collection is where elegance meets trend. Fashion
          that speaks your style.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((item, idx) => (
          <ProductCard
            onClick={() => handleClick(item)}
            className="cursor-pointer"
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

export default LatestCollections;
