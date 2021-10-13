import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import UI from "./UI";

function App() {
  const [title, setTitle] = useState("");
  const [timeline, setTimeline] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UI {...{ title, setTitle, timeline, setTimeline }} />
    </ThemeProvider>
  );
}

export default App;
