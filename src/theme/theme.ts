import { createTheme, ThemeOptions } from "@mui/material";

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#151825",
      dark: "#11131a",
    },
  },
  typography: {
    fontFamily: ["Roboto Condensed", "Poppins", "Rubik"].join(","),
  },
});

export default theme;
