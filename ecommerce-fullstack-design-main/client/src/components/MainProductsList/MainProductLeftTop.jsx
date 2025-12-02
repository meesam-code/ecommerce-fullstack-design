import React, { useState } from "react";
import CustomCheckBox from "../CustomCheckBox";
import { UseContext } from "../../Context/EcommerceContext";
import FilterTags from "./FilterTags";

const MainProductLeftTop = ({ filters }) => {
  const [showFeatured, setShowFeatured] = React.useState(false);
  const [feature, setFeature] = useState("Featured");
  const { isGridView, toggleView } = UseContext();
  const [isActive, setIsActive] = useState(false);
  const menuItems = [
    { id: 1, label: "Featured" },
    { id: 2, label: "Most Popular" },
    { id: 3, label: "Best Rated" },
  ];

  return (
    <div className="bg-white flex  lg:flex-row justify-between items-center lg:items-center sm:rounded-lg border border-[#DEE2E7] px-3 py-2 gap-1 sm:gap-2">
      {/* Show on large screens only */}
      <div className="hidden md:flex items-center gap-2 lg:gap-4">
        <p className="text-[#495057] sm:text-[12px] lg:text-[16px]">
          12,911 items in <b>Mobile accessory</b>
        </p>
        <div className="flex items-center gap-2">
          <CustomCheckBox
            checked={isActive}
            handleChange={() => setIsActive(!isActive)}
          />
          <p className="text-[14px]">Verified only</p>
        </div>
      </div>

      {/* Show on small screens only */}
      <div className="flex flex-row gap-1 sm:gap-2 md:hidden  justify-between">
        <div className="p-1 border flex  border-[#DEE2E7] hover:cursor-pointer  rounded-lg items-center justify-between w-[130px] sm:w-[122px]">
          <p> Sort: nearest</p>
          <img
            src="/assets/filterMenu.png"
            className="w-3 h-3 object-contain"
          />
        </div>
        <div className="p-1 flex items-center  border border-[#DEE2E7] hover:cursor-pointer rounded-lg items-center justify-between w-[80px] sm:w-[122px]">
          <span>Filter({filters.length})</span>
          <img src="/assets/filter.png" className="w-3 h-3 object-contain" />
        </div>
      </div>

      {/* Shared Options */}
      <div className="flex gap-2 lg:gap-4 items-center self-end lg:self-auto">
        {/* Sort dropdown */}
        <div
          className="relative "
          onClick={() => setShowFeatured(!showFeatured)}
        >
          <div className="p-2 border lg:flex hidden border-[#DEE2E7] hover:cursor-pointer  rounded-lg items-center justify-between w-[172px]">
            {feature}
            <img src="/assets/angleDown.png" />
          </div>
          {showFeatured && (
            <div className="absolute top-full left-0 bg-white border border-[#DEE2E7] rounded-lg shadow-lg mt-2 w-full z-10">
              <ul className="p-2">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFeature(item.label);
                      setShowFeatured(false);
                    }}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Grid/List toggle */}
        <div className="flex items-center justify-center border border-[#DEE2E7] rounded">
          <div
            className={`sm:p-2 p-1 ${
              isGridView ? "bg-[#EFF2F4]" : "bg-white"
            } border-r border-[#DEE2E7] rounded-l`}
            onClick={toggleView}
          >
            <img
              src="/assets/grid.png"
              alt="Grid View"
              className="sm:w-6 sm:h-6 w-6 h-6 cursor-pointer"
            />
          </div>
          <div
            className={`sm:p-2 p-1 ${
              !isGridView ? "bg-[#EFF2F4]" : "bg-white"
            } rounded-r`}
            onClick={toggleView}
          >
            <img
              src="/assets/boldMenu.png"
              alt="List View"
              className="sm:w-6 sm:h-6 w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProductLeftTop;
