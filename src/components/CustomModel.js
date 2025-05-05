import React from "react";
import Modal from "@mui/material/Modal";
import { is_small_medium_screen } from "../utils/constant";
const CustomModal = ({
  open,
  handleClose,
  crossButton,
  component,
  CustomSpacing = false,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: CustomSpacing ? 600 : 450,
    width: is_small_medium_screen() ? "100%" : 600,
    // maxWidth: CustomSpacing ? "50%" : "100%",
    // bgcolor: "background.paper",
    // border: "1px solid #000",
    boxShadow: 3,
    p: 4,
  };
  return (
    <Modal
      className="main-modal"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ backgroundColor: "rgba(0, 0, 0, 5%)" }}
    >
      <div
        style={style}
        className={`Password-Change-Container container bg-white text-center ${
          CustomSpacing ? "p-md-4" : "p-md-4"
        } border-0 rounded-4`}
      >
        {crossButton && (
          <div className="delete-modal-close" onClick={handleClose}>
            &times;
          </div>
        )}
        {component}
      </div>
    </Modal>
  );
};

export default CustomModal;
