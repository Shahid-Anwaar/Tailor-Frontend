import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
const CheckBoxes = ({
  RadioButtons,
  checkValue,
  setCheckValue,
  showFlex = false,
  title = "",
}) => {
  return (
    <FormControl>
      <FormLabel
        id="demo-radio-buttons-group-label"
        className="Label_Color fs-5 mb-2 text-start"
      >
        {title}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={checkValue}
        onChange={(e) => setCheckValue(e.target.value)}
        name="radio-buttons-group"
      >
        <div className={showFlex ? "d-flex" : ""}>
          {RadioButtons.map((radioButton, index) => {
            return (
              <FormControlLabel
                className={showFlex ? "" : "d-block"}
                key={index}
                value={radioButton.value}
                control={<Radio />}
                label={radioButton.label}
              />
            );
          })}
        </div>
      </RadioGroup>
    </FormControl>
  );
};

export default CheckBoxes;
