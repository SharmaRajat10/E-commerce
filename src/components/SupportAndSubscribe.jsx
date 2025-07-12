import { MdAutorenew } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { IoHeadsetOutline } from "react-icons/io5";

const SupportAndSubscribe = () => {
  return (
    <section className="px-6 md:px-16 py-14 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center mb-16">
        <div>
          <MdAutorenew size={40} className="mx-auto text-black" />
          <h4 className="text-md font-semibold mt-3">Easy Exchange Policy</h4>
          <p className="text-sm text-gray-500 mt-1">
            We offer hassle free exchange policy
          </p>
        </div>
        <div>
          <BsShieldCheck size={40} className="mx-auto text-black" />
          <h4 className="text-md font-semibold mt-3">7 Days Return Policy</h4>
          <p className="text-sm text-gray-500 mt-1">
            We provide 7 days free return policy
          </p>
        </div>
        <div>
          <IoHeadsetOutline size={40} className="mx-auto text-black" />
          <h4 className="text-md font-semibold mt-3">Best customer support</h4>
          <p className="text-sm text-gray-500 mt-1">
            We provide 24/7 customer support
          </p>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold text-black mb-2">
          Join the Chlothzy Style Community
        </p>
        <h2 className="text-2xl font-medium text-black my-2">
          Subscribe now & get 20% off
        </h2>
        <p className="text-sm text-black mb-3">
          Chlothzy Fashion – Where Style Meets Confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-sm outline-none"
          />
          <button className="w-full sm:w-auto bg-black text-white px-6 py-3 font-medium text-sm hover:bg-gray-900 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportAndSubscribe;
