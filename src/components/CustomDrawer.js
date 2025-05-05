import PropTypes from "prop-types";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, Divider } from "@mui/material";
import { useMediaQuery } from "@mui/material";

CustomDrawer.propTypes = {
  isOpenDrawer: PropTypes.bool,
  onResetDrawer: PropTypes.func,
  onCloseDrawer: PropTypes.func,
};

export default function CustomDrawer({
  isOpenDrawer,
  onCloseDrawer,
  componentToPassDown,
  pageTitle,
}) {
  const isMobileScreen = useMediaQuery("(max-width:400px)");
  return (
    <>
      <Drawer
        className="forms-drawer event-title"
        anchor="right"
        open={isOpenDrawer}
        onClose={onCloseDrawer}
        PaperProps={{
          sx: { width: isMobileScreen ? 250 : 400, border: "none" },
        }}
      >
        <div className="bg_primary px-3 py-3 fixed_header">
          <div className="d-flex justify-content-between align-items-center ">
            <h5 className=" text-white m-0 p-0"> {pageTitle}</h5>
            <CloseIcon
              onClick={onCloseDrawer}
              style={{
                fill: "#fff",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <hr className="custom-divider" />
        <div className="mt-5">{componentToPassDown}</div>
      </Drawer>
    </>
  );
}
