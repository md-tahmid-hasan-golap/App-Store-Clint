import React from "react";
import Logo from "../assets/logo1.png";
const Header = () => {
  return (
    <div
      className="h-[70px] md:h-[120px] bg-cover bg-center flex items-center justify-center text-white px-4"
      style={{
        backgroundImage: "url('https://i.ibb.co/LzTC3RtG/Rectangle-1.png')",
      }}
    >
      <div className="flex items-center gap-3 md:gap-5 rounded-xl">
        <img
          src={Logo}
          alt="Coffee"
          className="w-10 h-10 md:w-16 md:h-16 object-contain"
        />
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold italic">
          Espresso Emporium
        </h1>
      </div>
    </div>
  );
};

export default Header;
