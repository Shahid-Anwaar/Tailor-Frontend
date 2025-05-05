import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { loginLogo, Logo } from "../assets";

export default function LoginLayout() {
  return (
    <>
      <Helmet>
        <title>{"Tailor Master"}</title>
        <meta name="description" content={"Tailor Master"} />
        <link rel="icon" href={loginLogo} />
      </Helmet>
      <Outlet />
    </>
  );
}
