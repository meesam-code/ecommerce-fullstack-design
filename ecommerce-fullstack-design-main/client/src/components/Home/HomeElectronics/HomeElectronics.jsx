import React from "react";
import OutDoorConsumerReusableComponent from "../OutDoorConsumerReusableComponent";

const HomeElectronics = () => {
  const homeItems = [
    {
      id: 1,
      title: "Smart watches",
      from: "From USD 19",
      image: "/assets/image 35.png",
    },
    {
      id: 2,
      title: "Cameras",
      from: "From USD 19",
      image: "/assets/image 28.png",
    },
    {
      id: 3,
      title: "Head phones",
      from: "From USD 19",
      image: "/assets/image 86.png",
    },
    {
      id: 4,
      title: "Smart watches",
      from: "From USD 100",
      image: "/assets/image 85.png",
    },
    {
      id: 5,
      title: "Gaming set",
      from: "From USD 39",
      image: "/assets/image 29.png",
    },
    {
      id: 6,
      title: "Laptops & PC",
      from: "From USD 19",
      image: "/assets/image 34.png",
    },
    {
      id: 7,
      title: "Smart phones",
      from: "From USD 10",
      image: "/assets/image 32.png",
    },
    {
      id: 8,
      title: "Electric kattle",
      from: "From USD 19",
      image: "/assets/image 33.png",
    },
  ];
  return (
    <div className="sm:border-1  bg-white sm:border-[#E0E0E0]">
      <OutDoorConsumerReusableComponent
        bgImage="/assets/image98.png"
        items={homeItems}
        text="Consumer electronics and gadgets"
      />
    </div>
  );
};

export default HomeElectronics;
