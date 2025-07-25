import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleCoffee = (e) => {
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

    console.log(coffeeData);

    //send coffee data to tha dataBase

    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successful!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mt-10">
      <Link to="/">
        <p className="font-bold flex items-center gap-5">
          <FaArrowLeftLong /> Back to home
        </p>
      </Link>

      <div className="bg-[#F4F3F0] p-16 rounded-md mt-12">
        {/* text section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl">Add New Coffee</h2>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        {/* form section */}
        <form onSubmit={handleCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
            <fieldset className="fieldset">
              <label className="font-bold">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Americano Coffee"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="font-bold">Chef</label>
              <input
                type="text"
                name="chef"
                className="input w-full"
                placeholder="Mr. Matin Paul"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="font-bold">Price</label>
              <input
                type="text"
                name="price"
                className="input w-full"
                placeholder="Enter price (e.g. 250)"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="font-bold">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full"
                placeholder="Sweet and hot"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="font-bold">Category</label>
              <input
                type="text"
                name="category"
                className="input w-full"
                placeholder="Americano"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="font-bold">Details</label>
              <input
                type="text"
                name="details"
                className="input w-full"
                placeholder="Espresso with hot water"
              />
            </fieldset>
          </div>

          <fieldset className="fieldset mt-5">
            <label className="font-bold">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="https://i.ibb.co/PGqMPr9/11.png"
            />
          </fieldset>

          <input
            type="submit"
            className="btn w-full bg-[#D2B48C] mt-5"
            value="Add Coffee "
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
