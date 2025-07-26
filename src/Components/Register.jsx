import React, { useContext } from "react";
import { AuthContext } from "../Context/FirebaseAuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { creatUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Firebase register
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User created:", user);

        // Update profile with name and photo
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("Profile updated");
            // Optional: redirect or toast
          })
          .catch((error) => {
            console.error("Profile update error:", error.message);
          });

        // Console other info
        console.log("Address:", address);
        console.log("Phone:", phone);
      })
      .catch((error) => {
        console.error("Registration error:", error.message);
      });
  };

  return (
    <div className="card bg-base-100 max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Registration now!</h1>
        <form onSubmit={handleRegister} className="fieldset space-y-2">
          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered"
            placeholder="Name"
            required
          />

          {/* Address */}
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input input-bordered"
            placeholder="Address"
            required
          />

          {/* Phone */}
          <label className="label">Phone</label>
          <input
            type="text"
            name="phone"
            className="input input-bordered"
            placeholder="Phone"
            required
          />

          {/* Photo URL */}
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input input-bordered"
            placeholder="Photo URL"
            required
          />

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered"
            placeholder="Email"
            required
          />

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input input-bordered"
            placeholder="Password"
            required
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
