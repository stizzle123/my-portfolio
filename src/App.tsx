import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import UI from "./UI";

function App() {
  const [title, setTitle] = useState("");
  const [timeline, setTimeline] = useState("");
  return (
    <AnimateSharedLayout type="crossfade">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UI {...{ title, setTitle, timeline, setTimeline }} />
      </ThemeProvider>
    </AnimateSharedLayout>
  );
}

export default App;
