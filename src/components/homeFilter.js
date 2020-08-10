import React, { useState, useEffect } from "react";

const HomeFilter = ({ changeFilter }) => {
  const apiFilter = [
    {
      genre: "Popular",
      api:
        "https://api.themoviedb.org/3/movie/popular?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&language=en-US&page=1",
    },

    {
      genre: "Action",
      api:
        "https://api.themoviedb.org/3/discover/movie?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&with_genres=28",
    },
    {
      genre: "Comedy",

      api:
        "https://api.themoviedb.org/3/discover/movie?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&with_genres=35",
    },
    {
      genre: "Thriller",
      api:
        "https://api.themoviedb.org/3/discover/movie?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&with_genres=53",
    },
    {
      genre: "Sci-fi",
      api:
        "https://api.themoviedb.org/3/discover/movie?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&with_genres=878",
    },
    {
      genre: "Documentary",
      api:
        "https://api.themoviedb.org/3/discover/movie?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&with_genres=99",
    },
  ];

  return (
    <div className="filter-center">
      <div className="home-filter-container">
        <div className="type-btns">
          {apiFilter.map((genre) => (
            <div
              className="filter-select"
              onClick={() => changeFilter(genre.api)}
            >
              {genre.genre}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFilter;
