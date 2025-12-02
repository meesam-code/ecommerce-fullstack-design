import React from "react";

const MainLeft = () => {
  const categories = [
    { id: 1, name: "Automobiles" },
    { id: 2, name: "Clothes and wear" },
    { id: 3, name: "Home interiors" },
    { id: 4, name: "Computer and tech" },
    { id: 5, name: "Tools, equipments" },
    { id: 6, name: "Sports and outdoor" },
    { id: 7, name: "Animal and pets" },
    { id: 8, name: "Machinery tools" },
    { id: 9, name: "More category" },
  ];

  return (
    <div className="bg-white p-4 w-full rounded-lg ">
      <ul className="space-y-2 w-full">
        {categories.map((category) => (
          <li
            key={category.id}
            className="p-2 w-full lg:p-2 rounded hover:font-semibold transition-all duration-300 ease-linear hover:bg-[#E5F1FF] text-[12px] lg:text-[16px] xl:text-xl cursor-pointer"
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainLeft;
