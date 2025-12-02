import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button";
import { UseContext } from "../../Context/EcommerceContext";
import toast from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ProductDetail = ({ currentProduct }) => {
  const { addToCart, user } = UseContext();
  const [isMobile420, setIsMobile420] = useState(false);

  const handleSmQuery = () => {
    if (!currentProduct) {
      toast.error("Product not found");
      return;
    }
    if (!user) {
      toast.error("Please login to send an inquiry");
      return;
    }
    const item = {
      id: currentProduct._id,
      price: currentProduct.price,
      quantity: 1,
      replace: true,
    };
    addToCart(item);
    alert("Inquiry sent! Check your cart.");
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 420px)");

    const handleChange = (e) => {
      setIsMobile420(e.matches);
    };

    // Set initial state
    setIsMobile420(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (!currentProduct) return <p>Loading...</p>;
  return (
    <div className="max-w-md mx-auto px-4 md:px-1   bg-white">
      {currentProduct.inStock ? (
        <div className=" items-center gap-1 sm:flex hidden">
          <img src="/assets/greenTick.png" className="w-[18px] h-[14px]" />
          <p className="text-green-600  text-[16px] mb-1">In stock</p>
        </div>
      ) : (
        <div className="items-center gap-1 sm:flex hidden">
          <AiOutlineCloseCircle className="w-[18px] h-[18px] text-red-600" />
          <p className="text-red-600 text-[16px] mb-1">Out of stock</p>
        </div>
      )}

      <h2 className="text-lg font-semibold  sm:inline-block hidden mb-2">
        {currentProduct?.title}
      </h2>
      <div className="md:flex  hidden items-center text-sm text-gray-600 space-x-2 lg:space-x-2 mb-3">
        <div className="text-orange-500 text[12px]  text-[16px] flex items-center gap-1  lg:text-xl ">
          ★★★★<span className="text-[#D4CDC5] ">★</span> 9.3
        </div>
        <span className="text-[#D4CDC5] text-lg hidden lg:inline lg:text-xl">
          •
        </span>
        <div className="flex items-center gap-1 lg:gap-2">
          <img
            src="/assets/review.png"
            alt="review "
            className="w-[10px] h-[15px] lg:w-[18px] lg:h-[18px]"
          />
          <span className="text-[#787A80] text[12px] lg:text-[16px]">
            {" "}
            32 reviews
          </span>
        </div>
        <span className="text-[#D4CDC5] text-lg  hidden xlg:inline lg:text-xl">
          •
        </span>
        <div className="flex items-center gap-1 lg:gap-2">
          <img
            src="/assets/bucket.png"
            alt="review "
            className="w-[15px] h-[15px] lg:w-[18px] lg:h-[18px]"
          />
          <span className="text-[#787A80] text-[12px] lg:text-[16px]">
            154 sold
          </span>
        </div>
      </div>
      <div
        className={`flex items-center ${
          isMobile420 ? "justify-between" : ""
        } md:hidden items-center text-sm text-gray-600 space-x-4 lg:space-x-2 mb-3`}
      >
        <div className="text-orange-500  text-xl flex items-center gap-1  lg:text-xl ">
          ★★★★<span className="text-[#D4CDC5] ">★</span> 9.3
        </div>
        <span
          className={`text-[#D4CDC5] ${
            isMobile420 ? "hidden" : "inline"
          } text-lg lg:text-xl`}
        >
          •
        </span>
        <div
          className={` items-center gap-1 ${
            isMobile420 ? "hidden" : "flex"
          } lg:gap-2`}
        >
          <img
            src="/assets/review.png"
            alt="review "
            className="w-[20px] h-[20px] lg:w-[18px] lg:h-[18px]"
          />
          <span className="text-[#787A80] text[16px] "> 32 reviews</span>
        </div>
        <span
          className={`text-[#D4CDC5] ${
            isMobile420 ? "hidden" : "inline"
          } text-lg lg:text-xl`}
        >
          •
        </span>
        <div className="flex items-center gap-1 lg:gap-2">
          <img
            src="/assets/bucket.png"
            alt="review "
            className="w-[20px] h-[20px] "
          />
          <span
            className={`text-[#787A80] ${
              isMobile420 ? "text-xl" : "text-[16px] "
            } `}
          >
            154 sold
          </span>
        </div>
      </div>

      <h2 className="text-lg font-semibold sm:hidden inline-block mb-2">
        {currentProduct?.title}
      </h2>

      <div className="sm:grid grid-cols-3 hidden  bg-[#FFF0DF] p-2 rounded mb-4">
        <div className="border-r-2 border-[#DEE2E7] pl-2 ">
          <p className="text-red-600 font-bold">$98.00</p>
          <p className="text-xs text-gray-500">50-100 pcs</p>
        </div>
        <div className="border-r-2 border-[#DEE2E7] pl-2 ">
          <p className="font-semibold">$90.00</p>
          <p className="text-xs text-gray-500">100-700 pcs</p>
        </div>
        <div className="pl-2">
          <p className="font-semibold">$78.00</p>
          <p className="text-xs text-gray-500">700+ pcs</p>
        </div>
      </div>

      <div className="  flex items-center gap-1 sm:hidden">
        <p className="text-red-600 text-[16px] font-bold">$98.00</p>
        <p className="text-xs text-[13px] text-gray-500">(50-100 pcs)</p>
      </div>

      <div className="flex justify-between sm:hidden items-center gap-2 mt-2 mb-1">
        <ButtonComponent
          type={"button"}
          onClick={handleSmQuery}
          className="bg-blue-600 w-full text-white rounded-lg py-2  hover:bg-blue-700 transition-colors"
        >
          Send inquiry
        </ButtonComponent>
        <div className="bg-white border-1 border-[#DEE2E7] p-2 rounded-md">
          <img
            src="/assets/favorite_border.png"
            alt="heart"
            className="w-5 h-5"
          />
        </div>
      </div>

      <div className="text-sm text-gray-700 space-y-4 sm:inline-block hidden">
        <div className="flex border-b border-[#E0E0E0] pb-4 mb-3">
          <p className="text-[16px] text-[#8B96A5] min-w-[120px]">Price:</p>
          <p className="text-[16px] text-[#505050]">Negotiable</p>
        </div>

        <div className="border-b border-[#E0E0E0] pb-4 mb-2">
          <div className="flex mb-3">
            <p className="text-[16px] text-[#8B96A5] min-w-[120px]">Type:</p>
            <p className="text-[16px] text-[#505050]">Classic shoes</p>
          </div>
          <div className="flex mb-3">
            <p className="text-[16px] text-[#8B96A5] min-w-[120px]">
              Material:
            </p>
            <p className="text-[16px] text-[#505050]">Plastic material</p>
          </div>
          <div className="flex">
            <p className="text-[16px] text-[#8B96A5] min-w-[120px]">Design:</p>
            <p className="text-[16px] text-[#505050]">Modern nice</p>
          </div>
        </div>

        <div className="border-b border-[#E0E0E0] pb-4 mb-2">
          <div className="flex mb-3">
            <p className="text-[16px] text-[#8B96A5] min-w-[120px]">
              Customization:
            </p>
            <p className="text-[16px] text-[#505050]">
              Customized logo and design custom packages
            </p>
          </div>
          <div className="flex mb-3">
            <p className="text-[16px] text-[#8B96A5] min-w-[120px]">
              Protection:
            </p>
            <p className="text-[16px] text-[#505050]">Refund Policy</p>
          </div>
          <div className="flex">
            <p className="text-[16px] text-[#8B96A5] min-w-[120px]">
              Warranty:
            </p>
            <p className="text-[16px] text-[#505050]">2 years full warranty</p>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-700 space-y-2 inline-block sm:border-t sm:hidden sm:pt-4">
        <div className="flex">
          <p className="text-[16px] text-[#8B96A5] min-w-[120px]">Condition:</p>
          <p className="text-[16px] text-[#505050]">New</p>
        </div>
        <div className="flex">
          <p className="text-[16px] text-[#8B96A5] min-w-[120px]">Material:</p>
          <p className="text-[16px] text-[#505050]">Plastic</p>
        </div>
        <div className="flex">
          <p className="text-[16px] text-[#8B96A5] min-w-[120px]">Category:</p>
          <p className="text-[16px] text-[#505050]">Shoes</p>
        </div>
        <div className="flex">
          <p className="text-[16px] text-[#8B96A5] min-w-[120px]">Item No.:</p>
          <p className="text-[16px] text-[#505050]">#124578</p>
        </div>
      </div>

      {/* Description (only on mobile) */}
      <div className="mt-4 sm:hidden">
        <p className="text-gray-600 text-[16px] font-normal">
          These modern plastic shoes are durable, stylish, and perfect for any
          outdoor activity.
        </p>
        <button className="text-blue-600 text-sm mt-1 text-[16px] font-semibold">
          Read more
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
