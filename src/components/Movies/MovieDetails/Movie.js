import React from "react";
import MovieThumbnail from "./MovieThumbnail";
import MovieContent from "./MovieContent";
import "./Movie.css";

export default function Movie(props) {
  return (
    <div className="movie">
      <MovieThumbnail alt={props.movie.title} src={props.movie.thumbnail_url} />
      <MovieContent data={props.movie} />
    </div>
  );
}
