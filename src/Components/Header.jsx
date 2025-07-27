import React from "react";
import Logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="h-[70px] md:h-[120px] bg-cover bg-center text-white px-4 md:px-10"
      style={{
        backgroundImage: "url('https://i.ibb.co/LzTC3RtG/Rectangle-1.png')",
      }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo + Title (Centered via flex-grow) */}
        <div className="flex-1 flex justify-center items-center gap-3 md:gap-5">
          <img
            src={Logo}
            alt="Coffee"
            className="w-10 h-10 md:w-16 md:h-16 object-contain"
          />
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold italic">
            Espresso Emporium
          </h1>
        </div>

        {/* Login Button */}
        <div className="absolute right-4 md:right-10">
          <Link to="/login">
            <button className="bg-white text-[#6C4A2D] font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-[#f4eee6] duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
