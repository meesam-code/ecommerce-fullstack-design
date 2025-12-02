import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button";
import { UseContext } from "../../Context/EcommerceContext";
import toast from "react-hot-toast";

const DetailedCartCard = ({ product, onDelete, onFavorite = () => {} }) => {
  const [menu, setMenu] = useState(false);
  const { addToCart } = UseContext();
  const [selectedQuantity, setSelectedQuantity] = useState(
    product.quantity || 1,
  );

  useEffect(() => {
    addToCart({
      id: product._id,
      price: product.price,
      quantity: selectedQuantity,
      replace: true,
    });
    if (selectedQuantity > 1) {
      toast.success("Quantity changed successfully");
    }
  }, [selectedQuantity]);

  const handleQuantityChange = (type) => {
    setSelectedQuantity((prev) => {
      const newQty = type === "increment" ? prev + 1 : prev - 1;
      return newQty < 1 ? 1 : newQty;
    });
  };

  return (
    <div className="w-full  ">
      {/* Mobile View (below md) */}
      <div className="block relative md:hidden bg-white  p-4 h-[100px] md:h-full w-full md:max-w-[500px]">
        {/* Product Info Row */}
        <div className="flex gap-3">
          <div className="w-[70px] h-[70px] bg-[#f7f7f7] flex justify-center items-center border border-[#E0E0E0] p-2 rounded">
            {product?.image ? (
              <img
                src={product?.image[0]}
                alt={product?.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-xs text-gray-400">No Image</span>
            )}
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <h2 className="text-[14px] text-[#1C1C1C] font-normal mr-3 leading-tight">
              {product?.title}
            </h2>
            <p className="text-xs text-[#606060]">Size: medium, Color: blue</p>
            <p className="text-xs text-[#8B96A5]">Seller: Artel Market</p>
          </div>
        </div>

        {/* Quantity & Price */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-gray-300 rounded overflow-hidden w-fit">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="px-3 cursor-pointer py-1 text-lg font-medium border-r text-[#8b96a5] border-gray-300"
            >
              −
            </button>
            <div className="px-4 py-1 text-sm">{selectedQuantity}</div>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="px-3 cursor-pointer py-1 text-lg font-medium border-l text-[#8b96a5] border-gray-300"
            >
              +
            </button>
          </div>

          <div className="text-lg font-semibold text-[#1C1C1C]">
            ${(product?.price * selectedQuantity).toFixed(2)}
          </div>
        </div>

        {/* Dots Icon + Menu */}
        <div
          className="w-6 h-6 absolute top-4 right-1 flex justify-center items-center cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          <img src="/assets/dots.png" alt="dots icon" className="" />
        </div>

        {/* Dropdown Menu */}
        {menu && (
          <div className="absolute top-10 right-4 z-10 bg-white border border-[#DEE2E7] rounded-md shadow-lg w-[160px]">
            <button
              onClick={onDelete}
              className="block cursor-pointer w-full text-left text-red-500 px-4 py-2 hover:bg-red-50 text-sm"
            >
              Delete Item
            </button>
            <button
              onClick={onFavorite}
              className="block cursor-pointer w-full text-left text-blue-500 px-4 py-2 hover:bg-blue-50 text-sm"
            >
              Add to Favorite
            </button>
          </div>
        )}
      </div>

      {/* Desktop View (md and up) */}
      <div className="hidden md:flex items-start w-full border-b-1 border-[#DEE2E7]  bg-white p-2 lg:p-4 gap-2  lg:gap-4">
        <div className="w-[100px] h-[100px] flex justify-center items-center p-2 rounded">
          {product?.image ? (
            <img
              src={product?.image[0]}
              alt={product?.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-xs text-gray-400">No Image</span>
          )}
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <h2 className="text-base font-medium text-[#404040] break-words">
            {product?.title || "New product"}
          </h2>

          <p className="text-sm text-[#606060]">
            Size: Medium, Medium: Cotton, Color: Blue, Material: Denim
          </p>
          <p className="text-sm text-[#8B96A5]">Seller: FashionHouse</p>

          <div className="flex gap-3 mt-2">
            <ButtonComponent
              onClick={onDelete}
              className="text-red-500 cursor-pointer p-2 px-1 lg:px-3 rounded-lg shadow-md border border-[#DEE2E7] hover:text-red-600 text-sm font-medium"
            >
              Delete from cart
            </ButtonComponent>
            <ButtonComponent
              onClick={onFavorite}
              className="text-blue-500 cursor-pointer p-2 px-1 lg:px-3 rounded-lg shadow-md border border-[#DEE2E7] hover:text-blue-600 text-sm font-medium"
            >
              Add to favorite
            </ButtonComponent>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between h-full">
          <p className="text-lg font-semibold text-[#1C1C1C]">
            ${(product?.price * selectedQuantity).toFixed(2)}
          </p>
          <select
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-sm mt-2"
          >
            {[...Array(10).keys()].map((n) => (
              <option key={n + 1} value={n + 1}>
                Qty : {n + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DetailedCartCard;
