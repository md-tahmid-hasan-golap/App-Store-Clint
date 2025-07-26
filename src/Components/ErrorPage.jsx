import React from "react";
import ErrorImg from "../assets/404.gif";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

import "@fontsource/poppins";
import "@fontsource/rancho";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-white font-[Poppins]">
      <Header />

      <div className="flex flex-col items-center text-center mt-16 px-4 animate-fadeIn">
        <h1
          className="text-6xl md:text-8xl text-orange-600 font-bold mb-4 drop-shadow-lg"
          style={{ fontFamily: "Rancho, cursive" }}
        >
          404 😵
        </h1>

        <h2
          className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
          style={{ fontFamily: "Rancho, cursive" }}
        >
          Oops! Page Not Found
        </h2>

        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg shadow-md transition-all duration-300"
        >
          <FaArrowLeftLong className="text-xl" />
          Back to Home
        </Link>
      </div>

      <div className="flex justify-center mt-12">
        <img
          src={ErrorImg}
          alt="404 Error"
          className="w-full max-w-sm drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
