import React from "react";

const InputComponent = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  className = "",
}) => {
  return (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputComponent;
