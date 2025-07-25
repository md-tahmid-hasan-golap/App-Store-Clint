import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const data = useLoaderData();
  const { _id, name, category, details, chef, taste, photo, price } = data;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const coffeeData = {
      name: form.name.value,
      chef: form.chef.value,
      price: form.price.value,
      taste: form.taste.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
    };

    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mt-10">
      <Link to="/">
        <p className="font-bold flex items-center gap-2 hover:text-orange-600">
          <FaArrowLeftLong /> Back to home
        </p>
      </Link>

      <div className="bg-[#F4F3F0] p-10 md:p-16 rounded-md mt-12">
        {/* Text section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-[#6C4A2D]">Update Coffee</h2>
          <p className="text-[#5C5C5C]">
            Update your coffee information below and hit the update button.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="space-y-2">
              <label className="font-semibold text-[#403F3F]">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input input-bordered w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>

            <fieldset className="space-y-2">
              <label className="font-semibold text-[#403F3F]">Chef</label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                className="input input-bordered w-full"
                placeholder="Enter chef name"
              />
            </fieldset>

            <fieldset className="space-y-2">
              <label className="font-semibold text-[#403F3F]">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input input-bordered w-full"
                placeholder="Enter price (e.g. 250)"
              />
            </fieldset>

            <fieldset className="space-y-2">
              <label className="font-semibold text-[#403F3F]">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input input-bordered w-full"
                placeholder="e.g. sweet, bitter"
              />
            </fieldset>

            <fieldset className="space-y-2">
              <label className="font-semibold text-[#403F3F]">Category</label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input input-bordered w-full"
                placeholder="e.g. Espresso"
              />
            </fieldset>

            <fieldset className="space-y-2">
              <label className="font-semibold text-[#403F3F]">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input input-bordered w-full"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>

          <fieldset className="space-y-2 mt-5">
            <label className="font-semibold text-[#403F3F]">Photo URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input input-bordered w-full"
              placeholder="https://i.ibb.co/PGqMPr9/11.png"
            />
          </fieldset>

          <input
            type="submit"
            className="btn bg-[#D2B48C] w-full mt-5 hover:bg-[#c49e7c]"
            value="Update Coffee Details"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
