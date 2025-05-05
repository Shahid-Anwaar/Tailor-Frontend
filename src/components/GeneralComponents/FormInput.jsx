import { TextField } from "@mui/material";

const FormInput = ({
  label,
  name,
  type,
  value,
  variant = "outlined",
  onChange,
  required = true,
  multline,
  InputProps,
  placeholder,
  disabled,
  onBlur,
  sx,
}) => {
  const autoComplete = type === "password" ? "current-password" : "on";
  return (
    <TextField
      onBlur={onBlur}
      disabled={disabled}
      className={`my-2`}
      multiline={multline}
      rows={multline ? 5 : 3}
      type={type}
      variant={variant}
      label={label}
      name={name}
      fullWidth
      value={value}
      InputProps={InputProps}
      required={required}
      onChange={onChange}
      autoComplete={autoComplete}
      placeholder={placeholder}
      // sx={{
      //   "& .MuiOutlinedInput-root": {
      //     "& fieldset": {
      //       color: sx ? "grey" : "#6d00fc",
      //       borderColor: sx ? "#e1e1e1" : "#e1e1e1", // Desired border color
      //     },
      //   },
      //   input: sx && {
      //     fontSize: "1rem",
      //   },
      //   label: {
      //     color: sx ? "" : "#6d00fc",
      //   },
      // }}
    />
  );
};

export default FormInput;
