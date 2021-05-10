import { CircularProgress, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCard from "../Components/SingleCard";

const Trending = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setData(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
    return () => {};
  }, []);

  return (
    <div>
      <Typography variant="h4" align="justify" gutterBottom>
        <span>Trending Today</span>
      </Typography>
      <Grid container spacing={2} justify="center">
        {loading ? (
          <CircularProgress />
        ) : (
          data.results.map((item) => <SingleCard key={item.id} {...item} />)
        )}
      </Grid>
    </div>
  );
};

export default Trending;
