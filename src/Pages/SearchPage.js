import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import axios from "axios";
import React, { useState } from "react";
import ErrorMsg from "../Components/ErrorMsg";
import SingleCard from "../Components/SingleCard";

const SearchPage = () => {
  const [inputTxt, setInputTxt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  const useStyles = makeStyles((theme) => ({
    searchForm: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem",
    },
    btn: {
      backgroundColor: theme.palette.secondary.main,
      textDecoration: "none",
      color: "#000",
      borderRadius: "4px",
      padding: "0.5rem 1rem",
      margin: "1rem",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    formSelect: {
      minWidth: 140,
      margin: "0px 10px",
    },
  }));

  const searchHandler = (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.REACT_APP_API_KEY}&query=${inputTxt}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        const error = JSON.parse(JSON.stringify(err));
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const styles = useStyles();

  return (
    <>
      <form className={styles.searchForm} onSubmit={searchHandler}>
        <TextField
          variant="outlined"
          label="Search"
          color="secondary"
          fullWidth
          required
          className={styles.searchInput}
          value={inputTxt}
          onChange={(e) => setInputTxt(e.target.value)}
        />
        <FormControl
          color="secondary"
          variant="filled"
          className={styles.formSelect}
          required
        >
          <InputLabel id="searchType">Search in</InputLabel>
          <Select
            labelId="searchType"
            id="searchType"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value={"movie"}>Movies</MenuItem>
            <MenuItem value={"tv"}>TV Series</MenuItem>
          </Select>
        </FormControl>
        <Button className={styles.btn} type="submit">
          <Search />
        </Button>
      </form>
      <Grid container spacing={2} justify="center">
        {error ? (
          <ErrorMsg msg={error} />
        ) : loading ? (
          <CircularProgress color="secondary" />
        ) : (
          data.results?.map((item) => {
            item = { ...item, media_type: type };
            console.log(item);
            return <SingleCard key={item.id} {...item} />;
          })
        )}
      </Grid>
    </>
  );
};

export default SearchPage;
