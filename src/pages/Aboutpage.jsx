import React from "react";
import aboutus from "../assets/aboutus image.png";
import Footer from "../components/Footer";
const Aboutpage = () => {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex flex-col items-center justify-center pt-8">
          <h2 className="text-2xl text-gray-500 font-medium  mb-6">
            ABOUT <span className="text-2xl text-black font-medium">US</span>{" "}
            <span className="font-medium text-3xl">—</span>
          </h2>
        </div>
        <section class=" bg-white">
          <div class="flex flex-col my-10 md:flex-row gap-16">
            <div class="flex justify-center">
              <img
                src={aboutus}
                alt="About Clothz"
                class="w-full md:max-w-[450px] rounded"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
              <p class="mb-4 text-gray-700 leading-relaxed">
                <span class="font-bold">Clothz</span> is your destination for
                fashion that blends elegance, confidence, and modern flair. We
                believe every body type deserves bold and beautiful
                styling—especially our standout{" "}
                <span class="font-semibold">bodycon dresses</span> made to
                impress.
              </p>
              <p class="mb-6 text-gray-700 leading-relaxed">
                Our collections balance trend and timelessness. Whether it's a
                party or daily wear, <span class="font-bold">Clothz</span>{" "}
                ensures you're always styled with comfort and grace.
              </p>
              <h3 class="font-bold mb-2">Our Mission</h3>
              <p class="text-gray-700 leading-relaxed">
                At <span class="font-bold">Clothz</span>, our mission is to make
                fashion empowering and accessible. We provide high-quality,
                trend-forward apparel that helps you feel your best— especially
                with our signature bodycon line.
              </p>
            </div>
          </div>
        </section>
        <div className=" text-xl py-4">
          <div className="inline-flex gap-2 items-center mb-3">
            <p className="text-gray-500">
              WHY
              <span class="text-gray-700 font-medium">CHOOSE US</span>
            </p>
            <span className="font-medium text-3xl">—</span>
          </div>
        </div>
        <section class="mb-20 bg-white">
          <div class="grid grid-cols-1 md:grid-cols-3 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div class="px-10 md:px-16 py-8 sm:py-20 text-left">
              <h3 class="font-semibold text-base mb-3">Flattering Fits:</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Our bodycon dresses are crafted to enhance every curve with
                premium stretchable fabrics.
              </p>
            </div>
            <div class="px-10 md:px-16 py-8 sm:py-20 text-left">
              <h3 class="font-semibold text-base mb-3">Effortless Shopping:</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                Browse, choose, and flaunt – our site makes fashion accessible
                and seamless to shop.
              </p>
            </div>
            <div class="px-10 md:px-16 py-8 sm:py-20 text-left">
              <h3 class="font-semibold text-base mb-3">
                Fashion that Empowers:
              </h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                At Clothz, we’re all about confidence. Every dress is designed
                to make a bold, empowering statement.
              </p>
            </div>
          </div>
        </section>
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
      <Footer />
    </>
  );
};

export default Aboutpage;
