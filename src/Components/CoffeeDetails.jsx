import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const data = useLoaderData();
  const { name, category, details, chef, taste, photo, price } = data;
  console.log(data);
  return (
    <div className="mt-14 flex justify-between">
      <div className="space-y-3">
        <h2 className="text-2xl">
          <b>Name : </b> {name}
        </h2>

        <p>
          <b>Category :</b> {category}
        </p>
        <p>
          <b>price : </b> {price}
        </p>
        <p>
          <b>details :</b> {details}
        </p>
        <p>
          <b>chef :</b> {chef}
        </p>
        <p>
          <b>taste : </b> {taste}
        </p>
      </div>
      <div>
        <figure>
          <img src={photo} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default CoffeeDetails;
