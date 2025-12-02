import React from "react";

const ProductTopList = () => {
  const productTopLists = [
    {
      id: 1,
      title: "Home",
      icon: "/assets/rightAngle.png",
    },
    {
      id: 2,
      title: "Clothing",
      icon: "/assets/rightAngle.png",
    },
    {
      id: 3,
      title: "Men's wear",
      icon: "/assets/rightAngle.png",
    },
    {
      id: 4,
      title: "Summer clothing",
    },
  ];
  return (
    <div className="flex items-center gap-2 ">
      {productTopLists.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-2  text-gray-500 text-sm"
        >
          <span className="text-[16px] font-normal">{item.title}</span>
          {item.icon && (
            <img
              src={item.icon}
              alt="icon"
              className="w-[15px] h-[10px] object-contain "
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductTopList;
