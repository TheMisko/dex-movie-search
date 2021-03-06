import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import MovieCard from "../components/movieCard";
import HomeInput from "../components/HomeInput";
import Nav from "../components/nav";
import Footer from "../components/footer";

const MovieDetails = ({ match }) => {
  const [refresh, setRefresh] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [recomendations, setRecomendations] = useState([]);
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
    getMovieId();
    getData();
  }, []);

  useEffect(() => {
    getRecomendation();
  }, [movieId]);

  console.log(match.params.naziv);

  const getMovieId = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&language=en-US&query=${match.params.naziv}&page=1&include_adult=false`
      );
      const data = await response.json();
      setMovieId(data.results[0].id);
      console.log(data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const getRecomendation = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&language=en-US&page=1`
      );
      const data = await response.json();
      setRecomendations(data.results);
      console.log(data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  const getData = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${match.params.naziv}&plot=full&apikey=${key}`
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const imdb = `https://www.imdb.com/title/${data.imdbID}/`;
  return (
    <div className="movie-details">
      <Nav />
      <div className="movie-details-center">
        <div className="movie-details-container">
          <div>
            <div data-aos="zoom-in">
              <img src={data.Poster} />
            </div>
          </div>
          <div className="center-info">
            <div>
              {" "}
              <div>
                {" "}
                <h1>
                  {data.Title}({data.Year})
                </h1>
                <a className="movie-details-imdb" target="blank" href={imdb}>
                  <img src="https://vimdb.files.wordpress.com/2015/06/imdb.png" />{" "}
                  <span id="imdb-rating">
                    <h5>{data.imdbRating}</h5>
                  </span>
                </a>
                <h4>{data.imdbVotes} Glasova</h4>
              </div>
              <p>{data.Plot}</p>
              <div className="awards-movie">{data.Awards}</div>
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
              <span className="right-span">Reziser:</span> {data.Director}
            </div>
            <div className="right-info-item">
              <span className="right-span">Pisac:</span> {data.Writer}
            </div>
            <div className="right-info-item">
              <span className="right-span">Glumci:</span> {data.Actors}
            </div>
            <div className="right-info-item">
              <span className="right-span">Zanrovi:</span> {data.Genre}
            </div>
            <div className="right-info-item">
              <span className="right-span">Datum izlaska:</span> {data.Released}
            </div>
            <div className="right-info-item">
              <span className="right-span">Vreme trajanja:</span> {data.Runtime}
            </div>
            <div className="right-info-item">
              <span className="right-span">Jezik:</span> {data.Language}
            </div>
            <div className="right-info-item">
              <span className="right-span">Produkcija:</span> {data.Production}
            </div>
            <div className="right-info-item">
              <span className="right-span">MMPA Ocena:</span> {data.Rated}
            </div>
          </div>
        </div>
      </div>

      <div className="block-details"></div>
      <div className="details-preporuke">
        <h1>Preporuke na osnovu ovog filma:</h1>
      </div>
      {recomendations ? (
        <div className="movie-list-container-details">
          {recomendations.splice(0, 6).map((recomendedMovie) => (
            <div>
              <Link
                onClick={() => refreshPage()}
                to={`/films/${recomendedMovie.title}`}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <MovieCard
                  onClick={() => refreshPage()}
                  title={recomendedMovie.title}
                  poster={`https://image.tmdb.org/t/p/w500${recomendedMovie.poster_path}`}
                  year={recomendedMovie.year}
                />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="details-preporuke">
          {" "}
          <h3>Nijedna preporuka nije pronadjena</h3>
        </div>
      )}
      <div className="block"></div>

      <Footer />
    </div>
  );
};

export default MovieDetails;
