import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PinCodeForm from "./PinCodeForm";
import ConfrimPassword from "./ConfirmPassword";
import EmailForm from "./EmailForm";
import { _Code_Verification } from "../../../DAL/Login/Auth";
import { useSnackbar } from "notistack";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [formState, setFormState] = useState(0);
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
    setFormState(1);
  };

  const handleSubmitPinCode = async (pinCode) => {
    setFormState(2);
  };

  const handleSubmitNewPassword = async (newPassword, confirmPassword) => {
    setFormState(0);
    navigate("/login");
  };

  return (
    <>
      {formState === 0 ? (
        <EmailForm
          handleSubmitEmail={handleSubmitEmail}
          errorMessage={errorMessage}
          handleAlertClose={handleAlertClose}
          setErrorMessage={setErrorMessage}
          handleMove={handleMove}
          isLoading={isLoading}
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
      ) : (
        <ConfrimPassword
          handleSubmitNewPassword={handleSubmitNewPassword}
          isLoading={isLoading}
          errorMessage={errorMessage}
          handleAlertClose={handleAlertClose}
          setErrorMessage={setErrorMessage}
          handleMove={handleMove}
        />
      )}
    </>
  );
};

export default ForgotPassword;
