import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseContext } from "../../../Context/EcommerceContext";
import { logout } from "../../../Api/auth.js"; // Assuming you have a logout function in your auth API
import toast from "react-hot-toast";
const MainRightUpperComponent = () => {
  const navigate = useNavigate();
  const { user, setUser, setCart, setFavorite } = UseContext();
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logout()
      .then(async () => {
        // Wait shortly to ensure cookie is set
        setTimeout(async () => {
          try {
            setUser(null); // Clear user context
            toast.success("Logout successful!");
            if (user) {
              localStorage.removeItem(`cart_${user._id}`);
              localStorage.removeItem(`favorite_${user._id}`);
            }
            setFavorite([]);
            setCart([]);
            navigate("/");
          } catch (err) {
            console.error("Failed to fetch user after login", err);
            toast.error("Logout failed, please try again.");
            setError(true);
          } finally {
            setLoading(false);
          }
        }, 100);
      })
      .catch((error) => {
        // Handle logout error, e.g., show error message
        console.error("Logout failed:", error);
      });
  };

  if (Loading) return <div>Loading ......</div>;

  return (
    <div className="bg-[#eaf1f9] h-[170px] lg:h-[190px]  md:p-2 lg:p-4 pb-5 w-full rounded-lg text-center">
      {/* Profile Image & Greeting */}
      <div className="flex justify-center gap-4 items-start mb-4">
        <div className="bg-[#c7e1ff] h-[35px] w-[35px]  lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-end">
          <img
            src="/assets/mainPhoto.png"
            alt="profile"
            className="lg:w-[35px] lg:h-[35px] h-[25px] w-[25px] mb-1"
          />
        </div>

        <p className="text-[#1c1c1c] text-start text-[16px] font-normal leading-tight">
          {user?.fullName ? `Hi, ${user.fullName.split(" ")[0]}` : "Hi, user"}
          <br />
          {user ? "Welcome back!" : "Let’s get started"}
        </p>
      </div>

      {/* Buttons */}
      <div className="lg:mt-4 mt-2 space-y-2">
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="bg-[#0d6efd] cursor-pointer hover:bg-blue-600 text-white w-full lg:py-2 p-1 rounded-lg"
            >
              Logout
            </button>
            <button
              onClick={handleLogin}
              className="border border-[#dee2e7] cursor-pointer  text-[#0d6efd] w-full lg:mt-2 text-sm p-1 lg:p-2 rounded-lg bg-white"
            >
              another account?
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleSignUp}
              className="bg-[#0d6efd] cursor-pointer  hover:bg-blue-600 text-white w-full lg:py-2 p-1 rounded-lg"
            >
              Join now
            </button>
            <button
              onClick={handleLogin}
              className="border border-[#dee2e7] cursor-pointer  text-[#0d6efd] w-full lg:py-2 p-1 rounded-lg bg-white"
            >
              Log in
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MainRightUpperComponent;
