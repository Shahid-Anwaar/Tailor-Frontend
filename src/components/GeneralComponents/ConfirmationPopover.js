import React from "react";
import { Button, Dialog, DialogTitle, Typography, Box } from "@mui/material";

function ConfirmationPopUp({
  open,
  isLoading,
  setOpen,
  handleAgree,
  handleClose,
  setRowData,
  setRowDataID,
  rowData,
}) {
  const handleCloseDialog = () => {
    handleClose();
    setOpen(false);
  };

  return (
    <Dialog
      onTransitionExited={() => {
        setRowData("");
        setRowDataID({});
      }}
      open={open}
      onClose={handleCloseDialog}
      PaperProps={{
        style: {
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          minWidth: 500,
          borderRadius: "20px",
          padding: "20px",
        },
      }}
    >
      <DialogTitle className="px-1 py-1">
        <Box className="p-0">
          {/* Header Section */}
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            Confirm Extra Minutes Discount
          </Typography>


          {/* Info Section */}
          <Typography variant="body1" style={{ marginBottom: "5px" }}>
            Employees are allowed <strong>60 minutes</strong> of total late time
            per month.
            <br />
            You are about to grant an additional <strong>90 minutes</strong> for
            the whole day.
            {/* <span
              style={{
                fontWeight: "bold",
                color: "#1976D2",
                paddingLeft: "5px",
              }}
            >
              {rowData}
            </span>
            . */}
          </Typography>

          <Typography variant="body2" style={{ fontWeight: "bold" }}>
            This action can only be performed once per month.
          </Typography>

          {/* Confirmation Prompt */}
          <Typography
            variant="body2"
            style={{
              marginTop: "10px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Are you sure you want to proceed?
          </Typography>

          {/* Button Section */}
          <Box
            className="d-flex justify-content-center gap-3"
            style={{ marginTop: "30px" }}
          >
            <Button
              variant="outlined"
              color="secondary"
              className="capitalized delete-cancel-button"
              onClick={handleCloseDialog}
              style={{ padding: "8px 20px", fontWeight: "bold" }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              color="primary"
              disabled={isLoading}
              onClick={handleAgree}
              className="capitalized delete-confirm-button"
              style={{ padding: "8px 20px", fontWeight: "bold" }}
            >
              {isLoading ? "Loading..." : "Agree"}
            </Button>
          </Box>
        </Box>
      </DialogTitle>
    </Dialog>
  );
}

export default ConfirmationPopUp;
