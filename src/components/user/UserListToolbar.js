import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import searchFill from "@iconify/icons-eva/search-fill";
import { styled } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  Typography,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

const RootStyle = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  backgroundColor: "#0a0a0a",
  borderColor: "#bebebe87",
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": {
    width: 320,
    backgroundColor: "#0a0a0a",
    color: "#fff",
  },
  "& fieldset": {
    borderWidth: `0 !important`,
  },
  "& input": {
    color: "#fff",
  },
}));

// ----------------------------------------------------------------------

UserListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

export default function UserListToolbar({
  numSelected,
  filterName,
  onFilterName,
}) {
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: "#fff",
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <SearchStyle
          className="ms-auto table-search"
          value={filterName}
          onChange={onFilterName}
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <Box
                component={Icon}
                icon={searchFill}
                sx={{ color: "#ACACAC", fontSize: "18px" }}
              />
            </InputAdornment>
          }
        />
      )}
    </RootStyle>
  );
}
