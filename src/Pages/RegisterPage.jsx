import React from "react";
import { AuthLayout } from "../Component/Layouts/AuthLayout";
import { FormRegister } from "../Component/Fragments/FormRegister";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};
