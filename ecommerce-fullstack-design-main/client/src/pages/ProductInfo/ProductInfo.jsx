import React, { useEffect, useState } from "react";
import ImageGallery from "../../components/ProductInfo/ImageGallery";
import ProductDetail from "../../components/ProductInfo/ProductDetail";
import ProductSupplier from "../../components/ProductInfo/ProductSupplier";
import ProductTopList from "../../components/MainProductsList/ProductTopList";
import { useParams } from "react-router-dom";
import { UseContext } from "../../Context/EcommerceContext";
import ProductDescriptionShipping from "../../components/ProductInfo/ProductDescriptionShipping";
import DummyCard from "../../components/DummyCard";
import SimpleCard from "../../components/SimpleCard";
import ImageSlider from "../../components/ProductInfo/imageSliderSm";
import PromoCard from "../../components/DiscountedCard";

const ProductInfo = () => {
  const { products } = UseContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    if (products.length > 0) {
      const elem = products.find((prod) => prod._id === id);
      if (!elem) console.warn("No product found with ID:", id);
      setCurrentProduct(elem);
    }
  }, [id, products]);

  return (
    <div className="sm:px-15 flex flex-col   md:px-[25px] sm:bg-[#f7fafc] lg:px-[50px] sm:pt-[15px] sm:pt-3">
      <div className="sm:inline-block hidden">
        <ProductTopList />
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-between py-5 pb-0 sm:pb-10 sm:px-2 xl:px-5 sm:gap-2 sm:mt-3 bg-white border border-[#DEE2E7]">
        <div className="w-full hidden sm:inline-block md:w-auto">
          <ImageGallery currentProduct={currentProduct} />
        </div>
        <div className="w-full sm:hidden md:w-auto">
          <ImageSlider currentProduct={currentProduct} />
        </div>
        <div className="w-full md:w-auto sm:border-none pb-3 sm:pb-0 border-b-1  border-[#DEE2E7] ">
          <ProductDetail currentProduct={currentProduct} />
        </div>
        <div className="w-full   bg-[#f7fafc] sm:bg-white pt-4 h-full md:mt-0 sm:flex sm:justify-center md:justify-end md:w-auto">
          <div className=" flex flex-col  items-center gap-2 px-3 sm:px-1 mb-2">
            <ProductSupplier currentProduct={currentProduct} />
            <div className=" items-center gap-3 mt-5 md:flex hidden">
              <div className="flex items-center justify-center ">
                <img
                  src="/assets/blueHeart.png"
                  className="w-4 h-4 object-contain"
                  alt="blue heart"
                />
              </div>

              <p className="text-[16px] font-semibold text-[#0D6EFD]">
                Save for later
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-between gap-2 hidden sm:flex  mt-3 mb-3  ">
        <div className="bg-white sm:border-1 sm:inline-block hidden border-[#DEE2E7] lg:min-w-lg xlg:min-w-3xl p-2">
          <ProductDescriptionShipping />
        </div>
        <div className="bg-white sm:border-1 lg:inline-block hidden  flex flex-col border-[#DEE2E7]">
          <h2 className="text-xl  p-2 font-semibold">You may like</h2>
          <div className="flex flex-col">
            {products.slice(0, 6).map((product) => (
              <SimpleCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className=" p-2 px-3 mb-2  bg-[#f7fafc] sm:bg-white">
        <h2 className="text-xl hidden sm:inline-block font-semibold p-2">
          Related Items
        </h2>
        <h2 className="text-xl sm:hidden font-semibold p-2">
          Similar products
        </h2>
        <div className="flex gap-5 overflow-x-auto  whitespace-nowrap scrollbar-hide  ">
          {products.length > 0 &&
            products
              .slice(0, 5)
              .map((product) => (
                <DummyCard key={product._id} product={product} isInfo={true} />
              ))}
        </div>
      </div>
      <div className="mt-3 mb-20 md:inline-block hidden">
        <PromoCard />
      </div>
    </div>
  );
};

export default ProductInfo;
