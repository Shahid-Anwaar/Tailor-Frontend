import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/VisibilityOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOffOutlined";
import { formatString, validateInputs } from "../../../utils/constant";

const ConfrimPassword = ({
  handleSubmitNewPassword,
  isLoading,
  errorMessage,
  handleAlertClose,
  setErrorMessage,
  handleMove,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    const formData = {
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };

    const RequireFields = ["newPassword", "confirmPassword"];

    const errors = validateInputs(formData, RequireFields, [], []);
    if (!(Object.keys(errors).length === 0)) {
      enqueueSnackbar(formatString(Object.keys(errors)[0]) + " is required", {
        variant: "error",
      });
      return;
    }

    e.preventDefault();
    if (!newPassword) {
      setErrorMessage("Please enter your password");
      enqueueSnackbar("Please enter your password", { variant: "error" });
      handleMove();
      return;
    }
    if (!confirmPassword) {
      setErrorMessage("Please enter your confirm password");
      handleMove();

      enqueueSnackbar("Please enter your confirm password", {
        variant: "error",
      });

      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage("Password and Confirm Password does not match");
      enqueueSnackbar("Password and Confirm Password does not match", {
        variant: "error",
      });
      return;
    }
    handleSubmitNewPassword(newPassword, confirmPassword);
  };

  return (
    <>
      {" "}
      <div className="col-12 text-center ">
        <h3 className="login-text">Reset Password</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="col-12 mt-4">
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password *
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              fullWidth
              onChange={(e) => setNewPassword(e.target.value)}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((show) => !show)}
                    edge="end"
                  >
                    {showPassword ? (
                      <Visibility
                        style={{
                          fontSize: "18px",
                        }}
                      />
                    ) : (
                      <VisibilityOff
                        style={{
                          fontSize: "18px",
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <div className="col-12 mt-4">
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password *
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password *"
              fullWidth
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirm_password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowConfirmPassword((value) => !value)}
                    edge="end"
                  >
                    {showConfirmPassword ? (
                      <VisibilityOff
                        style={{
                          fontSize: "18px",
                        }}
                      />
                    ) : (
                      <Visibility
                        style={{
                          fontSize: "18px",
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>
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

        {/* <div className="mt-4">
          <div className="mt-2">
            <Button
              className="w-100 login-page-button"
              type="submit"
              variant="contained"
              disabled={isLoading} 
            >
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </div>
        </div> */}
      </form>
    </>
  );
};

export default ConfrimPassword;
