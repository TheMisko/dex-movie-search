import React, { useState, useEffect } from "react";

const MovieCard = ({ searchedMovies }) => {
  const [poster, setPoster] = useState("");

  useEffect(() => {
    checkForPoster();
  }, [searchedMovies]);
  function checkForPoster() {
    if (searchedMovies.Poster == "N/A") {
      setPoster(
        "https://www.icbtech.rs/wp-content/themes/seolounge/images/no-image/No-Image-Found-400x264.png"
      );
    } else {
      setPoster(searchedMovies.Poster);
    }
  }
  return (
    <div className="movie-card-direction">
      <div
        style={{
          backgroundImage: `url(${poster})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
          backgroundSize: "16vw 100%",
        }}
        className="movie-card-container"
      ></div>
      <div className="movie-card-info">
        {" "}
        <h3>{searchedMovies.Title}</h3>
        <div className="movie-card-details">
          <span>{searchedMovies.Year}</span>
          <span>8.0</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
