import React from "react";

const TextareaComponent = ({
  name,
  value,
  onChange,
  placeholder = "Provide some detail",
  className = "",
}) => {
  return (
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full border-1 border-[#DEE2E7] px-4 py-2 rounded placeholder-black text-black resize-none ${className}`}
      rows={4}
    />
  );
};

export default TextareaComponent;
