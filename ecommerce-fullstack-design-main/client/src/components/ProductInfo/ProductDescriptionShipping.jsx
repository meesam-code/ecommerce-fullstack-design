import React, { useState } from "react";

const ProductDescriptionShipping = () => {
  const [whichItem, setWhichItem] = useState("Description");

  const shippingInfoList = [
    "Description",
    "Reviews",
    "Shipping",
    "About Seller",
  ];

  const productSpecs = [
    { label: "Model", value: "iPhone 14 Pro Max" },
    { label: "Style", value: "Modern" },
    { label: "Certificate", value: "CE / FCC" },
    { label: "Size", value: '6.7"' },
    { label: "Memory", value: "8GB RAM, 256GB Storage" },
  ];

  const renderContent = () => {
    switch (whichItem) {
      case "Description":
        return (
          <div className="space-y-6 mt-4">
            {/* Product Description */}
            <p className="text-gray-700 text-sm leading-relaxed">
              This is a classic shoe designed for comfort and style. Made with
              high-quality materials, it features a cushioned insole and durable
              outsole, perfect for everyday wear. Lorem ipsum dolor sit amet
              consectetur adipisicing elit... Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam ducimus tempore quod
              architecto totam. Sint, corrupti veniam odit laboriosam suscipit
              placeat a modi soluta quibusdam recusandae, fugit dolor, odio
              possimus? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Minima iusto deserunt aut voluptas dolor excepturi illum
              voluptatem quis corporis. Deserunt cum voluptates eos aliquid
              iure, repellat suscipit voluptatibus reprehenderit exercitationem?
              Quas dolores neque exercitationem laudantium dicta facilis nobis,
              incidunt fuga cupiditate sunt quisquam necessitatibus numquam
              repellendus magnam repellat minima consectetur quis rerum nostrum,
              harum atque, laborum corporis delectus odio. Earum.
            </p>

            {/* Product Specs in Two Columns */}
            <ul className="text-sm text-gray-700  gap-4  max-w-lg">
              {productSpecs.map((spec, idx) => (
                <li
                  key={idx}
                  className="grid grid-cols-[120px_1fr] items-center border border-[#DEE2E7] overflow-hidden"
                >
                  <span className="bg-[#EFF2F4] text-[#505050] p-3 font-medium border-r border-[#DEE2E7]">
                    {spec.label}:
                  </span>
                  <span className="p-3 text-[#505050]">{spec.value}</span>
                </li>
              ))}
            </ul>
            <ul className="text-sm text-gray-700 pb-4 space-y-2">
              <li className="flex items-start gap-2">
                <img
                  src="/assets/grayTick.png"
                  alt="check"
                  className="mt-1 w-4 h-4"
                />
                <p>Breathable fabric ensures all-day comfort</p>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/assets/grayTick.png"
                  alt="check"
                  className="mt-1 w-4 h-4"
                />
                <p>Modern design suitable for casual or formal wear</p>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/assets/grayTick.png"
                  alt="check"
                  className="mt-1 w-4 h-4"
                />
                <p>Eco-friendly materials used in construction</p>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src="/assets/grayTick.png"
                  alt="check"
                  className="mt-1 w-4 h-4"
                />
                <p>Available in multiple colors and sizes</p>
              </li>
            </ul>
          </div>
        );
      case "Reviews":
        return (
          <div className="mt-8 pb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Customer Reviews
            </h2>

            <div className="space-y-6">
              {/* Single Review */}
              {[1, 2, 3].map((review, idx) => (
                <div
                  key={idx}
                  className="border border-[#DEE2E7] rounded-lg p-5 bg-white shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://randomuser.me/api/portraits/men/${
                          10 + idx
                        }.jpg`}
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm text-gray-800">
                          John Doe
                        </p>
                        <p className="text-xs text-gray-500">March 20, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.446a1 1 0 00.95.69h3.623c.969 0 1.371 1.24.588 1.81l-2.931 2.129a1 1 0 00-.364 1.118l1.12 3.447c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.931 2.129c-.784.57-1.838-.197-1.539-1.118l1.12-3.447a1 1 0 00-.364-1.118L3.355 8.873c-.783-.57-.38-1.81.588-1.81h3.623a1 1 0 00.95-.69l1.12-3.446z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    These shoes exceeded my expectations! Very comfortable,
                    stylish, and durable. I wear them daily and they still look
                    brand new. Would definitely recommend to anyone looking for
                    quality footwear.
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Shipping":
        return (
          <div className="mt-4  w-full max-w-xl border border-[#DEE2E7] rounded-lg pb-10 p-6 bg-white shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Shipping Information
            </h2>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between">
                <span className="text-[#8B96A5]">Delivery time:</span>
                <span className="text-[#505050] font-medium">
                  5-7 business days
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#8B96A5]">Shipping cost:</span>
                <span className="text-[#505050] font-medium">Free</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#8B96A5]">Ships from:</span>
                <span className="text-[#505050] font-medium">
                  Lahore, Pakistan
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#8B96A5]">Shipping provider:</span>
                <span className="text-[#505050] font-medium">TCS Express</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#8B96A5]">Tracking available:</span>
                <span className="text-[#505050] font-medium">Yes</span>
              </li>
            </ul>
          </div>
        );
      case "About Seller":
        return (
          <div className="mt-8 w-full max-w-xl border border-[#DEE2E7] rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              About Seller
            </h2>

            <div className="flex items-start gap-4">
              <img
                src="/assets/R.png"
                alt="Seller Avatar"
                className=" rounded-full w-10 h-10 object-contain border"
              />
              <div>
                <h3 className="text-md font-semibold text-[#0D6EFD]">
                  Hashim's Enterprises
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Top Rated Seller · Since 2019
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>
                    <span className="font-medium text-[#8B96A5]">
                      Location:
                    </span>{" "}
                    Karachi, Pakistan
                  </li>
                  <li>
                    <span className="font-medium text-[#8B96A5]">
                      Response time:
                    </span>{" "}
                    Within 2 hours
                  </li>
                  <li>
                    <span className="font-medium text-[#8B96A5]">Rating:</span>{" "}
                    ⭐ 4.8 / 5 (320 reviews)
                  </li>
                  <li>
                    <span className="font-medium text-[#8B96A5]">
                      Products:
                    </span>{" "}
                    120+ items listed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex items-center gap-8 border-b border-[#DEE2E7] px-4 p-3 ">
        {shippingInfoList.map((item) => (
          <p
            key={item}
            onClick={() => setWhichItem(item)}
            className={`font-semibold cursor-pointer relative px-2  transition-colors ${
              whichItem === item
                ? "text-[#0D6EFD] after:absolute after:left-0 after:-bottom-3 after:w-full after:h-[2px] after:bg-[#0D6EFD]"
                : "text-[#8B96A5]"
            }`}
          >
            {item}
          </p>
        ))}
      </div>

      <div className="px-4 flex justify-center items-center ">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductDescriptionShipping;
