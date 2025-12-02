import React from "react";

const FilterTags = ({ filters, onRemoveFilter, onClearAll }) => {
  return (
    <div className="min-w-max flex gap-2 items-center whitespace-nowrap">
      {filters.map((filter, index) => (
        <div
          key={index}
          className="flex items-center border-[2px] border-[#0D6EFD] text-gray-700 text-sm px-3 py-1 rounded-lg"
        >
          {filter}
          <button
            type="button"
            onClick={() => onRemoveFilter(filter)}
            className="ml-2 text-gray-500 text-xl cursor-pointer hover:text-red-500 focus:outline-none"
            aria-label={`Remove ${filter}`}
          >
            ×
          </button>
        </div>
      ))}

      {filters.length > 0 && (
        <button
          type="button"
          onClick={onClearAll}
          className="text-blue-600 text-sm hover:underline ml-2"
        >
          Clear all filter
        </button>
      )}
    </div>
  );
};

export default FilterTags;
