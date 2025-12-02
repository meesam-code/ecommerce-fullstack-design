import React, { useEffect, useState } from "react";

const HomeDeal = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-06-25") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0",
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24),
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0",
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const dealItems = [
    { url: "/assets/image 35.png", title: "Smart Watch", discount: 25 },
    { url: "/assets/image 34.png", title: "Smart Watch", discount: 15 },
    { url: "/assets/image 28.png", title: "Smart Watch", discount: 40 },
    { url: "/assets/image 29.png", title: "Smart Watch", discount: 25 },
    { url: "/assets/image 23.png", title: "Smart Watch", discount: 25 },
  ];

  return (
    <div className="flex flex-col sm:flex-row">
      {/* Countdown block */}
      <div className="px-4 pt-4 pr-6  sm:border-1 sm:border-[#E0E0E0] bg-white rounded-t sm:rounded-l sm:rounded-tr-none flex flex-row gap-2 sm:gap-0 justify-between sm:justify-start sm:flex-col w-full sm:w-fit">
        <div>
          <h2 className="text-lg sm:text-2xl font-bold text-black">
            Deals and offers
          </h2>
          <p className="text-gray-400 text-sm mb-4">Hygiene equipments</p>
        </div>

        <div className="flex gap-1">
          {Object.entries(timeLeft).map(([label, value]) => {
            const isSmallScreenHidden =
              label === "days" ? "hidden sm:block " : "";
            return (
              <div
                key={label}
                className={`bg-[#EFF2F4] sm:bg-[#606060]     h-[50px] sm:h-auto text-black px-1 sm:px-2 py-1 sm:rounded text-center ${isSmallScreenHidden}`}
              >
                <div className="sm:text-xl text-[#8B96A5] sm:text-white text-sm font-bold">
                  {value}
                </div>
                <div className=" text-[8px] sm:text-xs text-[#8B96A5] sm:text-white uppercase">
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scrollable products row */}
      <div className="overflow-x-auto scrollbar-hide whitespace-nowrap sm:whitespace-normal flex sm:flex-row">
        {dealItems.map((item, index) => (
          <div
            key={index}
            className="inline-block sm:flex flex-col w-full items-center justify-center min-w-[180px] p-4 bg-white border-1 border-[#E0E0E0] "
          >
            <figure className="w-[130px] h-[130px] flex items-center justify-center">
              <img
                src={item.url}
                alt={item.title}
                className="w-[110px] h-[100px] mb-2"
              />
            </figure>
            <h3 className="text-lg font-semibold text-black">{item.title}</h3>
            <div className="bg-[#FFE3E3] w-[65px] flex justify-center items-center px-3 py-1 mt-2 rounded-full">
              <p className="text-[#EB001B] font-medium text-[14px]">
                -{item.discount}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDeal;
