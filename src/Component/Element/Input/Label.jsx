import React from "react";

export const Label = (props) => {
  const { htmlFor, children, name } = props;
  return (
    <label htmlFor={htmlFor} name={name} className="block text-slate-700 text-sm font-bold mb-2">
      {children}
    </label>
  );
};
