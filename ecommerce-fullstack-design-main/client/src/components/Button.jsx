import React from "react";

const ButtonComponent = ({
  children,
  onClick = () => {},
  type,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className}`}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
