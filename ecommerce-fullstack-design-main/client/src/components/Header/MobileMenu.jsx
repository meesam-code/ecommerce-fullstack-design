import React, { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../Button";
import { UseContext } from "../../Context/EcommerceContext";
import { logout } from "../../Api/auth.js";
import toast from "react-hot-toast";

const MobileMenu = ({ setShowMenu, showMenu }) => {
  const menuRef = useRef();
  const navigate = useNavigate();
  const { user, setUser } = UseContext();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowMenu]);

  const handleLogout = () => {
    logout()
      .then((response) => {
        toast.success("Logout successful");
        setUser(null);
        navigate("/");
        setShowMenu(false);
      })
      .catch((error) => {
        toast.error("Logout fail");
      });
  };

  const mobileFirstItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
      icon: (
        <img src="/assets/Home.png" alt="home" className="w-[20px] h-[17px]" />
      ),
    },
    {
      id: 2,
      name: "All Categories",
      link: "/products",
      icon: (
        <img src="/assets/menu.png" alt="menu" className="w-[20px] h-[17px]" />
      ),
    },
    {
      id: 3,
      name: "Favorites",
      link: "/cart",
      icon: (
        <img
          src="/assets/heart.png"
          alt="favorites"
          className="w-[20px] h-[17px]"
        />
      ),
    },
    {
      id: 4,
      name: "My orders",
      link: "/",
      icon: (
        <img
          src="/assets/Vector2.png"
          alt="orders"
          className="w-[20px] h-[17px]"
        />
      ),
    },
  ];

  const mobileSecondItems = [
    {
      id: 1,
      name: "English | USD",
      link: "",
      icon: (
        <img
          src="/assets/globe.png"
          alt="language"
          className="w-[20px] h-[17px]"
        />
      ),
    },
    {
      id: 2,
      name: "Contact Us",
      link: "/contact",
      icon: (
        <img
          src="/assets/headphone.png"
          alt="contact"
          className="w-[20px] h-[17px]"
        />
      ),
    },
    {
      id: 3,
      name: "About",
      link: "/about",
      icon: (
        <img
          src="/assets/Vector3.png"
          alt="about"
          className="w-[20px] h-[17px]"
        />
      ),
    },
  ];

  const mobileThirdItems = [
    { id: 1, name: "User agreement", link: "/signin" },
    { id: 2, name: "Partnership", link: "/register" },
    { id: 3, name: "Privacy policy", link: "/privacy" },
  ];

  return (
    <div ref={menuRef}>
      {/* User Section */}
      <div className="bg-[#EFF2F4] pb-4 p-4 pt-6 h-[115px] flex flex-col ">
        <div className="flex justify-center items-end mb-2 bg-[#bdc4cd] w-[44px] h-[44px] rounded-full">
          <img src="/assets/photo.png" alt="profile" />
        </div>
        <div className="">
          {user ? (
            <>
              <ButtonComponent
                type="button"
                className="font-[500] text-[#1C1C1C] text-sm lg:text-md"
                onClick={handleLogout}
              >
                Logout
              </ButtonComponent>
              {" | "}
              <ButtonComponent
                type="button"
                className="font-[500] text-[#1C1C1C] text-sm lg:text-md"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/login");
                }}
              >
                Another Account
              </ButtonComponent>
            </>
          ) : (
            <>
              <ButtonComponent
                type="button"
                className="font-[500] text-[#1C1C1C] text-sm lg:text-md"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/login");
                }}
              >
                Sign in
              </ButtonComponent>
              {" | "}
              <ButtonComponent
                type="button"
                className="font-[500] text-[#1C1C1C] text-sm lg:text-md"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/signup");
                }}
              >
                Register
              </ButtonComponent>
            </>
          )}
        </div>
      </div>

      {/* First Group */}
      <ul className="flex flex-col gap-3 px-4 border-b border-[#DEE2E7]">
        {mobileFirstItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-2 h-[40px] text-[#1C1C1C] text-sm font-medium"
          >
            <Link to={item.link} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span className="pl-2">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Second Group */}
      <ul className="flex flex-col gap-3 px-4 mt-4 border-b border-[#DEE2E7]">
        {mobileSecondItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-2 h-[40px] text-[#1C1C1C] text-sm font-medium"
          >
            <Link to={item.link} className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span className="pl-2">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Third Group */}
      <ul className="flex flex-col gap-3 px-10 pl-13 mt-4">
        {mobileThirdItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center h-[40px] text-[#1C1C1C] text-sm font-medium"
          >
            <Link to={item.link} className="flex items-center gap-2">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
