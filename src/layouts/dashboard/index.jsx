import React, { useEffect, useState } from "react";
import AppHeader from "./AppHeader";
import AppSideBar from "./AppSideBar";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { CircularProgress } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { loginLogo, Logo } from "../../assets";

const useStyles = makeStyles(() => ({
  loading: {
    marginLeft: "50%",
    marginTop: "20%",
  },
}));

export default function DashboardLayout() {
  const classes = useStyles();
  const pathname = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  if (isLoading === true) {
    return <CircularProgress className={classes.loading} color="primary" />;
  }

  return (
    <>
      <Helmet>
        <title>{"Tailor Master"}</title>
        <meta name="description" content={"Tailor Master"} />
        <link rel="icon" href={loginLogo} />
      </Helmet>
      <div className="d-flex position-relative">
        <AppHeader
          handleDrawerToggle={handleDrawerToggle}
          setIsLoading={setIsLoading}
        />
        <AppSideBar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </div>
    </>
  );
}
