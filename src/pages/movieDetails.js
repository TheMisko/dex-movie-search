import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MovieCard from "../components/movieCard";
import HomeInput from "../components/HomeInput";
import Nav from "../components/nav";

const MovieDetails = ({ match }) => {
  const [refresh, setRefresh] = useState(false);
  const refreshPage = () => {
    setRefresh(!refresh);
  };
  const movieList = [
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      Title: "Inception ",
      Year: "2010",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
      Title: "Interstellar",
      Year: "2014",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
      Title: "The Matrix ",
      Year: "1999",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY999_CR0,0,673,999_AL_.jpg",
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
      Title: "Fight Club",
      Year: "1999",
    },
  ];
  const key = "26036bee";
  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, refresh);
  console.log(match.params.naziv);
  const getData = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${match.params.naziv}&plot=full&apikey=${key}`
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  console.log(data.Ratings ? data.Ratings[0].Value : null);
  const imdb = `https://www.imdb.com/title/${data.imdbID}/`;
  return (
    <div className="movie-details">
      <Nav />
      <div className="movie-details-center">
        <div className="movie-details-container">
          <div>
            <img src={data.Poster} />
          </div>
          <div className="center-info">
            <div>
              {" "}
              <div>
                {" "}
                <h1>
                  {data.Title}({data.Year})
                </h1>
                {/* <a href={imdb} className="imdb-img">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/New-imdb-logo.png/800px-New-imdb-logo.png" />
                </a> */}
                <h4>
                  {data.imdbVotes} {data.imdbRating}
                </h4>
              </div>
              <p>{data.Plot}</p>
              <div>{data.Awards}</div>
            </div>

            <div className="ratings">
              <div>
                {data.Ratings ? (
                  <div>
                    {data.Ratings.map((rating) => (
                      <div>
                        {rating.Source}: {rating.Value}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="right-info">
            <div className="right-info-item">
              <span>Director:</span> {data.Director}
            </div>
            <div className="right-info-item">
              <span>Writer:</span> {data.Writer}
            </div>
            <div className="right-info-item">
              <span>Actors:</span> {data.Actors}
            </div>
            <div className="right-info-item">
              <span>Genres:</span> {data.Genre}
            </div>
            <div className="right-info-item">
              <span>Release Date:</span> {data.Released}
            </div>
            <div className="right-info-item">
              <span>Run Time:</span> {data.Runtime}
            </div>
            <div className="right-info-item">
              <span>Language:</span> {data.Language}
            </div>
            <div className="right-info-item">
              <span>Production:</span> {data.Production}
            </div>
            <div className="right-info-item">
              <span>MMPA Rating:</span> {data.Rated}
            </div>
          </div>
        </div>
      </div>
      {/* <HomeInput /> */}
      <div className="block"></div>
      {/* <div className="details-recomendation">
        <h2>Our Recomendation:</h2>
      </div>
      <div className="movie-list-container-details">
        {movieList.map((movie) => (
          <div>
            <Link
              to={`/film/${movie.Title}`}
              style={{ textDecoration: "none" }}
            >
              {" "}
              <MovieCard onClick={() => refreshPage()} searchedMovies={movie} />
            </Link>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MovieDetails;
