import React from "react";

export default function MovieContent({ data }) {
  return (
    <div className="movie-content">
      <h2 className="title">
        {data.title} ({data.release_year})
      </h2>
      <div className="categories">Catégories : {data.categories}</div>
      <div className="infos">
        <div className="productors">Productors : {data.productors}</div>
        <div className="directors">Directors : {data.directors}</div>
        <div className="revenue">Revenue : {data.revenues}</div>
      </div>
    </div>
  );
}
