// src/pages/Admin/AdminLayout.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => {
  const links = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Listed Products", path: "/admin/listedProducts" },
    { name: "Add New Product", path: "/admin/addNewProduct" },
  ];

  return (
    <section className="flex sm:flex-row flex-col  min-h-screen px-4 sm:px-15 md:px-[30px]  lg:px-[50px]">
      {/* Sidebar */}
      <div className="md:w-64 w-full sm:w-30 sm:w-50 sm:border-r text-base border-gray-300 pt-4 flex flex-row justify-between sm:justify-start sm:flex-col">
        {links.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `flex items-center  py-3 px-2 sm:px-4 gap-3 ${
                isActive
                  ? "sm:border-r-4 md:border-r-[6px] bg-indigo-500/10 border-[#155dfc] text-indigo-500"
                  : "hover:bg-gray-100/90 text-gray-700"
              }`
            }
          >
            <span className="text-[12px] sm:text-[16px] font-semibold">
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>

      {/* Main content */}
      <main className="flex-1 px-2 sm:px-4 md:px-6 py-4 overflow-auto">
        <Outlet />
      </main>
    </section>
  );
};

export default AdminLayout;
