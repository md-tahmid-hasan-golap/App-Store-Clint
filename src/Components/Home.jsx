import React from "react";
import { BsCupFill } from "react-icons/bs";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import Marquee from "react-fast-marquee";

const Home = () => {
  const coffeesData = useLoaderData();
  console.log(coffeesData);
  return (
    <div className="py-10">
      <div className="text-center space-y-3">
        <p className="text-sm text-[#B58130] font-semibold tracking-wide uppercase">
          --- Sip & Savor ---
        </p>
        <Marquee
          className="text-3xl font-bold text-[#331A15]"
          speed={80}
          pauseOnHover={true}
          gradient={false}
          style={{ width: "600px", margin: "0 auto" }} // centered fixed width marquee
        >
          <p className="mx-8 whitespace-nowrap">Our Popular Products</p>
          <p className="mx-8 whitespace-nowrap">Our Popular Products</p>
          <p className="mx-8 whitespace-nowrap">Our Popular Products</p>
          <p className="mx-8 whitespace-nowrap">Our Popular Products</p>
        </Marquee>

        <Link to="/addCoffee" className="inline-block mt-2">
          <button className="bg-[#E3B577] hover:bg-[#d1a55a] transition duration-300 rounded-md py-2 px-4 text-white font-medium flex items-center justify-center gap-2">
            Add Coffee <BsCupFill className="text-black text-lg" />
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
