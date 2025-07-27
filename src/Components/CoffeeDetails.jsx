import React from "react";
import { Link, useLoaderData } from "react-router-dom"; // ✅ fixed typo

const CoffeeDetails = () => {
  const data = useLoaderData();
  const { name, photo, taste, supplier, price, details, category } = data;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10 items-center bg-white shadow-lg p-6 rounded-xl">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={photo}
            alt={name}
            className="w-full h-auto max-h-[400px] object-cover rounded-md shadow"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-1/2 space-y-3 text-gray-800">
          <h2 className="text-2xl font-bold text-[#331A15] mb-2">☕ {name}</h2>

          <p>
            <span className="font-semibold">Taste:</span> {taste}
          </p>
          <p>
            <span className="font-semibold">Details:</span> {details}
          </p>
          <p>
            <span className="font-semibold">Supplier:</span> {supplier}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>

          <Link
            to="/"
            className="mt-4 bg-[#D2B48C] hover:bg-[#b08b6b] text-white px-6 py-2 rounded-md transition"
          >
            Back to Coffee List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
