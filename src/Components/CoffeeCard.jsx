import React from "react";
import { GrFormView } from "react-icons/gr";
import { MdDeleteOutline, MdEdit, MdEditAttributes } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, price, photo } = coffee;
  const handleDelete = (_id) => {
    console.log("delete", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        //start deleting the coffee
        fetch(`http://localhost:3000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee  has been deleted.",
                icon: "success",
              });
              const remaningCoffee = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaningCoffee);
            }
          });
      }
    });
  };
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
              <Link to={`/coffee/${_id}`}>
                <button className="btn join-item bg-[#D2B48C] text-white rounded-md">
                  <GrFormView size={25} />
                </button>
              </Link>
              <Link to={`/updateCoffee/${_id}`}>
                {" "}
                <button className="btn join-item text-white bg-black rounded-md">
                  <MdEdit size={25} />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item text-white bg-red-500 rounded-md"
              >
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
