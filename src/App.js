import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LayoutComponent from "./layout/layout.component";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Didact Gothic", "sans-serif"].join(","),
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LayoutComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
