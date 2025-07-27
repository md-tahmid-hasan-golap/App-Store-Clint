import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleADdCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const price = form.price.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const allData = {
      name,
      price,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="py-12">
      <Link
        to="/"
        className="font-semibold text-lg flex items-center gap-3 text-gray-700 hover:text-amber-500 transition-colors duration-200 cursor-pointer"
      >
        <FaArrowLeftLong size={20} />
        <span>Back to Home</span>
      </Link>

      <div className="bg-[#F4F3F0] p-14 rounded-md mt-10">
        <div className="text-center max-w-[800px] w-full px-4 md:px-8 mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Add New Coffee</h2>
          <p className="text-sm md:text-base text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleADdCoffee}>
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            {/* number -- 1 */}
            <fieldset className="fieldset">
              <label className="font-bold">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="My awesome page"
              />
            </fieldset>
            {/* number -- 2 */}
            <fieldset className="fieldset">
              <label className="font-bold">Price</label>
              <input
                type="text"
                name="price"
                className="input w-full"
                placeholder="Enter coffee Price"
              />
            </fieldset>
            {/* number -- 3 */}
            <fieldset className="fieldset ">
              <label className="font-bold">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full"
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            {/* number -- 4 */}
            <fieldset className="fieldset">
              <label className="font-bold">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            {/* number -- 5 */}
            <fieldset className="fieldset">
              <label className="font-bold">Category</label>
              <input
                type="text"
                name="category"
                className="input w-full"
                placeholder="Enter coffee category"
              />
            </fieldset>
            {/* number -- 6 */}
            <fieldset className="fieldset">
              <label className="font-bold">Details</label>
              <input
                type="text"
                name="details"
                className="input w-full"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>
          {/* number -- 7 */}
          <fieldset className="fieldset mt-3">
            <label className="font-bold">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter photo URL"
            />
          </fieldset>
          <input
            type="submit"
            className="btn w-full bg-[#D2B48C] mt-4"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
