import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 360;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
  },
  OpratorLogo: {
    maxHeight: "20rem",
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  sideMenuItems: {
    background: "#04b3cb",
    height: "100%",
  },
}));
