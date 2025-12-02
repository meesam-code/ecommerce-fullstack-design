import React, { useEffect } from "react";
import ProductCard from "../ProductCard";
import { UseContext } from "../../Context/EcommerceContext";

const ProductFlexList = ({
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
    <div className="sm:py-6 ">
      {productsToDisplay.length > 0 ? (
        productsToDisplay.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p className="text-center text-gray-500">No items available</p>
      )}
    </div>
  );

  r;
};

export default ProductFlexList;
