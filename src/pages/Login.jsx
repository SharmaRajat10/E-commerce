import { useState } from "react";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        formData
      );
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err.response?.data);
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-3xl font-medium  mb-6">
          Login <span className="font-medium text-3xl">—</span>
        </h2>
        <form
          className="w-full max-w-sm flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="w-full flex justify-between text-sm text-gray-600 mb-4">
            <a href="#">Forgot your password?</a>
            <Link to="/signup">Create account</Link>
          </div>
          <button type="submit" className="bg-black text-white py-2 px-8 mt-4">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
