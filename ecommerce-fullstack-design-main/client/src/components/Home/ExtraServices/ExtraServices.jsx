import React from "react";
import ExtraCard from "./ExtraCard";

const ExtraServices = () => {
  const extraItems = [
    {
      id: 1,
      image: "/assets/image 108.png",
      text: "Source from Industry Hubs",
      logo: "/assets/search.png",
    },
    {
      id: 2,
      image: "/assets/image 104.png",
      text: "Customize Your Products",
      logo: "/assets/blackList.png",
    },
    {
      id: 3,
      image: "/assets/image 106.png",
      text: "Fast, reliable shipping by ocean or air",
      logo: "/assets/arrows.png",
    },
    {
      id: 4,
      image: "/assets/image 107.png",
      text: "Product monitoring and inspection",
      logo: "/assets/shield.png",
    },
  ];

  return (
    <div>
      <h1 className="text-black text-[24px] font-bold pb-2 sm:p-4">
        Extra Services
      </h1>
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 min-w-[1200px]">
          {extraItems.map((item) => (
            <ExtraCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
