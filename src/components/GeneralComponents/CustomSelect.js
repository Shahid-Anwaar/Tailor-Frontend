import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CustomSelect = ({
  label,
  value,
  onChange,
  options,
  name,
  fullWidth = true,
  variant = "outlined",
  size = "medium",
  disabled = false,
  error = false,
  required = true,
  helperText = "",
  ...props
}) => {
  return (
    <FormControl
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      required={required}
      disabled={disabled}
      error={error}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        name={name}
        label={label}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(["standard", "outlined", "filled"]),
  size: PropTypes.oneOf(["small", "medium"]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

export default CustomSelect;
