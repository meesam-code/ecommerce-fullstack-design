import React from "react";
import EditProductInfo from "../../components/EditProductInfo.jsx";

const ProductEdit = () => {
  return (
    <div className=" px-2 sm:px-4 md:px-11 py-4 ">
      <h1 className="text-xl font-semibold">Product Edit</h1>
      <div className="flex justify-center items-center">
        <EditProductInfo />
      </div>
    </div>
  );
};

export default ProductEdit;
