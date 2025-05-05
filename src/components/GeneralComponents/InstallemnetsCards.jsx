import PropTypes from "prop-types";
import { Card, Typography, Grid, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useRef, useState } from "react";
import moment from "moment";
import MenuPopover from "../menuOption/MenuPopover";
import CustomPopoverSectionItems from "../menuOption/CustomPopoverSectionItems";

InstallmentsCard.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  color: PropTypes.string,
  menuOptions: PropTypes.array.isRequired, // Menu options for the popover
};

export default function InstallmentsCard({
  count,
  title,
  date,
  index,
  color = "#f5f5f5",
  menuOptions,
}) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      className="box-shadow-main"
      sx={{
        position: "relative",
        padding: "16px",
        borderRadius: "12px",
        textAlign: "center",
        backgroundColor: color,
      }}
    >
      {/* Index Number in Circular Background */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          width: "30px",
          height: "30px",
          backgroundColor: "#000000",
          borderRadius: "50%",
          color: "white",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {index}
      </div>

      {/* More Menu Icon with Popover */}
      {menuOptions && menuOptions.length > 0 && (
        <IconButton
          ref={anchorRef}
          onClick={handleOpen}
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
          }}
        >
          <MoreVertIcon />
        </IconButton>
      )}

      <MenuPopover
        className="custom-popover"
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{
          maxHeight: 250,
          minWidth: "200px",
          borderRadius: "8px",
        }}
      >
        {menuOptions?.map((option, index) => (
          <CustomPopoverSectionItems
            key={index}
            item={option}
            data={menuOptions}
            setOpen={setOpen}
          />
        ))}
      </MenuPopover>

      {/* Card Content */}
      <Grid container direction="column" alignItems="center">
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          Rs. {Math.round(count * 10) / 10} /-
        </Typography>
        <Typography variant="subtitle1">
          {title}: {date ? moment(date).format("DD MMM YYYY") : "N/A"}
        </Typography>
      </Grid>
    </Card>
  );
}
