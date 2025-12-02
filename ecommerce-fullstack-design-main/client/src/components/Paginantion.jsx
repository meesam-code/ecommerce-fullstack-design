import React, { useState } from "react";

const Pagination = ({ totalPages = 3, activePage, setActivePage }) => {
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
    }
  };

  return (
    <div className="flex items-center justify-center   rounded-lg border-1 border-[#DEE2E7] bg-white">
      <button
        onClick={() => goToPage(activePage - 1)}
        className="bg-white text-[#8B96A5] border-1 border-[#DEE2E7] font-extrabold hover:text-gray-400 px-3 py-2 rounded-l-lg "
        disabled={activePage === 1}
      >
        &lt;
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const pageNum = index + 1;
        return (
          <button
            key={pageNum}
            onClick={() => goToPage(pageNum)}
            className={`px-3 py-2 border-1 font-semibold border-[#DEE2E7]  ${
              activePage === pageNum
                ? "bg-[#EFF2F4] text-[#8B96A5]"
                : "text-black bg-white"
            } `}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        onClick={() => goToPage(activePage + 1)}
        className=" bg-white border-1 border-[#DEE2E7] font-extrabold hover:text-gray-400 px-3 py-2 rounded-r-lg"
        disabled={activePage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
