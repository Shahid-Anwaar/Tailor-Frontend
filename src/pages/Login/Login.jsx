import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginImage, loginLogo } from "../../assets";
import LoginForm from "./components/LoginForm";
import EmailForm from "./components/EmailForm";
import PinCodeForm from "./components/PinCodeForm";
import ConfrimPassword from "./components/ConfrimPassword";
import { _Code_Verification, _Email_Verification } from "../../DAL/Login/Auth";
import { useSnackbar } from "notistack";
import { _Reset_Admin_Password } from "../../DAL/Login/ResetPassword";
import { SidebarLogo } from "../../assets";
import { Icon } from "@iconify/react/dist/iconify.js";

const Login = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [formState, setFormState] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleMove = () => {
    const handle_move = document.getElementById("handle_move");
    if (handle_move) {
      handle_move.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleAlertClose = () => {
    setErrorMessage("");
  };

  const handleSubmitEmail = async (_email) => {
    enqueueSnackbar("Action Successfull", { variant: "success" });
    setFormState(1);
    localStorage.setItem("state", 1);

    // localStorage.setItem("email", _email);
    // setIsLoading(true);
    // const formData = {
    //   email: _email,
    // };

    // const response = await _Email_Verification(formData);
    // if (response.code === 200) {
    //   enqueueSnackbar(response.message, { variant: "success" });
    //   setIsLoading(false);
    //   localStorage.setItem("state", 1);
    //   setFormState(1);
    // } else {
    //   localStorage.setItem("state", 0);
    //   setFormState(0);
    //   enqueueSnackbar(response.message, { variant: "error" });
    //   setIsLoading(false);
    // }
  };

  const handleSubmitPinCode = async (pinCode) => {
    enqueueSnackbar("Action Successfull", { variant: "success" });
    setFormState(2);
    localStorage.setItem("state", 2);

    // const _email = localStorage.getItem("email");
    // setIsLoading(true);
    // const formData = {
    //   email: _email,
    //   verification_code: pinCode,
    // };
    // const response = await _Code_Verification(formData);
    // if (response.code === 200) {
    //   enqueueSnackbar(response.message, { variant: "success" });
    //   setIsLoading(false);
    //   localStorage.setItem("state", 2);
    //   setFormState(2);
    // } else {
    //   localStorage.setItem("state", 1);
    //   setFormState(1);
    //   enqueueSnackbar(response.message, { variant: "error" });
    //   setIsLoading(false);
    // }
  };

  const handleSubmitNewPassword = async (newPassword, confirmPassword) => {
    // setIsLoading(true);
    // const _email = localStorage.getItem("email");
    // const formData = {
    //   email: _email,
    //   password: newPassword,
    //   confirm_password: confirmPassword,
    // };

    // const response = await _Reset_Admin_Password(formData);
    enqueueSnackbar("Action Successfull", { variant: "success" });
    setFormState(-1);
    localStorage.setItem("state", -1);
    navigate("/login");

    // if (response.code === 200) {
    //   enqueueSnackbar(response.message, { variant: "success" });
    //   setIsLoading(false);
    //   localStorage.setItem("state", -1);
    //   setFormState(-1);
    // } else {
    //   enqueueSnackbar(response.message, { variant: "error" });
    //   localStorage.setItem("state", 2);
    //   setFormState(2);
    //   setIsLoading(false);
    // }
    // navigate("/login");
  };

  useEffect(() => {
    const formState = localStorage.getItem("state");
    if (formState) {
      setFormState(parseInt(formState));
    }
  }, [formState]);

  return (
    <>
      <div className="full-height-container">
        <div className="h-100 row g-0">
          <div
            className="col-md-7 overlay-container d-none d-md-block"
            style={{
              position: "relative",
              backgroundImage: `url(${loginImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div className="div-img-overlay"></div>
          </div>

          <div className="col-md-5 d-flex align-items-center justify-content-center" id="handle_move">
            <div className="p-5 py-0 card-body">
              <div className="d-flex flex-column mb-4">
                <div className="text-center ">
                  <img
                    src={loginLogo}
                    className="img-fluid image-width"
                    alt="Login Logo"
                    width={150}
                  />
                </div>
              </div>

              <>
                {formState === 0 ? (
                  <EmailForm
                    handleSubmitEmail={handleSubmitEmail}
                    setErrorMessage={setErrorMessage}
                    handleMove={handleMove}
                    isLoading={isLoading}
                    setFormState={setFormState}
                  />
                ) : formState === 1 ? (
                  <PinCodeForm
                    handleSubmitPinCode={handleSubmitPinCode}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    handleAlertClose={handleAlertClose}
                    setErrorMessage={setErrorMessage}
                    handleMove={handleMove}
                  />
                ) : formState === 2 ? (
                  <ConfrimPassword
                    handleSubmitNewPassword={handleSubmitNewPassword}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    handleAlertClose={handleAlertClose}
                    setErrorMessage={setErrorMessage}
                    handleMove={handleMove}
                  />
                ) : (
                  <LoginForm setFormState={setFormState} />
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
