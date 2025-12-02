import React, { useEffect, useState } from "react";
import InputComponent from "../../Input";
import SelectComponent from "../../SelectComponent";
import TextareaComponent from "../../TextereaComponent";
import ButtonComponent from "../../Button";

const HomeSupplierCard = () => {
  const [selected, setSelected] = useState("");
  const [itemYouNeed, setItemYouNeed] = useState("");
  const [details, setDetails] = useState("");
  const [isWidthComes, setIsWidthComes] = useState(false);
  const options = [
    { label: "Pcs", value: "" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsWidthComes(true);
      } else {
        setIsWidthComes(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div
      className="w-full md:rounded flex flex-col md:flex-row justify-between gap-7 p-4 pt-4 pb-8"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(44, 124, 241, 0.9), rgba(0, 209, 255, 0.8) 50%), url(/assets/image102.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Left side text */}
      <div className="flex flex-col py-10 md:px-6">
        <h2 className="text-[25px] sm:text-[32px] font-medium text-white mb-4 text-left sm:text-center md:text-left">
          {isWidthComes ? (
            <>An easy way to send requests to all suppliers</>
          ) : (
            <>
              An easy way to send
              <br />
              guests to all suppliers
            </>
          )}
        </h2>
        <p className="text-lg hidden md:inline-block text-white mb-6">
          {isWidthComes ? (
            <>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </>
          ) : (
            <>
              Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit,
              sed do eiusmod tempor incididunt
            </>
          )}
        </p>
        <div className="text-left sm:text-center md:text-left">
          <ButtonComponent
            type="button"
            className="bg-gradient-to-r md:hidden rounded-lg from-[#127FFF] to-[#0067FF] font-medium text-white px-6 py-3 border-0 outline-none"
          >
            Send inquiry
          </ButtonComponent>
        </div>
      </div>

      {/* Right side form — hidden on small, flex on md+ */}
      <div className="bg-white p-6 px-6 rounded shadow-md w-full max-w-lg flex flex-col gap-4 hidden md:flex">
        <h2 className="text-[20px] font-bold">Send quote to suppliers</h2>
        <InputComponent
          name="search"
          value={itemYouNeed}
          onChange={(e) => setItemYouNeed(e.target.value)}
          placeholder="What item you need?"
          className="w-full border border-[#DEE2E7] px-4 py-2 outline-none rounded placeholder-black text-black"
        />
        <div className="w-full">
          <TextareaComponent
            name="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Provide some detail"
            className="outline-none"
          />
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-black font-medium px-4 py-2 w-[200px] border border-gray-300 rounded-md">
            Quantity
          </p>
          <div className="max-w-xs">
            <SelectComponent
              options={options}
              value={selected}
              className="w-[90px]"
              onChange={(e) => setSelected(e.target.value)}
            />
          </div>
        </div>
        <div>
          <ButtonComponent
            type="button"
            className="bg-gradient-to-r rounded-lg from-[#127FFF] to-[#0067FF] text-white px-6 py-3 border-0 outline-none"
          >
            Send inquiry
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default HomeSupplierCard;
