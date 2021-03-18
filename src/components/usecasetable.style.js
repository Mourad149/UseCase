import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 360;

export const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 600,
    minHeight: 500,
  },
  searchBarContainer: {
    width: "100%",
    padding: "30px 0 30px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    width: "50%",
    borderRadius: "24px ",
    backgroundColor: "#F0F8FF",
    padding: "10px",
  },
  tableCellRed: {
    background: "#FFCCCB",
  },
  tableCellGreen: {
    background: "#D0F0C0",
  },
});
