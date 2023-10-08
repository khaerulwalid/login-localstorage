import React from "react";
import { AuthLayout } from "../Component/Layouts/AuthLayout";
import { FormLogin } from "../Component/Fragments/FormLogin";

export const PagesLogin = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};
