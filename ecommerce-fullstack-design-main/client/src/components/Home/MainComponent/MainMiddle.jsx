import React from "react";
import ButtonComponent from "../../Button";

const MainMiddle = () => {
  return (
    <div
      className="w-full h-[250px] md:w-full  md:h-[390px] lg:h-[410px] xl:h-[455px]
  bg-[url('/assets/Banner-board-main.png')] 
  bg-cover md:bg-cover 
  bg-center bg-no-repeat 
  p-4 lg:p-6 sm:pt-10 pt-10 lg:pt-15 pl-5 lg:pl-15 
  flex flex-col"
    >
      <p className="text-[22px]  sm:text-[28px] font-[400]">Latest trending</p>
      <h1 className="text-[27px]  sm:text-[32px] font-medium sm:font-bold mb-2">
        Electronic items
      </h1>

      <div className="mt-3 pb-12 sm:pb-0">
        <ButtonComponent
          type={"button"}
          className="  bg-[#FFFFFF] font-medium cursor-pointer rounded-md text-[#0D6EFD] md:text-[#1c1c1c] px-4 py-2"
        >
          Learn More
        </ButtonComponent>
      </div>
    </div>
  );
};

export default MainMiddle;
