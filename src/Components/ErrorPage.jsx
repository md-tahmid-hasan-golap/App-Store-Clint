import React from "react";
import ErrorImg from "../assets/404.gif";
import Header from "./Header";
import { Link } from "react-router-dom"; // ✅ এইটাই ঠিক
import { FaArrowLeftLong } from "react-icons/fa6";

// নিচের ফন্ট দুইটা install করে নিবি (npm install করতে হবে)
import "@fontsource/poppins";
import "@fontsource/rancho";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-200 to-white font-[Poppins]">
      <Header />

      <div className="text-center mt-12 px-4">
        <h1
          className="text-5xl md:text-7xl text-orange-500 font-bold mb-4"
          style={{ fontFamily: "Rancho, cursive" }}
        >
          Oops! Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto">
          The page you are looking for might have been removed, renamed, or
          temporarily unavailable.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 text-white bg-orange-500 hover:bg-orange-600 transition-all px-6 py-3 rounded-full shadow-lg font-semibold text-lg"
        >
          <FaArrowLeftLong />
          Back to Home
        </Link>
      </div>

      <div className="flex justify-center mt-12">
        <img src={ErrorImg} alt="404 Error" className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default ErrorPage;
