import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import PinInput from "react-pin-input";
import { formatString, validateInputs } from "../../../utils/constant";

const PinCodeForm = ({
  handleSubmitPinCode,
  isLoading,
  errorMessage,
  handleAlertClose,
  setErrorMessage,
  handleMove,
}) => {
  const [pinCode, setPinCode] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    const FormData = {
      pinCode: pinCode,
    };
    const requiredStringInputFields = ["pinCode"];
    const errors = validateInputs(FormData, requiredStringInputFields, [], []);
    if (!(Object.keys(errors).length === 0)) {
      enqueueSnackbar(formatString(Object.keys(errors)[0]) + " is required", {
        variant: "error",
      });
      return;
    }

    if (!pinCode) {
      setErrorMessage("Please enter your pin code");
      enqueueSnackbar("Please enter your pin code", { variant: "error" });
      handleMove();
      return;
    }
    handleSubmitPinCode(pinCode);
  };

  return (
    <>
      <div className="  " id="handle_move">
        <div className=" ">
          <form onSubmit={handleSubmit}>
            <div className="col-12   pt-4 ">
              <div className="mb-3">
                <label className="form-label">Enter PIN Code here. *</label>
                <PinInput
                  length={6}
                  secret={false}
                  onChange={(value, index) => setPinCode(value)}
                  type="numeric"
                  inputMode="number"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  inputStyle={{ borderColor: "#fff" }}
                  // inputFocusStyle={{ borderColor: "#438a7a" }}
                  inputFocusStyle={{ borderColor: "#fff", color: "#fff" }}
                  onComplete={(value, index) => {
                    setPinCode(value);
                  }}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </div>
            </div>
            <div className="mt-3">
              <Button
                type="submit"
                variant="contained"
                className="w-100 login-page-button"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PinCodeForm;
