import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white mt-16 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col justify-between lg:flex-row">
        <div>
          <img src={logo} alt="Chlothzy Logo" className="w-28 mb-4" />
          <p className="text-sm leading-relaxed">
            Chlothzy Fashion brings bold elegance to your wardrobe. <br />
            From bodycon dresses to chic essentials, we redefine style. <br />
            Perfect fits, premium fabrics — confidence in every thread.
          </p>
        </div>

        <div>
          <h4 className="text-xl text-black font-medium mb-5">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="#" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Delivery
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl text-black font-medium mb-5">GET IN TOUCH</h4>
          <p className="text-sm">
            <strong>Phone:</strong> 8505835814
          </p>
          <p className="text-sm">
            <strong>Email:</strong> contact@chlothzy.shop
          </p>
          <p className="text-sm mt-2">
            <strong>Address:</strong>
            <br />
            Unit-113, Malabar Hill
            <br />
            Maharashtra - 400006
          </p>
        </div>
      </div>
      <hr />
      <div className="text-center py-6 text-sm">
        <p className="py-5 text-sm text-black text-center">
          Copyright © 2025 chlothzy.shop – All Rights Reserved.
        </p>

        <div className="flex flex-col items-center gap-2 pb-10">
          <p className="text-gray-700 font-medium">
            Follow us on Instagram for daily style inspo
          </p>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:opacity-80 text-xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
