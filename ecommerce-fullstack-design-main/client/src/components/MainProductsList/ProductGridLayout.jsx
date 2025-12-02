import React, { useEffect } from "react";
import { UseContext } from "../../Context/EcommerceContext";
import ProductCard from "../ProductCard";

const ProductGridLayout = ({
  totalProductsToShow,
  activePage,
  setActivePage,
}) => {
  const { products } = UseContext();

  const productsPerPage = totalProductsToShow;
  const startIndex = (activePage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const productsToDisplay = products.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activePage]);
  useEffect(() => {
    setActivePage(1);
  }, [totalProductsToShow]);

  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3 py-6 w-full">
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No items available</p>
        )}
      </div>
    </div>
  );
};

export default ProductGridLayout;
