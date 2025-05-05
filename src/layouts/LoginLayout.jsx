import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { loginLogo, Logo } from "../assets";
import { Navigate } from "react-router-dom";

export default function LoginLayout() {
  const token = localStorage.getItem("email");
    if (token) {
      return <Navigate to="/customer-list" replace />;
    }
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
