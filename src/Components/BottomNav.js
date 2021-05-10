import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Movie, Tv, Whatshot } from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.dark,
    position: "fixed",
    bottom: -2,
    zIndex: "100",
  },
  icons: {
    color: "white",
    backgroundColor: theme.palette.primary.dark,
  },
}));
const BottomNav = () => {
  let history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  useEffect(() => {
    switch (value) {
      case 0: {
        history.push("/");
        break;
      }
      case 1: {
        history.push("/movies");
        break;
      }
      case 2: {
        history.push("/tvseries");
        break;
      }
      case 3: {
        history.push("/search");
        break;
      }
      default: {
        history.push("/");
      }
    }
    return () => {};
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "#fff" }}
        className={classes.icons}
        label="Trending"
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        style={{ color: "#fff" }}
        className={classes.icons}
        label="Movies"
        icon={<Movie />}
      />
      <BottomNavigationAction
        style={{ color: "#fff" }}
        className={classes.icons}
        label="TV Series"
        icon={<Tv />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
