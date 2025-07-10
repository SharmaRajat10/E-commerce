const InputField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-black placeholder-gray-500 focus:outline-none focus:ring focus:ring-black mb-4"
    />
  );
};

export default InputField;
