import { createTheme, ThemeOptions } from "@mui/material";

let type: any = localStorage.getItem("theme:mode") || "light";

const theme: ThemeOptions = createTheme({
  palette: {
    mode: type,
    primary: {
      main: type === "dark" ? "#2d2e36" : "#151825",
      dark: "#11131a",
    },
    background: {
      default: type === "dark" ? "#13151e" : "#fafafa",
      paper: type === "light" ? "#fff" : "#13151e",
    },
    text: {
      primary: type === "light" ? "rgb(0 0 0 / 87%)" : "#fff",
    },
  },
  typography: {
    fontFamily: ["Roboto Condensed", "Poppins", "Rubik"].join(","),
  },
});

export default theme;
