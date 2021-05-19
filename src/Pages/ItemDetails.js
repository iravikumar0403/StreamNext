import {
  Button,
  Chip,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { YouTube } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ErrorMsg from "../Components/ErrorMsg";
import { img_300, img_500 } from "../config/config";
import styles from "../css/ItemDetails.module.css";

const useStyles = makeStyles((theme) => ({
  genre: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  btn: {
    background: "linear-gradient(45deg, #FE6B8B , #FF8E53 )",
    borderRadius: 5,
    color: "white",
    height: 48,
    width: "100%",
  },
}));

const ItemDetails = () => {
  const { type, id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [watchProviders, setWatchProviders] = useState([]);
  const [error, setError] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [type, id]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        setVideoData(res.data.results);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [type, id]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setWatchProviders(res.data.results["IN"].flatrate);
        console.log(res.data.results["IN"]?.flatrate);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [type, id]);

  const { name, poster_path, title, overview, genres, tagline } = {
    ...data,
  };

  return (
    <div className={styles.detailsWrapper}>
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : error ? (
        <ErrorMsg />
      ) : (
        <>
          <img
            src={`${img_500}/${poster_path}`}
            alt={title || name}
            className={styles.thumbnail}
          />
          <div className={styles.content}>
            <Typography variant="h3">{title || name}</Typography>
            {tagline && (
              <Typography variant="subtitle1" align="center" paragraph>
                Tagline: {tagline}
              </Typography>
            )}
            <Typography
              variant="subtitle1"
              align="justify"
              paragraph
              className={styles.overview}
            >
              {overview}
            </Typography>
            <div>
              <Typography
                component="div"
                gutterBottom
                className={classes.genre}
              >
                Genres:
                {genres?.map((g) => (
                  <Chip className={styles.chip} label={g.name} key={g.id} />
                ))}
              </Typography>
            </div>
            {watchProviders && (
              <div className={styles.watchProvidersWrapper}>
                <Typography>Streaming Now</Typography>
                <div className={styles.cardsGrid}>
                  {watchProviders?.map((provider) => {
                    return (
                      <div className={styles.streamingCard}>
                        <img
                          src={`${img_300}${provider.logo_path}`}
                          alt={provider.provider_name}
                        />
                        <Typography>{provider.provider_name}</Typography>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <a
              href={`https://www.youtube.com/watch?v=${videoData[0]?.key}`}
              target="_blank"
              rel="noreferrer"
              style={{ width: "100%" }}
            >
              <Button className={classes.btn}>
                <YouTube />
                <Typography>Watch Trailer</Typography>
              </Button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetails;
