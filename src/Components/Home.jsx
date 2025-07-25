import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeesData);
  console.log(coffeesData);
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
