import React, { useEffect, useState } from "react";
import InputComponent from "../Input.jsx";
import ButtonComponent from "../Button.jsx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import HeaderBottomPart from "./HeaderBottomPart.jsx";
import { MdOutlineSearch } from "react-icons/md";
import MobileMenu from "./MobileMenu.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UseContext } from "../../Context/EcommerceContext.jsx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [input, setInput] = useState("");
  const location = useLocation();
  const [smallScreenSearch, setSmallScreenSearch] = useState("");
  const {
    products,
    setProducts,
    setSearch,
    search,
    allProducts,
    user,
    isAdmin,
  } = UseContext();
  const isProductsPage = location.pathname === "/products";
  const navigate = useNavigate();

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInput = () => {
    setSearch(input);
    setInput("");
    navigate("/products");
    setShowMenu(false);
  };

  useEffect(() => {
    if (smallScreenSearch.trim()) {
      setSearch(smallScreenSearch);
      navigate("/products");
      setShowMenu(false);
    }
  }, [smallScreenSearch]);

  useEffect(() => {
    if (search.trim()) {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(search.trim().toLowerCase()),
      );
      setProducts(filtered);
    } else {
      setProducts(allProducts); // Reset on clear
    }
  }, [search, allProducts]);

  const getProfileLink = () => {
    if (user?.role === "admin") {
      return "/admin/dashboard";
    } else if (user?.role === "user") {
      return "/profile";
    } else {
      return "/login";
    }
  };

  const listItems = [
    {
      id: 1,
      name: "Profile",
      link: getProfileLink(),
      logo: <IoPersonSharp className="text-2xl text-[#8B96A5]" />,
    },
    {
      id: 2,
      name: "Message",
      link: "/",
      logo: <MdMessage className="text-2xl text-[#8B96A5]" />,
    },
    {
      id: 3,
      name: "Orders",
      link: "/",
      logo: <FaHeart className="text-2xl text-[#8B96A5]" />,
    },
    {
      id: 4,
      name: "My Cart",
      link: "/cart",
      logo: <FaCartShopping className="text-2xl text-[#8B96A5]" />,
    },
  ];

  const smallScreenItems = [
    {
      id: 1,

      link: "/cart",
      logo: <FaCartShopping className="w-[24px] h-[24px] text-[#1C1C1C]" />,
    },
    {
      id: 2,

      link: getProfileLink(),
      logo: <IoPersonSharp className="w-[24px] h-[24px] text-[#1C1C1C]" />,
    },
  ];

  const hideMenu = isProductsPage && isSmallScreen;

  const isCart = location.pathname === "/cart";
  const isProductDetailsPage = location.pathname.startsWith(
    "/products/productInfo/",
  );

  return (
    <header className="bg-[#FFFFFF]  ">
      <div className="flex items-center justify-between p-4 sm:px-15 md:px-[30px]  lg:px-[50px]  sm:py-[20px]   h-[80px]">
        <div className="flex items-center gap-4">
          {(isCart && isSmallScreen) || (hideMenu && isSmallScreen) ? (
            <div className="flex items-center gap-3">
              <Link to={isCart ? "/products" : "/"}>
                <img
                  src="/assets/arrowRightBlack.png"
                  className="h-4 w-4 text-[#1C1C1C]"
                />
              </Link>
              <span className="text-[#1C1C1C] font-semibold text-[18px] ">
                {isCart ? "Shopping Cart" : "Products"}
              </span>
            </div>
          ) : !hideMenu && !(isProductDetailsPage && isSmallScreen) ? (
            <IoMenu
              className="text-3xl text-[#1C1C1C] md:hidden "
              onClick={() => setShowMenu((prev) => !prev)}
            />
          ) : (
            <Link to="/products">
              <img
                src="/assets/arrowRightBlack.png"
                className="h-4 w-4 text-gray-700"
              />
            </Link>
          )}

          {/* Sidebar menu drawer */}
          <div
            className={`fixed top-0 left-0 w-[280px] h-screen overflow-y-auto md:hidden bg-white shadow-lg z-50 transform transition-all duration-500 ease-in-out
      ${
        showMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
          >
            <MobileMenu setShowMenu={setShowMenu} showMenu={showMenu} />
          </div>

          {((!(isProductDetailsPage && isSmallScreen) && !isCart) ||
            (isCart && !isSmallScreen)) &&
            !hideMenu && (
              <Link to={"/"}>
                <img
                  src="/assets/logo-colored.png"
                  alt="website logo"
                  className="w-[116px] h-[36px]  md:w-[150px] md:h-[46px]"
                />
              </Link>
            )}
        </div>

        {!isCart && (
          <div className="flex items-center justify-center md:flex hidden">
            <InputComponent
              type="text"
              name="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search..."
              className="border-2 border-[#0D6EFD] md:w-[250px] lg:w-[330px] xl:w-[450px] 2xl:w-[700px] h-[40px] rounded-l px-3  focus:outline-none transition-all"
            />
            <div className="flex items-center border-y-2 border-[#0D6EFD] lg:flex hidden h-[40px]">
              <ButtonComponent
                type="button"
                className="cursor-pointer   text-[#1C1C1C] font-[400] text-sm lg:text-md  px-2  transition-colors"
              >
                All category
              </ButtonComponent>
              <RiArrowDropDownLine className="text-3xl text-[#8B96A5] " />
            </div>

            <ButtonComponent
              type="button"
              onClick={handleInput}
              className="bg-[#0D6EFD] border-2 cursor-pointer border-[#0D6EFD] h-[40px]   text-white px-4 rounded-r hover:bg-blue-600 transition-colors"
            >
              Search
            </ButtonComponent>
          </div>
        )}

        <div className="flex items-center gap-2 hidden md:flex md:gap-4 lg:gap-6">
          {listItems.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.id}
                className="flex flex-col  items-center"
                onClick={() => setShowMenu(item.id)}
              >
                {item.logo && <span className="text-2xl">{item.logo}</span>}
                <p className="text-[12px] text-[#8B96A5]">{item.name}</p>
              </Link>
            );
          })}
        </div>
        {/* Small screen items */}
        <div className="flex items-center gap-6 md:hidden">
          {smallScreenItems.map((item) => {
            return (
              <Link
                to={item.link}
                key={item.id}
                className="flex flex-col items-center"
              >
                {item.logo}
              </Link>
            );
          })}
        </div>
      </div>
      {!isProductDetailsPage && !isCart && (
        <div className="md:hidden  px-4  sm:px-15 md:px-[40px]  lg:px-[50px] ">
          <div className=" relative border-1 border-[#DEE2E7] bg-[#F7FAFC] rounded-md ">
            <MdOutlineSearch className="text-[#8B96A5] text-xl absolute left-4 top-3" />
            <InputComponent
              type="text"
              name="search"
              placeholder="Search..."
              className=" bg-[#F7FAFC] ml-7  h-[40px] px-3  focus:outline-none transition-all"
              value={smallScreenSearch}
              onChange={(e) => setSmallScreenSearch(e.target.value)}
            />
          </div>
        </div>
      )}

      {!isCart && !(isProductDetailsPage && isSmallScreen) && (
        <nav className=" py-4 md:flex h-[60px] md:border-y-1 border-[#E5E5E5] p-4 sm:px-15 md:px-[40px]  lg:px-[50px]    height-[80px]">
          <HeaderBottomPart />
        </nav>
      )}
    </header>
  );
};

export default Header;
