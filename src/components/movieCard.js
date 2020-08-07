import React, { useState, useEffect } from "react";

const MovieCard = ({ poster, title, year }) => {
  const [moviePoster, setMoviePoster] = useState("");
  console.log(poster);
  useEffect(() => {
    checkForPoster();
  }, [poster]);
  function checkForPoster() {
    if (poster == "N/A") {
      setMoviePoster(
        "https://www.icbtech.rs/wp-content/themes/seolounge/images/no-image/No-Image-Found-400x264.png"
      );
    } else {
      setMoviePoster(poster);
    }
  }
  return (
    <div className="movie-card-direction">
      <div
        style={{
          backgroundImage: `url(${moviePoster})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
          backgroundSize: "13vw 100%",
        }}
        className="movie-card-container"
      ></div>
      <div className="movie-card-info">
        {" "}
        <h3>{title}</h3>
        <div className="movie-card-details">
          <span>{year}</span>
          <span>8.0</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
