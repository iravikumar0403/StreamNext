import { CircularProgress, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorMsg from "../Components/ErrorMsg";
import SingleCard from "../Components/SingleCard";

const TvSeries = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        const error = JSON.parse(JSON.stringify(err));
        setError(error.message);
      });
  }, []);

  return (
    <div>
      {error ? (
        <ErrorMsg msg={error} />
      ) : (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            <span>DISCOVER SERIES</span>
          </Typography>
          <Grid container spacing={2} justify="center">
            {loading ? (
              <CircularProgress color="secondary" />
            ) : (
              data.results.map((item) => <SingleCard key={item.id} {...item} />)
            )}
          </Grid>
        </>
      )}
    </div>
  );
};

export default TvSeries;
