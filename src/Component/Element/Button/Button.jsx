import React from "react";

export const Button = (props) => {
  const { children, className = "bg-black", onClick, type = "button" } = props;
  return (
    <button type={type} className={`h-10 px-6 font-semibold rounded-md text-white ${className}`} onClick={() => onClick()}>
      {children}
    </button>
  );
};
