import React from "react";
import HeaderComponent from "../components/header.component";
import { useStyles } from "./main.style";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import UseCaseTable from "../components/usecasetable.component";
function MainComponent() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.profileContainer}>
        <AccountCircleIcon className={classes.profileIcon} />
      </div>
      <HeaderComponent />
      <div className={classes.useCaseTableContainer}>
        <UseCaseTable />
      </div>
    </div>
  );
}
export default MainComponent;
