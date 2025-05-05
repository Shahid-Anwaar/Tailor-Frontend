import React from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const DetailsModal = ({
  isOpenPop,
  handleClose,
  title,
  componentToPassDown,
  width,
  className = "",
  setRowDataID,
  setRowData,
}) => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Dialog
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
          {/* Header Section */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              bgcolor: "#000000",
              color: "white",
              p: 2,
              mb: 3,
              borderRadius: 2,
            }}
          >
            <div className="col-10 d-flex align-items-center gap-3">
              <Avatar sx={{ bgcolor: "white", color: "#000000" }}>
                <PersonIcon />
              </Avatar>
              <Typography variant="h5" fontWeight="bold">
                {title}
              </Typography>
            </div>
            <div className="d-flex justify-content-center col-2">
              <div
                className="pointer custom-popover-cross "
                onClick={handleClose}
              >
                <CloseIcon />
              </div>
            </div>
          </Box>
        </div>
        <hr />
        <div className="scrollable-content">{componentToPassDown}</div>
      </div>
    </Dialog>
  );
};

export default DetailsModal;
