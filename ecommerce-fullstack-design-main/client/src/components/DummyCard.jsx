import React from "react";
import { Link } from "react-router-dom";

const DummyCard = ({ product, isInfo = false }) => {
  return (
    <Link
      to={`/products/productInfo/${product.id || product._id}`}
      className={`flex flex-col sm:gap-2 ${
        isInfo
          ? "w-[200px]"
          : "w-[160px] min-w-[150px] bg-white border border-[#DEE2E7]"
      } h-full sm:p-4 p-2 bg-white border-1 border-gray-300 sm:border-none  rounded-md mb-4 relative`}
    >
      {/* Image */}
      <div
        className={`flex items-center w-full h-full ${
          isInfo ? "sm:bg-[#EEEEEE] px-2" : ""
        } justify-center`}
      >
        {product.image ? (
          <img
            src={product.image[0]}
            alt={product.title}
            className={`w-[150px] h-[160px] object-contain`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Price and Title */}
      {isInfo ? (
        <>
          <h2 className="text-[16px] hidden sm:inline-block text-[#606060] truncate">
            {product.title}
          </h2>
          <span className="text-[#1C1C1C] hidden sm:inline text-[20px] font-semibold">
            ${product.price}
          </span>
          <span className="text-[#1C1C1C] sm:hidden text-[20px] font-semibold">
            ${product.price}
          </span>
          <h2 className="text-[16px] sm:hidden text-[#606060] truncate">
            {product.title}
          </h2>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2 text-sm mt-1">
            <span className="text-[#1C1C1C] text-[20px] font-semibold">
              ${product.price}
            </span>
          </div>
          <h2 className="text-[16px] text-[#606060] w-full truncate">
            {product.title}
          </h2>
        </>
      )}
    </Link>
  );
};

export default DummyCard;
