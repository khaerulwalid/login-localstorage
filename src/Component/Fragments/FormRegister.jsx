import React from "react";
import { InputForm } from "../Element/Input";
import { Button } from "../Element/Button/Button";

export const FormRegister = () => {
  return (
    <form action="">
      <InputForm htmlFor="name" name="name" type="text" placeholder="type your name">
        Name
      </InputForm>
      <InputForm htmlFor="email" name="email" type="text" placeholder="type your email">
        Email
      </InputForm>
      <InputForm htmlFor="password" name="password" type="password" placeholder="type your password">
        Password
      </InputForm>
      <InputForm htmlFor="confirmPassword" name="confirmPassword" type="password" placeholder="confirm your password">
        Confirm Password
      </InputForm>
      <Button classname=" bg-blue-600 w-full">Register</Button>
    </form>
  );
};
