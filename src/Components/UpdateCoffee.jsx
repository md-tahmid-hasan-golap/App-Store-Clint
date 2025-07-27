import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const data = useLoaderData();
  const { _id, name, category, details, supplier, taste, photo, price } = data;
  const handleUpdateCoffee = (e) => {
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
    console.log(allData);
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Upded Data!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="mt-10 mb-10">
      <Link to="/">
        <p className="font-bold flex items-center gap-2 hover:text-orange-600">
          <FaArrowLeftLong /> Back to home
        </p>
      </Link>

      <div className="bg-[#F4F3F0] p-10 md:p-16 rounded-md mt-12">
        {/* Text section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-[#6C4A2D]">
            Update Existing Coffee Details
          </h2>
          <p className="text-[#5C5C5C]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            {/* number -- 1 */}
            <fieldset className="fieldset">
              <label className="font-bold">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
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
                defaultValue={price}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
                className="input w-full"
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
