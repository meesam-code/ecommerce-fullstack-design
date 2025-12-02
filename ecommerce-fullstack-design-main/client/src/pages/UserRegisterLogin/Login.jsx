import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchUser, login } from "../../Api/auth.js";
import { useNavigate } from "react-router-dom";
import { UseContext } from "../../Context/EcommerceContext.jsx";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { setUser, setIsAdmin } = UseContext();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false); // reset error

    try {
      const response = await login(userData);
      console.log(response);

      if (response) {
        try {
          const user = await fetchUser(); // get fresh user

          setUser(user);

          setIsAdmin(response.user?.role === "admin"); // set admin status
          navigate("/");
          toast.success("Login successful!");
          // ✅ navigate after success only
        } catch (err) {
          toast.error("Failed to fetch user. Please try again.");
          setError(true);
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Invalid credentials, please try again."); // ✅ show toast before anything
      setError(true);
    } finally {
      setLoading(false);
      setUserData({ email: "", password: "" });
    }
  };

  return (
    <div className="flex justify-center items-center h-full p-2 sm:p-5 w-full bg-gray-100">
      {error && <Toaster position="top-right" reverseOrder={false} />}
      <form
        onSubmit={handleFormSubmit}
        className="max-w-96 w-full text-center  border border-gray-300/60 rounded-2xl px-4 sm:px-8 bg-white"
      >
        <h1 className="text-gray-900 text-2xl sm:text-3xl mt-10 font-medium">
          Login
        </h1>
        <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>
        <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-10 sm:h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
              fill="#6B7280"
            />
          </svg>
          <input
            type="email"
            placeholder="Email id"
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            required
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-10 sm:h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            width="13"
            height="17"
            viewBox="0 0 13 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
              fill="#6B7280"
            />
          </svg>
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            required
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <div className="mt-5 text-left text-indigo-500">
          <a className="text-sm" href="#">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="mt-2 cursor-pointer w-full h-10 sm:h-11 rounded-full text-white bg-[#0D6EFD] hover:opacity-90 transition-opacity"
        >
          Login
        </button>
        <p className="text-gray-500 text-sm mt-3 mb-11">
          Don’t have an account?{" "}
          <Link className="text-indigo-500" to="/signup">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
