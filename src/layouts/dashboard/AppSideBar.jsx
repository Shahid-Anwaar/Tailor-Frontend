import React, { useEffect, useState } from "react";
import { Toolbar, Drawer, Divider, Box, Tooltip } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavSection from "./NavSection";
import { SideBarConfig } from "./SideBarConfig";
import { SidebarLogo } from "../../assets";

const drawerWidth = 260;

function AppSideBar({ mobileOpen, handleDrawerToggle }) {
  const [showScrollArrow, setShowScrollArrow] = useState(false);

  let nav_items = SideBarConfig();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleScroll() {
    const isScrolled =
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) > window.innerHeight;
    setShowScrollArrow(isScrolled);
  }

  const drawer = (
    <>
      <div className="text-center m-4">
        <img src={SidebarLogo} alt={"Logo"} className="img-fluid" />
      </div>
      <NavSection navConfig={nav_items} />
    </>
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "2px dashed #cecece80",
              background: "#121212",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          paddingBottom: {
            md: "100px",
          },
          minHeight: "100vh",
          width: "100%",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
}

export default AppSideBar;
