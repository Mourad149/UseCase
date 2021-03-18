import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./header.style";
function HeaderComponent() {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <Typography align="left" className={classes.useCaseType}>
        <span
          style={{
            fontWeight: "600",
          }}
        >
          {" "}
          Use case :
        </span>{" "}
        Mise à disposition
      </Typography>
    </div>
  );
}
export default HeaderComponent;
