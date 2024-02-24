import React from "react";

const Input = (props) => {
  const { type, placeholder } = props;
  return (
    <input type={type} placeholder={placeholder} className="p-3 bg-blue-950" />
  );
};

export default Input;
