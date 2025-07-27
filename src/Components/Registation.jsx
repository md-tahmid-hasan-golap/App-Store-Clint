import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const Registration = () => {
  const { creatUser, googleLogin } = useContext(AuthContext);
  const goggleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, address, phone, photoURL, email, password });
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-10">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">
          Register your account!
        </h1>
        <form onSubmit={handleRegister} className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name"
            required
          />

          {/* Address */}
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="Address"
            required
          />

          {/* Phone */}
          <label className="label">Phone</label>
          <input
            type="tel"
            name="phone"
            className="input"
            placeholder="Phone"
            required
          />

          {/* Photo URL */}
          <label className="label">Photo URL</label>
          <input
            type="Text"
            name="photoURL"
            className="input"
            placeholder="Photo URL"
          />

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
        </form>
        <button
          onClick={goggleLogin}
          className="btn btn-outline btn-neutral mt-4 w-full flex items-center justify-center gap-2"
          type="button"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>
      </div>
      <p className="text-center pb-4">
        Already Have An Account?{" "}
        <Link to="/login" className="text-red-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Registration;
