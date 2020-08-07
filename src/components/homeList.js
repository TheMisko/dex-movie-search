import React, { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";
import { Link } from "react-router-dom";

const HomeList = ({ api, page }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getData();
  }, [api, page]);

  console.log(api);
  let sort = page;
  let test = `${api}&page=${page}`;

  const getData = async () => {
    try {
      const response = await fetch(test);
      const data = await response.json();

      console.log("HONME LIST", data.results);
      setMovies(data.results);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div className="home-list-container">
      {movies
        ? movies.map((movie) => (
            <Link to={`/film/${movie.title}`}>
              <MovieCard
                year={movie.release_date}
                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
              />
            </Link>
          ))
        : null}
    </div>
  );
};

export default HomeList;
