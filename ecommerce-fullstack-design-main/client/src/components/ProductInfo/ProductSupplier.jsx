import React, { useState } from "react";
import ButtonComponent from "../Button";
import InquiryModal from "./InquiryModel";
import { UseContext } from "../../Context/EcommerceContext";
import { replace, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ProductSupplier = ({ currentProduct }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart, user } = UseContext();

  const sellerInfoList = [
    {
      icon: "/assets/DE@2x.png",
      title: "Germany, Berlin",
    },
    {
      icon: "/assets/protected.png",
      title: "Verified Seller",
    },
    {
      icon: "/assets/globe.png",
      title: "Worldwide shipping",
    },
  ];
  const sellerInfoListSm = [
    {
      icon: "/assets/DE@2x.png",
      title: "Germany",
    },
    {
      icon: "/assets/protected.png",
      title: "Verified",
    },
    {
      icon: "/assets/globe.png",
      title: "Shipping",
    },
  ];

  const handleInquiry = () => {
    if (!currentProduct) return;
    if (!user) {
      toast.error("Please login to send an inquiry ");
      return;
    }

    if (currentProduct.inStock === false) {
      toast.error("Product is out of stock");
      return;
    }
    const item = {
      id: currentProduct._id,
      price: currentProduct.price,
      quantity: 1,
      replace: true,
    };

    setShowPopup(true);
    toast.success("Items added to cart");
    addToCart(item);
  };
  return (
    <div className="border-1 border-[#DEE2E7] rounded p-4 sm:px-2 mb-3 w-full bg-white  sm:w-[480px] md:w-full shadow max-w-md">
      <div className="flex items-center gap-4 border-b-1 p-2 pb-4 border-[#DEE2E7]">
        <div className="bg-[#C6F3F1] h-[48px] w-[48px] rounded flex items-center justify-center">
          <img src="/assets/R.png" className="w-6 w-4" alt="R" />
        </div>
        <div>
          <p>Supplier</p>
          <p>Guanjoi Trading LLC</p>
        </div>
      </div>
      <div className="sm:inline-block hidden">
        {sellerInfoList.map((item, index) => (
          <div key={index} className="flex  items-center gap-3 mt-4">
            <img src={item.icon} alt={item.title} className="w-4 h-4" />
            <p className="text-sm text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center  sm:hidden gap-3">
        {sellerInfoListSm.map((item, index) => (
          <div key={index} className="flex  items-center gap-3 mt-4">
            <img src={item.icon} alt={item.title} className="w-4 h-4" />
            <p className="text-sm text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
      $
      {user && currentProduct && currentProduct.inStock ? (
        <ButtonComponent
          type={"button"}
          className="bg-[#0D6EFD] cursor-pointer text-white w-full rounded-lg py-2 mt-4"
          onClick={handleInquiry}
        >
          Add to Cart
        </ButtonComponent>
      ) : (
        <ButtonComponent
          type={"button"}
          className="bg-[#0D6EFD] cursor-pointer text-white w-full rounded-lg py-2 mt-4"
          onClick={handleInquiry}
        >
          Send Inquiry
        </ButtonComponent>
      )}
      <ButtonComponent
        type={"button"}
        className="bg-white border-1 sm:inline-block hidden border-[#DEE2E7]  w-full text-[#0D6EFD] rounded-lg py-2 mt-4 "
      >
        Seller’s profile
      </ButtonComponent>
      {showPopup && <InquiryModal onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default ProductSupplier;
