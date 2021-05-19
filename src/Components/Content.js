import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router";
import Trending from "../Pages/Trending";
import Movies from "../Pages/Movies";
import TvSeries from "../Pages/TvSeries";
import SearchPage from "../Pages/SearchPage";
import ItemDetails from "../Pages/ItemDetails";

const useStyles = makeStyles({
  wrapper: {
    marginBottom: "5rem",
  },
});
const Content = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.wrapper}>
      <Switch>
        <Route exact path="/">
          <Trending />
        </Route>
        <Route path="/trending">
          <Trending />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/tvseries">
          <TvSeries />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/:type/:id">
          <ItemDetails />
        </Route>
      </Switch>
    </Container>
  );
};

export default Content;
