import React from "react";
import { Input } from "./Input";
import { Label } from "./Label";

export const InputForm = (props) => {
  const { htmlFor, type, placeholder, name, children } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor} name={name} children={children} />
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};
