import React from "react";
import Movie from "./MovieDetails/Movie";
import "./MoviesList.css";
import movies from "../../all.json";

export default function MoviesList() {
  return (
    <div className="movies">
      {movies.map((movie, index) => {
        return <Movie key={index} movie={movie} />;
      })}
    </div>
  );
}
