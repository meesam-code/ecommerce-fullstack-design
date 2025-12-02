import React, { useState } from "react";

const ImageSlider = ({ currentProduct }) => {
  const [currIndex, setCurrIndex] = useState(0);

  if (!currentProduct) return <p>Loading...</p>;

  const images = currentProduct?.image || [];

  const handlePrev = () => {
    setCurrIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col items-center">
      <img
        src={images[currIndex]}
        alt="product"
        className="h-[300px] w-[300px] lg:w-[335px] lg:h-[335px] xl:w-[345px] xl:h-[345px] object-contain "
      />

      <div className="absolute bottom-2 right-7 flex gap-1 bg-black/25 rounded-full p-1">
        <button
          onClick={handlePrev}
          className="text-white p-1 hover:opacity-80"
        >
          <img
            src="/assets/leftArrowWhite.png"
            alt="left arrow"
            className="w-5 h-5 object-contain"
          />
        </button>
        <button
          onClick={handleNext}
          className="text-white p-1 hover:opacity-80"
        >
          <img
            src="/assets/rightArrowWhite.png"
            alt="left arrow"
            className="w-5 h-5  object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
