import React, { useState } from "react";

const CustomCheckBox = ({ handleChange, checked }) => {
  return (
    <label className="inline-flex items-center cursor-pointer space-x-2">
      {/* Hidden native checkbox for accessibility */}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          handleChange();
        }}
        className="sr-only"
      />

      {/* Custom checkbox UI */}
      <div
        className={`w-5 h-5 rounded border border-gray-400 flex items-center justify-center transition-colors duration-200 ${
          checked ? "bg-blue-500" : "bg-white"
        }`}
      >
        {checked && (
          <svg
            className="w-[15px] h-[15px] text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </label>
  );
};

export default CustomCheckBox;
