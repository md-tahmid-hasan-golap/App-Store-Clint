import React from "react";
import { GrFormView } from "react-icons/gr";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, photo, supplier, price } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden p-4 w-full h-full mt-10">
      {/* Image */}
      <div className="w-full md:w-1/3">
        <img
          src={photo}
          alt={name}
          className="w-full h-40 object-cover rounded-md"
        />
      </div>

      {/* Info & Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:ml-6 mt-4 md:mt-0 gap-5">
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-lg font-bold text-[#331A15] truncate">
            Name: {name}
          </h2>
          <p className="text-gray-600 truncate">Supplier: {supplier}</p>
          <p className="text-gray-600">Price: ${price}</p>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            to={`/coffeeDetails/${_id}`}
            className="bg-[#D2B48C] hover:bg-[#b4916b] text-white px-4 py-1 rounded-md transition"
          >
            <GrFormView size={25} />
          </Link>
          <button className="bg-black hover:bg-black text-white px-4 py-1 rounded-md transition">
            <MdEdit size={25} />
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md transition"
          >
            <MdDelete size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
