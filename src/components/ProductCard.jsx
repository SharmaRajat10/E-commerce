const ProductCard = ({ image, name, price }) => {
  return (
    <div className=" rounded-md overflow-hidden  transition duration-300">
      <div className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover hover:scale-110 transition-transform duration-300 ease-in-out">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-base font-medium text-gray-900 mb-1">{name}</h3>
        <p className="text-sm font-semibold text-gray-700">Rs.{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
