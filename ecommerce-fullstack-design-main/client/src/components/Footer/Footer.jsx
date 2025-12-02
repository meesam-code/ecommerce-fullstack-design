import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: <FaFacebookF className="text-white" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <FaInstagram className="text-white" />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: <IoLogoTwitter className="text-white" />,
  },
  {
    name: "GitHub",
    href: "#",
    icon: <FaLinkedinIn className="text-white" />,
  },
  {
    name: "Dribbble",
    href: "#",
    icon: <FaYoutube className="text-white" />,
  },
];

const footerLinks = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "#" },
      { label: "Find Store", href: "#" },
      { label: "Categories", href: "#" },
      { label: "Blogs", href: "#" },
    ],
  },
  {
    title: "Partnership",
    links: [
      { label: "Our Partners", href: "#" },
      { label: "Become a Partner", href: "#" },
      { label: "Affiliates", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Money Refund", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Contact us", href: "#" },
    ],
  },
  {
    title: "For Users",
    links: [
      { label: "Login", href: "#" },
      { label: "Register", href: "#" },
      { label: "Settings", href: "#" },
      { label: "My Orders", href: "#" },
    ],
  },
];

const getApp = [
  {
    image: "/assets/Logo.png",
    alt: "App Store",
    href: "#",
  },
  {
    image: "/assets/Subtract.png",
    alt: "Google Play",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white relative top-6 ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and description */}
          <div>
            <img
              src="/assets/logo-colored.png"
              alt="logo"
              className="w-[160px] h-[48px] mb-4"
            />
            <p className="text-gray-600 max-w-xs mb-6">
              Discover the best products at unbeatable prices. Shop with
              confidence and enjoy fast delivery, secure payments, and top-notch
              support.
            </p>
            <ul className="flex gap-3">
              {socialLinks.map((item) => (
                <li key={item.name} className="bg-[#BDC4CD] p-2 rounded-full">
                  {item.icon}
                </li>
              ))}
            </ul>
          </div>
          {/* Footer Links */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p className="font-semibold text-gray-900 mb-3">
                  {section.title}
                </p>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-[#0d9488] transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Get App Section */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-semibold text-gray-900 mb-3">Get App</p>
              <div className="flex flex-col gap-3">
                {getApp.map((app, idx) => (
                  <Link
                    key={idx}
                    to={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black w-[140px] h-[44px] rounded flex items-center justify-center shadow hover:scale-105 transition"
                  >
                    <img
                      src={app.image}
                      alt={app.alt}
                      className="w-[110px] h-auto rounded"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
      </div>
      <div className="mt-6  px-4 sm:px-6 lg:px-16 py-6 border-t bg-[#EFF2F4] border-[#cbd5e1] flex flex-col md:flex-row items-center justify-between py-2">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="text-gray-500 text-sm">Language:</span>
          <select className="bg-transparent border-none text-gray-700 text-sm focus:outline-none">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
