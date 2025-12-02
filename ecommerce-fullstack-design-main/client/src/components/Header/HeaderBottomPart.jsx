import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Select, { components } from "react-select";

const HeaderBottomPart = () => {
  const [countries, setCountries] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState();
  const [help, setHelp] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2,flags")
      .then((res) => res.json())
      .then((data) => {
        const allowed = ["us", "de", "in", "fr", "gb", "cn", "jp", "pk"];
        const filtered = data
          .filter((country) => allowed.includes(country.cca2.toLowerCase()))
          .map((country) => ({
            name: country.name.common,
            code: country.cca2.toLowerCase(),
            flag: country.flags.svg,
          }));

        const defaultCountry = filtered.find((c) => c.code === "fr"); // France as default
        setCountries(filtered);
        setSelectedCountry({
          value: defaultCountry.code,
          label: defaultCountry.name,
          flag: defaultCountry.flag,
        });
      });
  }, []);

  // Custom dropdown option
  const Option = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100"
      >
        <img src={data.flag} alt={data.label} className="w-4 h-4" />
        <span>{data.label}</span>
      </div>
    );
  };

  // Custom selected value (only flag)
  const SingleValue = ({ data, ...props }) => (
    <components.SingleValue {...props}>
      <img src={data.flag} alt={data.label} className="w-4 h-4" />
    </components.SingleValue>
  );

  const options = countries?.map((country) => ({
    value: country.code,
    label: country.name,
    flag: country.flag,
  }));

  const customStyles = {
    control: (base) => ({
      ...base,
      border: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
      minHeight: "36px",
      cursor: "pointer",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#000",
      padding: "4px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0 6px",
    }),
    menu: (base, state) => ({
      ...base,
      width: "120px", // slightly wider for better display
      position: "absolute",
      right: window.innerWidth < 768 ? "-10px" : "0", // shift right on mobile
      top: "100%",
      marginTop: "4px",
      zIndex: 9999,
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  };

  const headerBottomItemsLeftSide = [
    {
      id: 1,
      name: "All Categories",
      link: "/products",
      icon: <IoMenu className="text-2xl text-[#1c1c1c]" />,
    },
    { id: 2, name: "Hot offers", link: "/" },
    { id: 3, name: "Gift boxes", link: "/" },
    { id: 4, name: "Projects", link: "/" },
    { id: 5, name: "Registry", link: "/" },
    { id: 6, name: "Menu items", link: "/" },
    {
      id: 7,
      name: "Help",
      link: "/",
      icon: <RiArrowDropDownLine className="text-2xl text-[#8B96A5]" />,
    },
  ];

  const headerBottomRightSide = [
    {
      id: 1,
      name: "English, USD",
      link: "/",
      icon: <RiArrowDropDownLine className="text-2xl text-[#8B96A5]" />,
    },
    {
      id: 2,
      name: "Ship to",
      link: "/",
      icon: <RiArrowDropDownLine className="text-2xl text-[#8B96A5]" />,
    },
  ];

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden whitespace-nowrap xl:overflow-visible scrollbar-hide">
      <div className="flex items-center justify-between gap-6 min-w-[700px] md:min-w-0">
        {/* Left-side menu */}
        <ul className="flex items-center gap-3 text-sm font-medium">
          {headerBottomItemsLeftSide.map((item) => (
            <li
              key={item.id}
              className="text-[#0D6EFD] md:text-[#1C1C1C] flex items-center justify-center bg-[#EFF2F4] md:bg-white rounded-md h-[36px] w-[100px] md:rounded-none"
            >
              <Link to={item.link} className="flex items-center gap-1">
                {item.name === "All Categories" ? (
                  <>
                    <span className="md:inline hidden">{item.icon}</span>
                    {item.name}
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-1">
                      {item.name}
                      {item.icon && item.icon}
                    </div>
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right-side settings */}
        <ul className="flex items-center gap-3 lg:gap-5 text-sm font-medium">
          {headerBottomRightSide.map((item) => (
            <li
              key={item.id}
              className="text-[#0D6EFD] md:text-[#1C1C1C] flex items-center justify-center bg-[#EFF2F4] md:bg-white rounded-md h-[36px] w-[115px] md:rounded-none"
            >
              <div className="flex items-center">
                {item.name === "Ship to" ? (
                  <>
                    <span className="mr-2">Ship to</span>
                    <Select
                      options={options}
                      value={selectedCountry}
                      onChange={setSelectedCountry}
                      className="md:w-[70px] w-[56px] z-50"
                      styles={customStyles}
                      isSearchable={false}
                      menuPortalTarget={
                        typeof window !== "undefined" ? document.body : null
                      }
                      components={{ SingleValue, Option }}
                    />
                  </>
                ) : (
                  <>
                    {item.name}
                    {item.icon}
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottomPart;
