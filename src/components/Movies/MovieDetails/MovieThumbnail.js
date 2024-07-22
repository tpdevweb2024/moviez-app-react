import React from "react";

export default function MovieThumbnail({ src, alt, handleClick }) {
  return (
    <div className="movie-thumbnail">
      <img src={src} alt={alt} onClick={handleClick} />
    </div>
  );
}
