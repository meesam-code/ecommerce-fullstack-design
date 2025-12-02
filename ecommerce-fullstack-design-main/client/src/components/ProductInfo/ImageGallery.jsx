import React, { useState } from "react";

const ImageGallery = ({ currentProduct }) => {
  if (!currentProduct) return <p>Loading...</p>;
  const [currIndex, setCurrIndex] = React.useState(0);

  return (
    <div className="flex flex-col items-center ">
      <div className=" rounded-md border-1 border-[#DEE2E7] p-1">
        <img
          src={currentProduct?.image?.[currIndex]}
          alt="product"
          className=" h-[350px] w-[350px]  md:h-[300px] md:w-[300px] lg:w-[335px] lg:h-[335px] xl:w-[345px] xl:h-[345px] object-contain"
        />
      </div>

      <div className="flex gap-1 xl:gap-2  mt-2">
        {currentProduct?.image?.map((img, index) => (
          <div
            key={index}
            className={`rounded-lg p-1 border-1 ${
              index === currIndex ? " border-[#505050]" : " border-[#DEE2E7]"
            }`}
          >
            <img
              src={img}
              alt={`product-thumbnail-${index}`}
              className={`w-15 h-15 md:w-9 md:h-9 lg:w-13 lg:h-13 xl:w-15 xl:h-15 object-contain cursor-pointer 
            `}
              onClick={() => {
                // Logic to change the main image can be added here
                setCurrIndex(index);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
