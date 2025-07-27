import React from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc"; // Google icon import

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleGoogleSignIn = () => {
    // এখানে Google sign-in এর লজিক দিবে
    console.log("Google Sign-In clicked");
  };

  return (
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-10">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">Login your account!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Login
          </button>
        </form>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-neutral mt-4 w-full flex items-center justify-center gap-2"
          type="button"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>
      </div>

      <p className="text-center pb-4 mt-4">
        Don’t Have An Account?{" "}
        <Link to="/registation" className="text-red-500">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
