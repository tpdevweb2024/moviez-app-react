import React from "react";

export default function MovieThumbnail({ src, alt }) {
  return (
    <div className="movie-thumbnail">
      <img src={src} alt={alt} />
    </div>
  );
}
