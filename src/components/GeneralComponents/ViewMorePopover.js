import React, { useState } from "react";
import { Popover, Button, Typography } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const ViewMorePopover = ({ data, title, showStatusIcon = true }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "view-more-popover" : undefined;

  return (
    <>
      <Button
        variant="text"
        className="p-2 rounded-3 fs-14 text-lowercase"
        onClick={handleClick}
      >
        ...View More
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div style={{ padding: "16px" }}>
          <Typography variant="h6">{title ? title : ""}</Typography>
          {data.map((data, index) => (
            <div className="d-flex my-2">
              {showStatusIcon && (
                <RadioButtonCheckedIcon
                  fontSize="small"
                  sx={{
                    color: data.active_status ? "green" : "red",
                  }}
                />
              )}
              <Typography className="ms-2" key={index} variant="body2">
                {data.name}
              </Typography>
            </div>
          ))}
        </div>
      </Popover>
    </>
  );
};

export default ViewMorePopover;
