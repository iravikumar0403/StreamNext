import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "10px",
    backgroundColor: theme.palette.primary,
    zIndex: "100",
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    backgroundColor: theme.palette.secondary.main,
    textDecoration: "none",
    color: "#000",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            StreamNext
          </Typography>
          <Button
            onClick={() => history.push("/search")}
            color="inherit"
            className={classes.btn}
          >
            Search
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
