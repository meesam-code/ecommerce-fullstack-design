import React from "react";
import { Link } from "react-router-dom";

const SimpleCard = ({ product }) => {
  return (
    <Link
      to={`/products/productInfo/${product._id}`}
      className="flex  items-center w-[300px]  bg-white  rounded-md p-3 gap-2"
    >
      {/* Image */}
      <div className="w-[80px] h-[80px] flex justify-center items-center border border-[#DEE2E7] p-2  rounded">
        {product.image ? (
          <img
            src={product.image[0]}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="text-xs text-gray-400">No Image</span>
        )}
      </div>

      {/* Title & Price */}
      <div className="flex flex-col ">
        <h2 className="text-[14px] text-[#606060] font-medium break-words whitespace-normal">
          {product.title}
        </h2>
        <span className="text-[16px] text-[#8B96A5]  mt-1">
          ${product.price}-$2000
        </span>
      </div>
    </Link>
  );
};

export default SimpleCard;
