import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import SideMenuComponent from "../components/sidemenu.component";

import { useStyles } from "./layout.styles";
import MainComponent from "../main/main.component";

export default function LayoutComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideMenuComponent />
      <div className={classes.content}>
        <MainComponent />
      </div>
    </div>
  );
}
