import React from "react";
import ButtonComponent from "../Button";
import { UseContext } from "../../Context/EcommerceContext";

const SavedForLater = ({ savedItems }) => {
  const { addToCart, removeFromFavorite } = UseContext();
  return (
    <div className=" bg-[#f7fafc] md:bg-white md:border md:border-gray-200 rounded-md p-3 md:p-4  sm:mt-6">
      <h2 className="text-lg font-semibold mb-4 text-[#1C1C1C]">
        Saved for later
      </h2>

      {/* Horizontally scrollable container */}

      {/* ✅ Layout for medium and larger screens */}
      <div className="hidden md:flex overflow-x-auto gap-4 scrollbar-thin scrollbar-hide scrollbar-thumb-gray-300">
        {savedItems.map((item) => (
          <div
            key={item._id}
            className="flex-shrink-0 w-[270px] flex flex-col justify-between rounded p-4 bg-white"
          >
            <div className="bg-[#EEEEEE] p-2 rounded-md mb-2">
              <img
                src={item.image[0]}
                alt={item.title}
                className="w-full h-36 object-contain mb-2"
              />
            </div>

            <p className="text-[#1C1C1C] font-semibold text-md">
              ${item.price}
            </p>
            <p className="text-sm text-[#8B96A5]">{item.title}</p>
            <ButtonComponent
              onClick={() => {
                const item1 = {
                  id: item._id,
                  price: item.price,
                  quantity: 1,
                };
                addToCart(item1);
                removeFromFavorite(item._id);
              }}
              className="text-[#0D6EFD] bg-white mt-4 p-2 flex w-[150px] items-center gap-2 rounded-md border border-[#DEE2E7] hover:cursor-pointer text-[16px] font-medium"
            >
              <img src="/assets/blueCart.png" alt="blue cart" /> Move to cart
            </ButtonComponent>
          </div>
        ))}
      </div>

      {/* ✅ Layout for small screens only */}
      <div className="flex flex-col gap-2 md:hidden">
        {savedItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-row items-center gap-4 bg-white p-2 border-1 border-[#DEE2E7] rounded-lg "
          >
            {/* Image Section */}
            <div className=" rounded-md w-[100px] h-[100px] flex justify-center items-center">
              <img
                src={item.image[0]}
                alt={item.title}
                className="h-20 object-contain"
              />
            </div>

            {/* Details Section */}
            <div className="flex flex-col  w-full">
              <div>
                <p className="text-[#1C1C1C] font-normal  text-[16px]">
                  {item.title}
                </p>
                <p className="text-[#1C1C1C] text-[16px] font-bold">
                  ${item.price}
                </p>
              </div>

              <div className="flex gap-4 mt-3 ">
                <ButtonComponent
                  onClick={() => {
                    const item1 = {
                      id: item._id,
                      price: item.price,
                      quantity: 1,
                    };
                    addToCart(item1);
                    removeFromFavorite(item._id);
                  }}
                  className="text-[#0D6EFD] bg-white p-1 text-[13px] px-2 border border-[#DEE2E7] rounded-md font-medium"
                >
                  Move to cart
                </ButtonComponent>
                <ButtonComponent
                  onClick={() => removeFromFavorite(item._id)}
                  className="text-red-500 bg-white p-1 px-2 border text-[13px]  border-[#DEE2E7] rounded-md font-medium"
                >
                  Remove
                </ButtonComponent>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedForLater;
