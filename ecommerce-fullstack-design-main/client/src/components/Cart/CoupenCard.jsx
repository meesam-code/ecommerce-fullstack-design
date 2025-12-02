import React, { useState } from "react";
import ButtonComponent from "../Button";

const CouponCard = ({ onApply = (code) => {} }) => {
  const [couponCode, setCouponCode] = useState("");

  const handleApply = () => {
    if (couponCode.trim()) {
      onApply(couponCode.trim());
      setCouponCode(""); // optional: clear after apply
    }
  };

  return (
    <div className="w-full md:max-w-[230px] lg:max-w-[300px] bg-white border border-[#DEE2E7] rounded-md p-4 shadow-sm flex flex-col gap-3">
      {/* Heading */}
      <h3 className="text-base font-semibold text-[#404040]">Any Coupon?</h3>

      {/* Input + Apply */}
      <div className="lg:flex-row md:flex-col flex items-center gap-2">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter code"
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <ButtonComponent
          onClick={handleApply}
          className="px-3 py-2 cursor-pointer text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Apply
        </ButtonComponent>
      </div>
    </div>
  );
};

export default CouponCard;
