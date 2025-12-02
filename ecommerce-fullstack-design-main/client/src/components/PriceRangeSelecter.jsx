import { useState } from "react";

function PriceRangeSelector({ section }) {
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value <= maxPrice) setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value >= minPrice) setMaxPrice(value);
  };

  return (
    <div key={section} className="border-t border-[#DEE2E7] pb-2 pt-2">
      <h3 className="font-semibold text-[16px] text-[#1C1C1C] capitalize">
        {section}
      </h3>
      <img
        src={
          openSections[section]
            ? "/assets/angleTop.png"
            : "/assets/angleDown.png"
        }
        alt=""
        className="w-[12px] h-[8px]"
      />
      <div className="space-y-4 mt-4">
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-gray-700">Min: ${minPrice}</label>
          <input
            type="range"
            min={10}
            max={100}
            value={minPrice}
            onChange={handleMinChange}
            className="accent-blue-600"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-gray-700">Max: ${maxPrice}</label>
          <input
            type="range"
            min={10}
            max={100}
            value={maxPrice}
            onChange={handleMaxChange}
            className="accent-blue-600"
          />
        </div>

        <div className="text-blue-600 text-[16px] mt-2 cursor-pointer">
          See all
        </div>
      </div>
    </div>
  );
}

export default PriceRangeSelector;
