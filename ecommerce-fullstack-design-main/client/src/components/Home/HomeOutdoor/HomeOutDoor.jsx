import React from "react";
import OutDoorConsumerReusableComponent from "../OutDoorConsumerReusableComponent";

const HomeOutDoor = () => {
  const homeItems = [
    {
      id: 1,
      title: "Soft chairs",
      from: "From USD 19",
      image: "/assets/rasm.png",
    },
    {
      id: 2,
      title: "Lamps",
      from: "From USD 19",
      image: "/assets/image 94.png",
    },
    {
      id: 3,
      title: "Kitchen dishes",
      from: "From USD 19",
      image: "/assets/image 93.png",
    },
    {
      id: 4,
      title: "Kitchen mixer",
      from: "From USD 100",
      image: "/assets/image 90.png",
    },
    {
      id: 5,
      title: "Kitchen mixer",
      from: "From USD 39",
      image: "/assets/image 88.png",
    },
    {
      id: 6,
      title: "Blenders",
      from: "From USD 19",
      image: "/assets/image 87.png",
    },
    {
      id: 7,
      title: "Home appliance",
      from: "From USD 10",
      image: "/assets/carpet.png",
    },
    {
      id: 8,
      title: "Coffee maker",
      from: "From USD 19",
      image: "/assets/image 89.png",
    },
  ];
  return (
    <div className="sm:border-1  bg-white sm:border-[#E0E0E0]">
      <OutDoorConsumerReusableComponent
        bgImage="/assets/image92.png"
        items={homeItems}
        text="Home and outdoor"
      />
    </div>
  );
};

export default HomeOutDoor;
