import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { formatString, validateInputs } from "../../../utils/constant";
import { useSnackbar } from "notistack";

const EmailForm = ({
  handleSubmitEmail,
  setErrorMessage,
  handleMove,
  isLoading,
  setFormState,
}) => {
  const [email, setEmail] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
    };
    const RequiredFieldEmail = ["email"];
    const errors = validateInputs(formData, RequiredFieldEmail, [], []);
    if (!(Object.keys(errors).length === 0)) {
      enqueueSnackbar(formatString(Object.keys(errors)[0]) + " is required", {
        variant: "error",
      });
      return;
    }
    if (!email) {
      handleMove();
      return;
    }
    handleSubmitEmail(email);
  };

  return (
    <>
      <div className="col-12 text-center ">
        <h3 className="login-text">Forgot Password</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="col-12 mt-4">
          <TextField
            id="outlined-basic"
            label="E-mail"
            name="email"
            variant="outlined"
            fullWidth
            required
            placeholder="E-mail"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="col-12 mt-2">
          <div className="position-relative">
            {/* Wait, I remember my password */}
            <div
              className="float-end pb-2 pointer"
              onClick={() => {
                localStorage.setItem("state", -1);
                setFormState(-1);
              }}
            >
              {/* eslint-disable-next-line */}
              <a className="text-muted">Back to Login </a>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Button
            type="submit"
            variant="contained"
            className="w-100 Login-page-button"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default EmailForm;
