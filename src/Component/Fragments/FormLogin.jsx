import React from "react";
import { Button } from "../Element/Button/Button";
import { InputForm } from "../Element/Input";

export const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);

    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm htmlFor="email" name="email" type="text" placeholder="type your email">
        Email
      </InputForm>
      <InputForm htmlFor="password" name="password" type="password" placeholder="type your password">
        Password
      </InputForm>
      <Button classname=" bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};
