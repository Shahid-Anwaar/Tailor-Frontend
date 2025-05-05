import React from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Slide } from "@mui/material";

const Transition = React.forwardRef((props, ref) => (
  <Slide direction={props.in ? "down" : "up"} ref={ref} {...props} />
));

export default function CustomPopover({
  isOpenPop,
  handleClose,
  title,
  componentToPassDown,
  width,
  className = "",
  setRowDataID,
  setRowData,
}) {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Dialog
      TransitionComponent={Transition}
      onTransitionExited={() => {
        setRowDataID && setRowDataID("");
        setRowData && setRowData({});
      }}
      open={isOpenPop}
      onClose={handleClose}
      className={className}
      PaperProps={{
        style: {
          minWidth: isMdScreen ? (width ? width : "550px") : "",
          borderRadius: "30px",
          border: "1px solid rgb(119, 119, 119)",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <div
        className="custom-popover-container"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <div className="d-flex justify-content-between align-items-baseline custom-popover">
          <div className="custom-popover-title">
            <h4>{title}</h4>
          </div>
          <div className="pointer custom-popover-cross" onClick={handleClose}>
            <CloseIcon />
          </div>
        </div>
        <hr />
        <div className="scrollable-content">{componentToPassDown}</div>
      </div>
    </Dialog>
  );
}
