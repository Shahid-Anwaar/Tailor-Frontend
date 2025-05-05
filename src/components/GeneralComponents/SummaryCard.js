// @mui
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Iconify from "../Iconify";
// utils
// import { fShortenNumber } from "src/utils";
// components

// ----------------------------------------------------------------------

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(2),
}));

// ----------------------------------------------------------------------

SummaryCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  // count: PropTypes.number.isRequired,
  // count: PropTypes.number,
  sx: PropTypes.object,
};

export default function SummaryCard({
  title,
  size,
  count,
  icon,
  color = "#000",
  sx,
  ...other
}) {
  return (
    <div className="dashboard-card mb-3">
      <div>
        <IconWrapperStyle
          sx={{
            // mt: 2,
            ml: 0,
            width: 50,
            height: 50,
            bgcolor: "#eef4f9",
          }}
        >
          <Iconify
            icon={icon}
            width={size ? size : 30}
            height={size ? size : 30}
            sx={{ color: { color } }}
          />
        </IconWrapperStyle>
      </div>

      <div className="dashboard-card-title">{title}</div>
      <div className="dashboard-card-count">{count}</div>
    </div>
  );
}
