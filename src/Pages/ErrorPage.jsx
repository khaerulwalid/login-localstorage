import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className=" text-3xl">Ooops !</h1>
      <p className=" my-4">sorry, an unexpected error has occured</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
