import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 360;

export const useStyles = makeStyles((theme) => ({
  profileContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  mainContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: "100%",
  },
  profileIcon: {
    fontSize: "4rem",
    color: "#04b3cb",
    "&:hover": {
      cursor: "pointer",
      color: "#0b2045",
      transition: "color 1s",
    },
    transition: "color 1s",
  },
  useCaseTableContainer: {
    display: "flex",
    alignItems: "center",
  },
}));
