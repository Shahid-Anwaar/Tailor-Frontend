import PropTypes from "prop-types";
// icons
import { Icon } from "@iconify/react";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
};

export default function Iconify({ icon, sx, height, width, ...other }) {
  return (
    <Box
      component={Icon}
      icon={icon}
      width={height}
      height={width}
      sx={{ ...sx }}
      {...other}
    />
  );
}
