import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button";
import { UseContext } from "../../Context/EcommerceContext";
import OrderConfirmCard from "./OrderConfirmCard.jsx";

const OrderSummaryCard = () => {
  const { cart } = UseContext();
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [smallScreenTotal, setSmallScreenTotal] = useState(0);
  const { orderConfirm, setOrderConfirm } = UseContext();

  function calculateOrder() {
    const cartSubTotal = cart.reduce((prev, curr) => {
      return prev + curr.price * curr.quantity;
    }, 0);

    setSubTotal(cartSubTotal);
    if (cartSubTotal > 0) {
      let smallTotalCalculated = cartSubTotal + 10 + 14;
      let totalCalculatedResult = cartSubTotal + 14;
      if (cartSubTotal > 99) {
        totalCalculatedResult = cartSubTotal + 14 - 60;
      }

      setSmallScreenTotal(smallTotalCalculated);
      setTotal(totalCalculatedResult);
      return;
    }
    setTotal(0);
    setSmallScreenTotal(0);
  }

  useEffect(() => {
    calculateOrder();
  }, [cart]);

  const handleOrderConfirm = () => {
    if (cart.length > 0) {
      setOrderConfirm({
        orderId: "ORD-123456",
        amount: total,
        shippingAddress: "123 Main St, Lahore, Pakistan",
        estimatedDelivery: "June 20, 2025",
      });
    }
  };

  return (
    <div className="w-full md:max-w-[230px]  lg:max-w-[300px]  bg-white sm:rounded-md sm:shadow-sm p-4 border border-[#DEE2E7]">
      <h2 className="text-lg font-semibold text-[#1C1C1C] mb-4 sm:inline-block hidden">
        Order Summary
      </h2>

      <div className="space-y-2 text-sm text-[#606060]">
        <div className="flex justify-between text-[16px]">
          <span className="hidden sm:inline">Subtotal:</span>
          <span className="sm:hidden text-[#505050]">
            items ({cart.length}):
          </span>
          <span>${subTotal}</span>
        </div>
        <div className="flex text-[16px] justify-between">
          <span className="hidden sm:inline">Discount:</span>
          <span className="sm:hidden">Shipping:</span>
          <span className="hidden sm:inline text-[#FA3434]">- $60</span>
          <span className="sm:hidden ">$10</span>
        </div>
        <div className="flex justify-between text-[16px]">
          <span>Tax:</span>
          <span>
            <span className="sm:inline hidden text-[#00B517]">+</span>{" "}
            <span className="sm:text-[#00B517]">$14</span>
          </span>
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      <div className="flex justify-between font-semibold text-[#1C1C1C] text-base mb-4">
        <span>Total:</span>
        <span className="hidden sm:inline">${total}</span>
        <span className="sm:hidden">{smallScreenTotal}</span>
      </div>

      <ButtonComponent
        onClick={handleOrderConfirm}
        className="w-full bg-[#00B517] cursor-pointer hover:bg-green-600 text-white py-2 rounded-lg font-medium"
      >
        Checkout <span className="md:hidden">({cart.length} items)</span>
      </ButtonComponent>

      <div className="hidden md:flex items-center justify-around mt-4">
        <div className="bg-white border-1 border-[#EEEEEE] p-1 rounded-md">
          <img
            src="/assets/debit.png"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div className="bg-white border-1 border-[#EEEEEE] p-1 rounded-md">
          <img
            src="/assets/paypal.png"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div className="bg-white border-1 border-[#EEEEEE] p-1 rounded-md">
          <img
            src="/assets/visa.png"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
        <div className="bg-white border-1 border-[#EEEEEE] p-1 rounded-md">
          <img
            src="/assets/image 21.png"
            className="w-4 h-4 object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
