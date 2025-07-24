import React from "react";
import { GrFormView } from "react-icons/gr";
import { MdDeleteOutline, MdEdit, MdEditAttributes } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, price, photo } = coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-around w-full mt-8">
          <div>
            {" "}
            <h2 className="">
              <b>Name : </b> {name}
            </h2>
            <p>
              <b>Chef : </b> {chef}
            </p>
            <p>
              <b>Price :</b> {price}
            </p>
          </div>
          <div className="card-actions justify-end pb-3">
            <div className="join join-vertical space-y-3">
              <button className="btn join-item bg-[#D2B48C] text-white rounded-md">
                <GrFormView size={25} />
              </button>
              <button className="btn join-item text-white bg-black rounded-md">
                <MdEdit size={25} />
              </button>
              <button className="btn join-item text-white bg-red-500 rounded-md">
                <MdDeleteOutline size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
