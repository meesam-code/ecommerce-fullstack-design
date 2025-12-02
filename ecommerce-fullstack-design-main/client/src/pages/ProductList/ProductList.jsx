import React, { useEffect, useMemo, useState } from "react";
import ProductTopList from "../../components/MainProductsList/ProductTopList";
import Sidebar from "../../components/MainProductsList/Sidebar";
import MainProductLeftTop from "../../components/MainProductsList/MainProductLeftTop";
import ProductFlexList from "../../components/MainProductsList/ProductFlexList";
import Pagination from "../../components/Paginantion";
import { UseContext } from "../../Context/EcommerceContext";
import ProductGridLayout from "../../components/MainProductsList/ProductGridLayout";
import FilterTags from "../../components/MainProductsList/FilterTags";
import MobileViewBelowProject from "../../components/MainProductsList/MobileViewBelowProject";
import NewsLetter from "../../components/Home/NewsLetter/NewsLetter";

const ProductList = () => {
  // const [isGrid, setIsGrid] = useState(false);
  const [totalProductsToShow, setTotalProductsToShow] = useState(6);
  const [showFeatured, setShowFeatured] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const { isGridView, initialFilters, setInitialFilters, search, setSearch } =
    UseContext();
  const items = [
    {
      id: 1,
      label: 6,
    },
    {
      id: 2,
      label: 12,
    },
  ];

  const activeFilters = useMemo(() => {
    const selected = [];

    Object.entries(initialFilters).forEach(([_, items]) => {
      items.forEach((item) => {
        if (item.selected) {
          selected.push(item.title);
        }
      });
    });

    return selected;
  }, [initialFilters]);
  const handleRemove = (filterToRemove) => {
    const updatedFilters = {};

    Object.entries(initialFilters).forEach(([section, items]) => {
      updatedFilters[section] = items.map((item) =>
        item.title === filterToRemove ? { ...item, selected: false } : item,
      );
    });

    setInitialFilters(updatedFilters);
  };
  const handleClearAll = () => {
    const clearedFilters = {};

    Object.entries(initialFilters).forEach(([section, items]) => {
      clearedFilters[section] = items.map((item) => ({
        ...item,
        selected: false,
      }));
    });

    setInitialFilters(clearedFilters);
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <div>
      <div className="sm:px-15 md:flex hidden  md:px-[40px] sm:bg-[#f7fafc] lg:px-[50px] sm:pt-[15px] pt-3">
        <ProductTopList />
      </div>
      <div className="sm:px-15 md:px-[40px] sm:bg-[#f7fafc] lg:px-[50px] sm:py-[20px] pt-3">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-[240px] md:inline-block hidden shrink-0  scrollbar-hide top-[100px]  overflow-y-auto">
            <Sidebar />
          </aside>

          <main className="flex-1 min-w-0">
            <div>
              <MainProductLeftTop filters={activeFilters} />
            </div>
            <div className="p-2 px-3  sm:p-4  bg-[#f7fafc] overflow-x-auto whitespace-nowrap w-full scrollbar-hide">
              <FilterTags
                filters={activeFilters}
                onRemoveFilter={handleRemove}
                onClearAll={handleClearAll}
              />
              {search && (
                <div className="text-sm text-gray-600  mt-2 flex items-center gap-2">
                  Showing results for:{" "}
                  <span className="font-semibold">{search}</span>
                  <button
                    onClick={handleClearSearch}
                    className="text-blue-500 underline text-sm"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>

            <div className="p-2 px-3 sm:p-2 bg-[#f7fafc]">
              {isGridView ? (
                <>
                  <ProductGridLayout
                    totalProductsToShow={totalProductsToShow}
                    activePage={activePage}
                    setActivePage={setActivePage}
                  />
                </>
              ) : (
                <ProductFlexList
                  totalProductsToShow={totalProductsToShow}
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              )}
            </div>
            <div>
              <div className="flex justify-center  sm:justify-end items-center mt-4  gap-2">
                <div
                  className="relative"
                  onClick={() => {
                    setShowFeatured(!showFeatured);
                  }}
                >
                  <div className="p-2 border-1 bg-white hover:cursor-pointer flex rounded-lg items-center justify-between  border-[#DEE2E7] w-[100px] ">
                    Show {totalProductsToShow}
                    <img src="/assets/angleDown.png" />
                  </div>
                  {showFeatured && (
                    <div className="absolute top-full left-0 bg-white border-1 border-[#DEE2E7] rounded-lg shadow-lg mt-2 w-full z-10">
                      <ul className="p-2">
                        {items.map((item) => (
                          <li
                            key={item.id}
                            className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setShowFeatured(false);
                              setTotalProductsToShow((prev) =>
                                prev === 6 ? 12 : 6,
                              );
                            }}
                          >
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Pagination
                  totalPages={3}
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              </div>

              <div className="bg-[#f7fafc] mt-2 px-3  p-2">
                <h1 className="mb-2 mt-2 sm:hidden text-[18px] font-semibold">
                  You may also Like
                </h1>
                <div className=" sm:hidden  scrollbar-hide inline-block overflow-x-auto whitespace-nowrap w-full scrollbar-hidden">
                  <MobileViewBelowProject />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
};

export default ProductList;
