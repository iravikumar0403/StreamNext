import {
  Badge,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { img_300 } from "../config/config";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  card: { width: "100%" },
  thumbnail: {
    height: 300,
    margin: "5px",
    borderRadius: "5px",
  },
  title: {
    height: "3rem",
    overflow: "hidden",
  },
  details: {
    height: 70,
  },
  subtitle: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const SingleCard = ({
  id,
  name,
  media_type,
  title,
  poster_path,
  first_air_date,
  release_date,
  vote_average,
}) => {
  const classes = useStyles();
  return (
    <Grid item md={3} sm={4} xs={6}>
      <Link to={`/${media_type}/${id}`} className="link">
        <Badge
          badgeContent={vote_average}
          color={vote_average > 7 ? "secondary" : "error"}
          className={classes.root}
        >
          <Card variant="outlined" elevation={2} className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.thumbnail}
                height="250"
                image={`${img_300}${poster_path}`}
                title={name || title}
              />
              <CardContent className={classes.details}>
                <div className={classes.title}>
                  <Typography align="center">{name || title}</Typography>
                </div>
                <Typography variant="body2" className={classes.subtitle}>
                  <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
                  <span>{first_air_date || release_date}</span>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Badge>
      </Link>
    </Grid>
  );
};

export default SingleCard;
