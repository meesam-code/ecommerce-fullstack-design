import React from "react";
import { UseContext } from "../../Context/EcommerceContext";

const Dashboard = () => {
  const { products } = UseContext();

  return (
    <div className=" sm:mt-10 grid grid-cols-1 md:grid-cols-2 ml-10 lg:grid-cols-4 gap-6">
      <div className="bg-white sm:h-40 shadow-md rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Total Products</h2>
        <p className="text-3xl font-bold text-indigo-600 mt-2">
          {products.length}
        </p>
      </div>

      <div className="bg-white  sm:h-40  shadow-md rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
        <p className="text-3xl font-bold text-green-600 mt-2">86</p>
      </div>

      <div className="bg-white  sm:h-40 shadow-md rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Out of Stock</h2>
        <p className="text-3xl font-bold text-red-500 mt-2">19</p>
      </div>

      <div className="bg-white  sm:h-40 shadow-md rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Total Orders</h2>
        <p className="text-3xl font-bold text-yellow-600 mt-2">309</p>
      </div>
    </div>
  );
};

export default Dashboard;
