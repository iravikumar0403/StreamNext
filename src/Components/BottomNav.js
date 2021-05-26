import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Movie, Tv, Whatshot } from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    position: "fixed",
    bottom: -2,
    zIndex: "100",
  },
  icons: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
}));
const BottomNav = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        onClick={() => history.push("/")}
        style={{ color: "#fff" }}
        className={classes.icons}
        label="Trending"
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        onClick={() => history.push("/movies")}
        style={{ color: "#fff" }}
        className={classes.icons}
        label="Movies"
        icon={<Movie />}
      />
      <BottomNavigationAction
        onClick={() => history.push("/tvseries")}
        style={{ color: "#fff" }}
        className={classes.icons}
        label="TV Series"
        icon={<Tv />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
