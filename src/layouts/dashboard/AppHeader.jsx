import React from "react";
import { Toolbar, CssBaseline, AppBar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountPopover from "./AccountPopover";
import { useAdminContext } from "../../Hooks/AdminContext";

const drawerWidth = 260;

function AppHeader({ handleDrawerToggle, setIsLoading }) {
  const { navbarTitle } = useAdminContext();
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#0a0a0a",
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, marginTop: "11px", display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <div className="d-flex align-items-center w-100 ">
            <div className="position-relative search_input w-100 ">
              <h3 className="header-title">{navbarTitle}</h3>
            </div>
          </div>
          <AccountPopover setIsLoading={setIsLoading} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default AppHeader;
