import React, { useEffect, useState } from "react";
import ButtonComponent from "../Button";

const OutDoorConsumerReusableComponent = ({ bgImage, items, text }) => {
  const firstRow = items.slice(0, 4);
  const secondRow = items.slice(4, 8);
  const allItems = [...firstRow, ...secondRow];

  const [isSmUp, setIsSmUp] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreen = () => {
      setIsSmUp(window.innerWidth >= 640); // sm: 640px in Tailwind
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="flex  flex-col sm:flex-row w-full border-b-1 border-[#E0E0E0] overflow-hidden">
      {/* Left section */}
      <div
        className=" py-2 sm:p-5  sm:border-1 sm:border-[#E0E0E0] sm:min-h-[240px] w-full sm:w-[290px] flex-shrink-0 sm:rounded-l sm:rounded-tr-none flex flex-col justify-between sm:bg-cover sm:bg-center"
        style={{
          backgroundImage: isSmUp
            ? `url(${bgImage.replace(/ /g, "%20")})`
            : "none",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white/80 p-2 px-4 rounded sm:bg-transparent sm:p-0">
          <h2 className="text-[20px] hidden sm:block font-bold text-[#1C1C1C] leading-tight">
            {text.includes("Consumer") ? (
              <>
                Consumer <br />
                electronics and
                <br /> gadgets
              </>
            ) : (
              <>
                Home <br />
                and outdoor
              </>
            )}
          </h2>
          <h2 className="text-[20px] sm:hidden font-bold text-[#1C1C1C] leading-tight">
            {text.includes("Consumer")
              ? "Consumer electronics"
              : "Home and outdoor"}
          </h2>
          <ButtonComponent
            className="bg-white sm:inline-block hidden text-black py-2 px-4 rounded font-medium mt-3 w-fit"
            type="button"
          >
            Source now
          </ButtonComponent>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        {/* Mobile view - horizontal scroll */}
        <div className="flex sm:hidden   min-w-[880px]">
          {allItems.map((item) => (
            <div
              key={item.id}
              className="w-[140px] h-[160px] bg-white border border-[#E0E0E0] flex-shrink-0 flex flex-col items-center justify-between p-4"
            >
              <figure className="flex justify-center mb-1 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[60px] h-[60px] object-contain"
                />
              </figure>
              <div>
                <h3 className="text-sm font-semibold text-[#1C1C1C]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8B96A5] mt-1">{item.from}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view - 2 rows grid */}
        <div className="hidden sm:grid grid-rows-2 scrollbar-hide">
          {[firstRow, secondRow].map((row, rowIndex) => (
            <div key={rowIndex} className="flex ">
              {row.map((item) => (
                <div
                  key={item.id}
                  className="w-[220px] h-[120px] bg-white border border-[#E0E0E0] flex flex-col justify-between p-4 flex-shrink-0"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1C1C]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8B96A5] mt-1">{item.from}</p>
                  </div>
                  <figure className="flex justify-end">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[60px] h-[60px] object-contain"
                    />
                  </figure>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <ButtonComponent
        className="bg-white mb-2 flex items-center gap-1 sm:hidden text-[16px] inline-block text-[#0D6EFD] py-2 px-4 rounded font-medium mt-3 w-fit"
        type="button"
      >
        <span>Source now</span>
        <img
          src="/assets/arrowRight.png"
          className="h-[15px] w-[15px] inline ml-2"
        />
      </ButtonComponent>
    </div>
  );
};

export default OutDoorConsumerReusableComponent;
