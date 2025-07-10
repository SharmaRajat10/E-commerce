import InputField from "../components/InputField";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-3xl font-medium  mb-6">
          Sign Up <span className="font-medium text-3xl">—</span>
        </h2>
        <form className="w-full max-w-sm flex flex-col items-center">
          <InputField type="text" placeholder="Name" />
          <InputField type="email" placeholder="Email" />
          <InputField type="password" placeholder="Password" />
          <div className="w-full flex justify-between text-sm text-gray-600 mb-4">
            <Link to="/forgot-password">Forgot your password?</Link>
            <Link to="/login">Login Here</Link>
          </div>
          <button type="submit" className=" bg-black text-white py-2 px-8 mt-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
