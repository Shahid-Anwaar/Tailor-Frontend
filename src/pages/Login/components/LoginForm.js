import React, { useState } from "react";
import Visibility from "@mui/icons-material/VisibilityOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOffOutlined";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { _admin_login_api } from "../../../DAL/Login/Auth";
import { _set_token_in_localStorage } from "../../../local_storage/local_storage";

import { useSnackbar } from "notistack";
import { formatString, validateInputs } from "../../../utils/constant";

const RequiredInputFields = ["email", "password"];

const LoginForm = ({ setFormState }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //  logn api hitting  function

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    console.log(inputs, "my inputs");
    if (inputs.email == "tailor@gmail.com" && inputs.password == "123") {
      localStorage.setItem("email", inputs.email);
      navigate(`/customer-list`, { replace: true });
      enqueueSnackbar("Login Successful", { variant: "success" });
    } else if (inputs.email == "tailor@gmail.com") {
      enqueueSnackbar("Login Failed! please enter correct Password", { variant: "error" });
    } else if (inputs.password == "123") {
      enqueueSnackbar("Login Failed! please enter correct Email", { variant: "error" });
    } else {
      enqueueSnackbar("Login Failed! please enter correct email & Password", { variant: "error" });
    }



    // localStorage.setItem("email", inputs.email);
    // setIsLoading(true);
    // let postData = {
    //   email: inputs.email,
    //   password: inputs.password,
    // };
    // const errors = validateInputs(inputs, RequiredInputFields, [], []);
    // if (!(Object.keys(errors).length === 0)) {
    //   enqueueSnackbar(formatString(Object.keys(errors)[0]) + " is required", {
    //     variant: "error",
    //   });
    //   return;
    // }

    // const result = await _admin_login_api(postData);
    // if (result.code === 200) {
    //   updateData({
    //     privileges: result?.previllages,
    //     sidebar_status: result?.user?.sidebar_status,
    //     role: result?.user?.role,
    //     employee_data: result?.user,
    //   });
    //   localStorage.setItem("UserId", result.user._id);
    //   // setUserInfo(result.user);
    //   _set_token_in_localStorage(result.token);
    //   // _set_user_in_localStorage(result.user);
    //   enqueueSnackbar(result.message, { variant: "success" });
    //   navigate(`/dashboard`, { replace: true });
    // } else {
    //   enqueueSnackbar(result.message, { variant: "error" });
    //   setIsLoading(false);
    // }

    // navigate(`/dashboard`, { replace: true });
  };

  return (
    <>
      <div className="col-12 text-center ">
        <h3 className="login-text">Login</h3>
      </div>
      <form onSubmit={handleSubmitLogin}>
        <div className="col-12 mt-4">
          <TextField
            id="outlined-basic"
            label="E-mail"
            name="email"
            variant="outlined"
            fullWidth
            type="email"
            required
            placeholder="E-mail"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 mt-3 mb-1">
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password *
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              fullWidth
              required
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
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
              value={inputs.password}
              onChange={handleChange}
            />
          </FormControl>
        </div>

        <div className="col-12 mt-2">
          <div className="position-relative">
            <div
              className="float-end pb-3 pointer"
              onClick={() => {
                localStorage.setItem("state", 0);
                setFormState(0);
              }}
            >
              {/* eslint-disable-next-line */}
              <a href="#" className="text-muted">
                Forgot Password
              </a>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Button
            type="submit"
            variant="contained"
            className="w-100 login-page-button"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
