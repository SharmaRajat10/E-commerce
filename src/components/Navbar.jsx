import { useState } from "react";
import logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLockPerson } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <header className="relative flex justify-between items-center px-6 py-4 ">
        <div className="text-xl font-serif tracking-widest">
          <img src={logo} alt="Chlothzy Logo" className="w-36 object-contain" />
        </div>
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:underline">
            HOME
          </Link>
          <Link to="#" className="hover:underline">
            COLLECTION
          </Link>
          <Link to="/about" className="hover:underline">
            ABOUT
          </Link>
          <Link to="#" className="hover:underline">
            CONTACT
          </Link>
        </nav>
        <div className="flex space-x-4 text-lg">
          <span>
            <IoIosSearch size={23} />
          </span>
          <Link to="/login">
            <span className="cursor-pointer">
              <FaRegUser size={20} />
            </span>
          </Link>
          <span className="relative">
            <MdOutlineLockPerson size={20} />
            <span className="absolute bottom-[-4px] right-[-7px] bg-black text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">
              0
            </span>
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t flex flex-col px-6 py-4 space-y-3 text-sm font-medium md:hidden z-50">
            <Link to="#" className="hover:underline">
              HOME
            </Link>
            <Link to="#" className="hover:underline">
              COLLECTION
            </Link>
            <Link to="/about" className="hover:underline">
              ABOUT
            </Link>
            <Link to="#" className="hover:underline">
              CONTACT
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
