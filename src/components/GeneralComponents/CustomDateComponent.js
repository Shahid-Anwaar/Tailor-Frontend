import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { InputAdornment } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

export default function ResponsiveDatePickers({
  value,
  onChange,
  Label,
  maxDate,
  ViewDate,
  toolbarTitle,
  minData,
  format,
  disabled,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MobileDatePicker
        disabled={disabled}
        className="Cursor_Pointer_Date"
        format={format}
        inputFormat={format}
        sx={{
          width: "100%",
        }}
        orientation="landscape"
        label={Label}
        maxDate={maxDate}
        minDate={minData}
        value={value ? moment(value) : null}
        views={ViewDate || []}
        onChange={onChange}
        toolbarTitle={toolbarTitle}
        defaultValue={moment("2022-04-17")}
        slotProps={{
          textField: {
            InputProps: {
              endAdornment: (
                <InputAdornment className=" cursro_Pointer" position="end">
                  <CalendarTodayIcon
                    style={{
                      fill: "#6d00fc",
                    }}
                  />
                </InputAdornment>
              ),
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
