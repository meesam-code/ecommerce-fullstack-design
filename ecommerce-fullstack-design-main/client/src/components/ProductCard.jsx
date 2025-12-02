import { useEffect, useState } from "react";
import { UseContext } from "../Context/EcommerceContext";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { isGridView } = UseContext();
  const [isWidthBelow400, setIsWidthBelow400] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWidthBelow400(window.innerWidth < 400);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Link
      to={`productInfo/${product._id}`}
      className={`flex ${
        isGridView ? "flex-col" : "flex-row"
      } gap-3 sm:gap-4 sm:p-4 p-2 bg-white w-full  border border-[#DEE2E7] rounded-md mb-4 relative `}
    >
      <div
        className={` ${
          isGridView
            ? " flex items-center w-full h-full  justify-center"
            : "lg:w-[190px]  lg:h-[190px] h-[100px] w-[100px] sm:w-[160px] sm:h-[160px]"
        } `}
      >
        {product.image ? (
          <img
            src={product.image[0]}
            alt={product.title}
            className={`${
              isGridView
                ? "w-[200px] h-[200px] object-contain"
                : "w-full h-full object-contain"
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>
      <div className="flex-1">
        {!isGridView && (
          <>
            <h2 className="hidden lg:inline-block lg:text-lg font-semibold text-gray-900">
              {product.title}
            </h2>
          </>
        )}
        {!isGridView && (
          <>
            <h2 className=" lg:hidden text-[#505050] text-[16px] sm:text-lg font-semibold ">
              {product.title}
            </h2>
          </>
        )}
        <div className="flex items-center gap-2 text-sm mt-1">
          <span className="text-[#1C1C1C] text-[20px] font-semibold">
            ${product.price}
          </span>
          {product.oldPrice && (
            <span className="line-through sm:inline hidden text-[#8B96A5] text-[16px]">
              ${product.oldPrice}
            </span>
          )}
        </div>
        <div className="flex-col sm:flex-row items-center gap-1 sm:gap-2 text-sm mt-1">
          {/* Star Ratings */}
          <div className="flex items-center gap-1 text-[#FF9017] text-[16px]">
            <span>★★★★★</span> {/* You can replace this with real star icons */}
            <span className="text-[#FF9017] text-[14px] font-medium">
              {product.rating}
            </span>
            <span className="text-[#DEE2E7] inline sm:hidden">•</span>
            {/* Orders */}
            <span className="text-[#8B96A5] text-[14px]  inline sm:hidden">
              {product.orders} order
            </span>
            {/* Dot separator */}
          </div>
          <div className="sm:hidden block">
            <span className="text-[#00B517] text-[14px] font-medium">
              Free Shipping
            </span>
          </div>

          {/* Dot separator */}
          {!isGridView && (
            <div className=" items-center sm:flex hidden gap-1">
              <span className="text-[#DEE2E7]">•</span>

              {/* Orders */}
              <span className="text-[#8B96A5] text-[14px]">
                {product.orders} orders
              </span>

              {/* Dot separator */}
              <span className="text-[#DEE2E7]">•</span>

              {/* Free Shipping */}
              <span className="text-[#00B517] text-[14px] font-medium">
                Free Shipping
              </span>
            </div>
          )}
        </div>
        {isGridView && (
          <h2 className="text-[16px]  text-[#606060]">{product.title}</h2>
        )}

        {!isGridView && (
          <p className="text-[16px] hidden lg:inline-block text-[#505050] mt-2">
            {product.description}
          </p>
        )}
        {!isGridView && (
          <p className="text-[16px] hidden sm:inline-block lg:hidden  text-[#505050] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        )}
        {!isGridView && (
          <button className="text-blue-600 hidden sm:flex text-[16px] font-semibold mt-2 hover:underline">
            View details
          </button>
        )}
      </div>
      {isGridView ? (
        <div className="absolute right-4 bottom-19 p-2 border-1 border-[#DEE2E7] rounded-md shadow-sm">
          <img
            src="/assets/blueHeart.png"
            alt="Blue Heart"
            className="w-[20px] h-[20px]"
          />
        </div>
      ) : (
        <div
          className={`absolute right-3  hidden  sm:inline-block
          } sm:right-4 top-5 sm:top-6 p-2 border-1 border-[#DEE2E7] rounded-md shadow-sm`}
        >
          <img
            src="/assets/blueHeart.png"
            alt="Blue Heart"
            className="w-[20px] h-[20px]"
          />
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
