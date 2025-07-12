const InputField = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      className="w-full border border-gray-300 rounded p-2 mb-4"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default InputField;
