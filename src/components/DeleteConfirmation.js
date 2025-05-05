import React from "react";
import { Button, Dialog, DialogTitle } from "@mui/material";

function DeleteConfirmation({
  open,
  isLoading,
  setOpen,
  handleAgree,
  title,
  handleClose,
  setRowData,
  setRowDataID,
  Btn_Title,
}) {
  const handleCloseDialog = () => {
    handleClose();
    setOpen(false);
  };

  return (
    <>
      <Dialog
        onTransitionExited={() => {
          setRowData && setRowData({});
          setRowDataID && setRowDataID("");
        }}
        open={open}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            // backgroundColor: "white",
            // color: "black",
            boxShadow: "none",
            minWidth: 350,
            borderRadius: "20px",
            border: "1px solid rgb(119, 119, 119)",
          },
        }}
      >
        <DialogTitle>
          <div className="text-center p-2 pt-3 pb-3">
            {/* <i className="fa-solid fa-trash display-5 text-danger"></i> */}
            <div className="">
              {/* <h4>Are you sure ?</h4> */}
              <p className="mb-0 delete-confirm-text">
                {title ? title : "Are you sure you want to take this action?"}
              </p>
            </div>
            <div className="d-flex justify-content-center gap-3 ">
              <Button
                variant="outlined"
                className="capitalized delete-cancel-button font-family"
                onClick={handleCloseDialog}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                disabled={isLoading}
                onClick={handleAgree}
                // style={{
                //   backgroundColor: isLoading ? "gray" : "#dc3545",
                //   color: "white",
                // }}
                className="capitalized delete-confirm-button font-family"
              >
                {isLoading ? "Loading..." : Btn_Title ? Btn_Title : "Delete"}
              </Button>
            </div>
          </div>
        </DialogTitle>
      </Dialog>
    </>
  );
}

export default DeleteConfirmation;
