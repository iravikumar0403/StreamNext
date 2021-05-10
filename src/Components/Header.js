import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            StreamNext
          </Typography>
          <Link to="/search" className={classes.btn}>
            <Button color="inherit">Search</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
