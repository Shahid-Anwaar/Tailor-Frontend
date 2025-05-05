import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function ThemeConfig({ children }) {
  const themeOptions = {
    palette: {
      background: {
        paper: "#121212",
      },
      primary: {
        main: "#5E0ACA",
      },
      secondary: {
        main: "#6d00fc",
      },
      text: {
        primary: "#fff",
        secondary: "#ACACAC",
      },
    },
    typography: {
      fontFamily: "Montserrat, sans-serif",
    },
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "#5E0ACA",
            "&.Mui-disabled": {
              color: "#ffffff",
              opacity: 0.5,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#bebebe87",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#bebebe87",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#bebebe87",
            },
            color: "#fff",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "#ffffff",
            "&.Mui-focused": {
              color: "#bebebe87",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          icon: {
            color: "#5E0ACA",
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "#6d00fc29",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#6d00fc29",
              },
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid #bebebe87",
            color: "#fff",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "&.Mui-disabled": {
              backgroundColor: "#5E0ACA89",
              color: "#fff",
              opacity: 0.8,
            },
          },
        },
      },
    },
  };

  const theme = createTheme(themeOptions);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
