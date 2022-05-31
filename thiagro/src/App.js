import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import theme from "./constants/theme";
import Router from "./routes/Router";

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
  return (
    <ThemeProvider theme={theme}>
      <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
    </ThemeProvider>
  );
}

export default App;
