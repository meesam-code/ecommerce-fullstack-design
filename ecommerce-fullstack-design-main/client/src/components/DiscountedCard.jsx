import React from "react";

const PromoCard = () => {
  return (
    <div
      className="flex justify-between items-center rounded-md px-6 py-9 relative overflow-hidden text-white"
      style={{
        backgroundImage: `
          url('/assets/Rectangle 177.png'),
          url('/assets/Rectangle 178.png')
        `,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "left center, right center",
        backgroundSize: "70% 100%, 30% 100%",
        backgroundColor: "#0d6efd",
      }}
    >
      <div>
        <h2 className="font-semibold text-lg sm:text-xl">
          Super discount on more than 100 USD
        </h2>
        <p className="text-sm mt-1 text-gray-200">
          Have you ever finally just write dummy info
        </p>
      </div>
      <button className="bg-[#FF9017] hover:bg-orange-600 text-white px-4 py-2 rounded text-sm">
        Shop now
      </button>
    </div>
  );
};

export default PromoCard;
