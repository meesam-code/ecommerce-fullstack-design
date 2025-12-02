import React from "react";
import { Link } from "react-router-dom";
import { register } from "../../Api/auth.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UseContext } from "../../Context/EcommerceContext.jsx";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = UseContext();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      !userData.fullName ||
      !userData.username ||
      !userData.email ||
      !userData.password
    ) {
      setLoading(false);
      setError(true);
      return alert("All fields are required");
    }

    if (userData.password.length < 6) {
      setLoading(false);
      setError(true);
      return alert("Password must be at least 6 characters long");
    }

    register(userData)
      .then((response) => {
        if (response) {
          console.log("Registration successful:", response);
          setUser(response.user);
          setLoading(false);
          toast.success("Registration successful please login  ");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("Error while registering user");
        toast.error("Error while registering user");
        setError(true);
      });
    setUserData({
      fullName: "",
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex  justify-center items-center min-h-screen p-5  w-full bg-gray-100">
      <Toaster position="top-right" reverseOrder={false} />
      <form
        onSubmit={handleFormSubmit}
        className="max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="text-gray-900 text-2xl sm:text-3xl mt-10 font-medium">
          Sign Up
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Please fill in the details to register
        </p>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          className="mt-6 w-full h-10 sm:h-12 rounded-full border border-gray-300/80 pl-6 text-sm placeholder-gray-500 text-gray-700 outline-none"
          required
          value={userData.fullName}
          onChange={(e) =>
            setUserData({ ...userData, fullName: e.target.value })
          }
        />

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="mt-4 w-full h-10 sm:h-12 rounded-full border border-gray-300/80 pl-6 text-sm placeholder-gray-500 text-gray-700 outline-none"
          required
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email ID"
          name="email"
          className="mt-4 w-full h-10 sm:h-12 rounded-full border border-gray-300/80 pl-6 text-sm placeholder-gray-500 text-gray-700 outline-none"
          required
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="mt-4 w-full h-10 sm:h-12 rounded-full border border-gray-300/80 pl-6 text-sm placeholder-gray-500 text-gray-700 outline-none"
          required
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />

        <button
          type="submit"
          className="mt-6 cursor-pointer w-full h-9 sm:h-11 rounded-full text-white  bg-[#0D6EFD] hover:opacity-90 transition-opacity"
        >
          Register
        </button>

        <p className="text-gray-500 text-sm mt-3 mb-11">
          Already have an account?{" "}
          <Link className="text-indigo-500" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
