import hero from "../assets/hero.png";

const Herosection = () => {
  return (
    <section className="h-screen w-full flex flex-col md:flex-row border border-gray-300">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="max-w-md px-6 py-10 md:py-0">
          <div className="flex items-center space-x-3 mb-2">
            <div className="h-px w-6 bg-black"></div>
            <p className="uppercase text-xs tracking-wide text-gray-700 font-medium">
              Our Bestsellers
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-light font-serif text-gray-900 mb-4">
            Chlothzy Arrivals
          </h1>

          <div className="flex items-center space-x-3">
            <p className="text-sm font-semibold">SHOP NOW</p>
            <div className="h-px w-10 bg-black"></div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full md:h-screen">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Herosection;
