import * as React from "react";
import moment from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { renderTimeViewClock } from "@mui/x-date-pickers";

export default function DynamicTimePicker({
  label,
  initialTime,
  onTimeChange,
  maxTime,
  minTime,
  required,
}) {
  const [selectedTime, setSelectedTime] = React.useState(
    initialTime ? moment(initialTime) : moment()
  );

  const handleTimeChange = (newValue) => {
    setSelectedTime(newValue);
    if (onTimeChange) {
      onTimeChange(newValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <TimePicker
        value={selectedTime}
        sx={{
          width: "100%",
        }}
        maxTime={maxTime}
        minTime={minTime}
        onChange={handleTimeChange}
        label={label}
        renderInput={(params) => (
          <TextField
            required={required}
            {...params}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {params.InputProps?.endAdornment}
                  <InputAdornment position="end">
                    <AccessTimeIcon />
                  </InputAdornment>
                </>
              ),
            }}
          />
        )}
        viewRenderers={{
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
          seconds: renderTimeViewClock,
        }}
      />
    </LocalizationProvider>
  );
}
