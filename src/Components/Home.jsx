import React from "react";
import { BsCupFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffeesData = useLoaderData();
  console.log(coffeesData);
  return (
    <div className="py-10">
      <div className="text-center space-y-2">
        <p>--- Sip & Savor ---</p>
        <h2 className="text-[#331A15] text-2xl">Our Popular Products</h2>
        <Link to="/addCoffee" className="inline-block">
          {" "}
          <button className="bg-[#E3B577] rounded-md py-1 px-2 text-white mt-3 flex items-center gap-1">
            Add Coffee <BsCupFill className="text-black" />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {coffeesData.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
