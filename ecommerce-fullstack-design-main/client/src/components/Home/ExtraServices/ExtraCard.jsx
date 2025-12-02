import React from "react";

const ExtraCard = ({ item }) => {
  return (
    <div className=" w-[230px] sm:w-[280px] h-[200px] border-1 bg-white mb-4 rounded border-[#E0E0E0]">
      <figure className="relative">
        <img
          src={item.image}
          className="h-[120px] w-[230px] sm:w-[280px] rounded-t   bg-black"
          alt="image"
        />
        <div className="absolute -bottom-7 rounded-full right-5 p-4 h-[55px] border-[2px] border-[#FFFFFF] w-[55px] bg-[#D1E7FF]">
          <img src={item.logo} className="w-[18px] h-[18px] text-black" />
        </div>
      </figure>

      <h2 className="p-3 font-medium text-[16px]">
        Source from <br /> industry hub
      </h2>
    </div>
  );
};

export default ExtraCard;
