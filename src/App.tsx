import { useState, Suspense } from "react";
import { AnimateSharedLayout } from "framer-motion";
import {
  CssBaseline,
  ThemeProvider,
  ThemeOptions,
  PaletteMode,
} from "@mui/material";

import { theme } from "./theme";
import UI from "./UI";

function App() {
  const [theming, setTheme] = useState<ThemeOptions>(theme);
  let type = localStorage.getItem("theme:mode");

  const toggleTheme = () => {
    let mode: PaletteMode =
      theming.palette?.mode === "light" ? "dark" : "light";

    setTheme((prev) => ({
      ...prev,
      palette: {
        ...prev.palette,
        mode: mode,
        primary: {
          main: mode === "dark" ? "#2d2e36" : "#151825",
          dark: "#11131a",
        },
        background: {
          default: mode === "dark" ? "#13151e" : "#fafafa",
          paper: mode === "light" ? "#fff" : "#13151e",
        },
        text: {
          primary: mode === "light" ? "rgb(0 0 0 / 87%)" : "#fff",
        },
      },
    }));
    localStorage.setItem("theme:mode", mode);
  };

  return (
    <AnimateSharedLayout type="crossfade">
      <ThemeProvider theme={theming}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <UI {...{ toggleTheme, type }} />
        </Suspense>
      </ThemeProvider>
    </AnimateSharedLayout>
  );
}

export default App;
