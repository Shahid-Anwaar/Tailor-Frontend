import React, { createRef } from "react";
import ThemeConfig from "./theme";
import Routers from "./routes";
import { Slide } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { Helmet } from "react-helmet-async";
import "./assets/css/style.css";
import "./assets/css/customer.css";
import "./assets/css/home.css";
import "react-phone-input-2/lib/style.css";
import "react-tagsinput/react-tagsinput.css";
import { ContextAdmin } from "./Hooks/AdminContext";
import { loginLogo, Logo } from "./assets";

function App() {
  const notistackRef = createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <ContextAdmin>
      <ThemeConfig>
        <SnackbarProvider
          ref={notistackRef}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          TransitionComponent={Slide}
          maxSnack={3}
          action={(key) => (
            <div onClick={onClickDismiss(key)} className="pointer">
              <i className="fa-solid fa-xmark me-3"></i>
            </div>
          )}
        >
          <Helmet>
            <title>{"Tailor Master"}</title>
            <meta name="description" content={"Tailor Master"} />
            <link rel="icon" href={loginLogo} />
          </Helmet>
          <Routers />
        </SnackbarProvider>
      </ThemeConfig>
    </ContextAdmin>
  );
}

export default App;
