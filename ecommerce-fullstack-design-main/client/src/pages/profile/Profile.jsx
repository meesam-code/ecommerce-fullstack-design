import React, { useEffect, useState } from "react";
import { UseContext } from "../../Context/EcommerceContext";
import { logout } from "../../Api/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const { user, setUser, setShowMenu } = UseContext();
  const navigate = useNavigate();

  const handleProfileLogout = () => {
    logout()
      .then((response) => {
        toast.success("Logout successful");
        setUser(null);
        setShowMenu(false);
        navigate("/");
      })
      .catch((error) => {
        toast.error("Logout fail");
      });
  };

  return (
    <section className="min-h-screen p-4 sm:px-15 md:px-[30px]  lg:px-[50px]  sm:py-[20px]  bg-white text-gray-800">
      {/* Header */}
      <div className="bg-blue-500 p-4 rounded text-white shadow">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <p className="text-sm">Welcome back to your dashboard</p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-8 p-6 rounded-lg shadow-lg border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="bg-blue-500 text-white rounded-lg p-4 flex flex-col gap-4">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-white text-[#0d6efd] flex items-center justify-center text-2xl font-bold">
                {user?.fullName.slice(0, 2)}
              </div>
              <p className="mt-2 font-semibold">{user?.fullName}</p>
              <p className="text-sm">{user?.email}</p>
            </div>
            <nav className="mt-4 flex flex-col gap-2">
              <button className="text-left hover:underline">Orders</button>
              <button className="text-left hover:underline">Wishlist</button>

              <button
                onClick={handleProfileLogout}
                className="text-left cursor-pointer hover:underline text-red-200"
              >
                Logout
              </button>
            </nav>
          </div>

          {/* Details */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Account Information</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.fullName}
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm mb-2 font-medium">
                  Username
                </label>
                <input
                  type="text"
                  defaultValue={user?.username}
                  className="w-full p-2 border rounded"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm mb-2 font-medium">Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
