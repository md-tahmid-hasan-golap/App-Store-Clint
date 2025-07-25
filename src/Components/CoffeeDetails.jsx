import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const data = useLoaderData();
  const { name, category, details, chef, taste, photo, price } = data;

  return (
    <div className="mt-14 px-4 md:px-8 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] p-6 rounded-xl shadow-lg border border-[#d6c1aa]">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={photo}
            alt={name}
            className="w-full max-w-sm rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-1/2 space-y-4 text-[#3e2c23]">
          <h2 className="text-3xl font-extrabold text-[#6f4e37]">☕ {name}</h2>
          <p>
            <span className="font-semibold text-[#8b5e3c]">Category:</span>{" "}
            <span className="text-[#4e342e]">{category}</span>
          </p>
          <p>
            <span className="font-semibold text-[#8b5e3c]">Price:</span>{" "}
            <span className="text-[#2e1e17]">${price}</span>
          </p>
          <p>
            <span className="font-semibold text-[#8b5e3c]">Details:</span>{" "}
            <span className="text-[#5d4037]">{details}</span>
          </p>
          <p>
            <span className="font-semibold text-[#8b5e3c]">Chef:</span>{" "}
            <span className="text-[#4e342e]">{chef}</span>
          </p>
          <p>
            <span className="font-semibold text-[#8b5e3c]">Taste:</span>{" "}
            <span className="text-[#3e2723]">{taste}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
