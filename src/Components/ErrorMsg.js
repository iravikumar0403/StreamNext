import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "65vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ErrorMsg = ({ msg }) => {
  const styles = useStyles();
  return (
    <Typography className={styles.root}>
      {msg}. Please try after sometime.
    </Typography>
  );
};

export default ErrorMsg;
