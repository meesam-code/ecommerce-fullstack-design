// featuresData.js
import { MdLock, MdSupportAgent, MdLocalShipping } from "react-icons/md";
import React from "react";

export const features = [
  {
    icon: <MdLock size={20} className="text-[#6C757D]" />,
    title: "Secure payment",
    description: "Have you ever finally just",
  },
  {
    icon: <MdSupportAgent size={20} className="text-[#6C757D]" />,
    title: "Customer support",
    description: "Have you ever finally just",
  },
  {
    icon: <MdLocalShipping size={20} className="text-[#6C757D]" />,
    title: "Free delivery",
    description: "Have you ever finally just",
  },
];

// FeatureCard.jsx

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-[#DEE2E7] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-[#1C1C1C]">{title}</h3>
        <p className="text-sm text-[#8B96A5]">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
