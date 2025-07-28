import React from "react";
import errorImg from "../assets/404.gif";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        {/* Button */}
        <Link to="/">
          <button className="flex items-center gap-2 bg-[#E3B577] text-white px-4 py-2 rounded-md hover:bg-[#d1a55a] transition-all duration-300 shadow-md mb-4 mt-5">
            <FaArrowLeftLong />
            Back to Home
          </button>
        </Link>

        {/* Image */}
        <img
          src={errorImg}
          alt="404 Not Found"
          className="w-full max-w-md rounded-md mb-4"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#331A15] mb-2">
          Oops! Page Not Found
        </h1>

        {/* Sub Text */}
        <p className="text-lg text-gray-600 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ErrorPage;
