import LatestCollections from "../components/LatestCollections";
import dress1 from "../assets/dress1.jpg";
import dress2 from "../assets/dress2.png";
import dress3 from "../assets/dress3.png";
import dress4 from "../assets/dress4.png";
import dress5 from "../assets/dress5.png";
import dress6 from "../assets/dress6.png";
import dress7 from "../assets/dress7.png";
import dress8 from "../assets/dress8.png";
import dress9 from "../assets/dress9.jpg";
import dress10 from "../assets/dress10.jpg";
import Herosection from "../components/Herosection";
import BestCollections from "../components/BestCollections";
import SupportAndSubscribe from "../components/SupportAndSubscribe";
import Footer from "../components/Footer";
import Aboutpage from "../components/Aboutpage";

const productData = [
  {
    image: dress1,
    name: "Mini Bodycon",
    price: 1999,
  },
  {
    image: dress2,
    name: "Pastel Muse Bodycon",
    price: 2999,
  },
  {
    image: dress3,
    name: "Emerald Allure Bodycon",
    price: 1899,
  },
  {
    image: dress4,
    name: "Mini Bodycon",
    price: 1999,
  },
  {
    image: dress5,
    name: "Pastel Muse Bodycon",
    price: 2999,
  },
  {
    image: dress6,
    name: "Emerald Allure Bodycon",
    price: 1899,
  },
  {
    image: dress7,
    name: "Mini Bodycon",
    price: 1999,
  },
  {
    image: dress8,
    name: "Pastel Muse Bodycon",
    price: 2999,
  },
  {
    image: dress9,
    name: "Emerald Allure Bodycon",
    price: 1899,
  },
  {
    image: dress10,
    name: "Emerald Allure Bodycon",
    price: 1899,
  },
];

const Home = () => {
  return (
    <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Herosection />
      <LatestCollections products={productData} />
      <BestCollections products={productData.slice(0, 5)} />
      <SupportAndSubscribe />
      <Footer />
    </main>
  );
};

export default Home;
