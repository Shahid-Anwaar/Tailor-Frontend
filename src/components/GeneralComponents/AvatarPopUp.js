import React from "react";
import { Modal, Box } from "@mui/material";

function AvatarPopup({ open, setOpen, handleClose, handleOpen, image }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="avatar-popup-title"
      aria-describedby="avatar-popup-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
          minWidth: 200,
          textAlign: "center",
        }}
      >
        <img
          alt="User Avatar"
          src={image}
          onClick={handleOpen}
          sx={{ cursor: "pointer" }}
        />
        {/* <Typography id="avatar-popup-title" variant="h6" component="h2">
          User Information
        </Typography>
        <Typography id="avatar-popup-description" sx={{ mt: 2 }}>
          This is the user's detailed information.
        </Typography> */}
      </Box>
    </Modal>
  );
}

export default AvatarPopup;
