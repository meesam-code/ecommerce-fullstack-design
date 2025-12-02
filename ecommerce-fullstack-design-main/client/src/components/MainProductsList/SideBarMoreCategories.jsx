import React, { useState } from "react";

import ButtonComponent from "../Button.jsx";
import ReactSlider from "react-slider";
import { MdOutlineStar } from "react-icons/md";

const initialFilters = {
  "Price range": [
    { id: 1, title: "$0 - $100", selected: false },
    { id: 2, title: "$100 - $500", selected: false },
    { id: 3, title: "$500 - $1000", selected: false },
  ],
  Condition: [
    { id: 1, title: "Any", selected: false },
    { id: 2, title: "Refurbished", selected: false },
    { id: 3, title: "Brand new", selected: false },
    { id: 4, title: "Old items", selected: false },
  ],
  Ratings: [
    {
      id: 1,
      title: (
        <div className="flex items-center gap-1">
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#FF9017]" />
        </div>
      ),
      selected: false,
    },
    {
      id: 2,
      title: (
        <div className="flex items-center gap-1">
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#BDC4CD]" />
        </div>
      ),
      selected: false,
    },
    {
      id: 3,
      title: (
        <div className="flex items-center gap-1">
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#BDC4CD]" />
          <MdOutlineStar className="text-[#BDC4CD]" />
        </div>
      ),
      selected: false,
    },
    {
      id: 4,
      title: (
        <div className="flex items-center gap-1">
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#FF9017]" />
          <MdOutlineStar className="text-[#BDC4CD]" />
          <MdOutlineStar className="text-[#BDC4CD]" />
          <MdOutlineStar className="text-[#BDC4CD]" />
        </div>
      ),
      selected: false,
    },
  ],
  Manufacturer: [
    { id: 1, title: "Samsung", selected: false },
    { id: 2, title: "Apple", selected: false },
    { id: 3, title: "Huawei", selected: false },
  ],
};

const SideBarMoreCategories = () => {
  const [filters, setFilters] = useState(initialFilters);
  const [openSections, setOpenSections] = useState({});
  const [range, setRange] = useState([10, 100]);

  const handleSliderChange = (newRange) => {
    setRange(newRange);
  };

  const handleToggle = (section, id) => {
    setFilters((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        section === "Condition"
          ? { ...item, selected: item.id === id } // Only selected if ids match
          : item.id === id
          ? { ...item, selected: !item.selected }
          : item,
      ),
    }));
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="space-y-2 pr-2 text-sm text-gray-700">
      {Object.entries(filters).map(([section, items]) =>
        section !== "Price range" ? (
          <div key={section} className="border-t border-[#DEE2E7] pb-2 pt-2">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(section)}
            >
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
            </div>

            {openSections[section] && (
              <div className="space-y-2 mt-4">
                {items.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center space-x-3 text-sm"
                  >
                    {section === "Condition" ? (
                      <input
                        type="radio"
                        name="condition"
                        className="accent-blue-600 w-4 h-4"
                        checked={item.selected}
                        onChange={() => handleToggle(section, item.id)}
                      />
                    ) : (
                      <input
                        type="checkbox"
                        className="accent-blue-600 w-4 h-4"
                        checked={item.selected}
                        onChange={() => handleToggle(section, item.id)}
                      />
                    )}

                    <span className="text-[16px] text-[#1C1C1C]">
                      {item.title}
                    </span>
                  </label>
                ))}
                {section !== "Ratings" && (
                  <div className="text-blue-600 text-[16px] mt-2 cursor-pointer">
                    See all
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div key={section} className="border-t border-[#DEE2E7] pb-2 pt-2">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(section)}
            >
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
            </div>
            {openSections[section] && (
              <div className="space-y-3 mt-4">
                <ReactSlider
                  className="w-full h-2 mt-2"
                  thumbClassName="bg-white border-2 border-blue-600 h-5 w-5 rounded-full cursor-pointer -mt-[5px]"
                  min={0}
                  max={1000}
                  value={range}
                  onChange={setRange}
                  renderThumb={(props) => <div {...props} />}
                  renderTrack={(props, state) => {
                    // state.index = 0 (left), 1 (middle), 2 (right)
                    const backgroundColor =
                      state.index === 1
                        ? "#2563eb" /* blue-600 */
                        : "#bfdbfe"; /* blue-200 */
                    return (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          backgroundColor,
                          height: "4px",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      />
                    );
                  }}
                  pearling
                  minDistance={1}
                />

                <div className="flex gap-4 items-center">
                  <div>
                    <label className="text-sm text-gray-700">Min</label>
                    <input
                      type="number"
                      value={range[0]}
                      className="border-1 bg-white text-[#BDC4CD] border-[#DEE2E7] outline-none rounded  h-[40px] px-2 py-1 w-full"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Max</label>
                    <input
                      type="number"
                      value={range[1]}
                      className="border-1 border-[#DEE2E7] text-[#BDC4CD] outline-none h-[40px] bg-white rounded px-2 py-1 w-full"
                      readOnly
                    />
                  </div>
                </div>

                <ButtonComponent
                  type={"button"}
                  className="text-blue-600 border-1 shadow-sm border-[#DEE2E7]  text-[16px] px-[16px] font-semibold py-2 rounded-lg mt-2 cursor-pointer bg-white w-full"
                >
                  Apply
                </ButtonComponent>
              </div>
            )}
          </div>
        ),
      )}
    </div>
  );
};

export default SideBarMoreCategories;
