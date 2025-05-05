import React from "react";
import PropTypes from "prop-types";
import { TextField, Autocomplete, Chip } from "@mui/material";

const AutocompleteMultiSelect = ({
  name,
  label,
  options,
  value,
  onChange,
  placeholder = "Select options",
  fullWidth = true,
  size = "medium",
  error = false,
  helperText = "",
  onFocus,
  disabled = false,
}) => {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      options={options}
      onFocus={onFocus}
      getOptionLabel={(option) => option.name}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          error={error}
          helperText={helperText}
          variant="outlined"
          fullWidth={fullWidth}
          size={size}
        />
      )}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            key={index}
            label={option.name}
            {...getTagProps({ index })}
            size="small"
          />
        ))
      }
    />
  );
};

// Prop types for the component
AutocompleteMultiSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium"]),
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
};

export default AutocompleteMultiSelect;
