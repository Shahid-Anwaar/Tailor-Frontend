import PropTypes from "prop-types";
// material
import { Popover } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

// var(--sidebars-background-color)

const ArrowStyle = styled("span")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    top: -7,
    zIndex: 0,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: "absolute",
    borderRadius: "0 0 4px 0",
    transform: "rotate(-135deg)",
    borderRight: `solid 1px ${alpha(theme.palette.grey[700], 0.24)}`, // Darker color
    borderBottom: `solid 1px ${alpha(theme.palette.grey[700], 0.24)}`, // Darker color
    background: theme.palette.background.paper, // Matches the Popover's background
  },
}));

// ----------------------------------------------------------------------

MenuPopover.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default function MenuPopover({ children, sx, ...other }) {
  return (
    <Popover
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          overflow: "inherit",
          border: (theme) => `solid 1px ${theme.palette.grey[500_8]}`,
          ...sx,
        },
      }}
      {...other}
    >
      <ArrowStyle className="arrow" />

      {children}
    </Popover>
  );
}
