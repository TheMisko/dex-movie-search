import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import MovieCard from "../components/movieCard";
import Footer from "../components/footer";
import Nav from "../components/nav";

const RecomendedMovie = ({ match }) => {
  const [refresh, setRefresh] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [recomendations, setRecomendations] = useState([]);
  const refreshPage = () => {
    setRefresh(!refresh);
  };

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
                <a className="movie-details-imdb" target="blank" href={imdb}>
                  <img src="https://vimdb.files.wordpress.com/2015/06/imdb.png" />{" "}
                  <span id="imdb-rating">
                    <h5>{data.imdbRating}</h5>
                  </span>
                </a>
                <h4>{data.imdbVotes} Glasova</h4>
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
              <span>Direktor:</span> {data.Director}
            </div>
            <div className="right-info-item">
              <span>Pisac:</span> {data.Writer}
            </div>
            <div className="right-info-item">
              <span>Glumci:</span> {data.Actors}
            </div>
            <div className="right-info-item">
              <span>Zanrovi:</span> {data.Genre}
            </div>
            <div className="right-info-item">
              <span>Datum izlaska:</span> {data.Released}
            </div>
            <div className="right-info-item">
              <span>Vreme trajanja:</span> {data.Runtime}
            </div>
            <div className="right-info-item">
              <span>Jezik:</span> {data.Language}
            </div>
            <div className="right-info-item">
              <span>Produkcija:</span> {data.Production}
            </div>
            <div className="right-info-item">
              <span>MMPA Ocena:</span> {data.Rated}
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
                to={`/film/${recomendedMovie.title}`}
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

export default RecomendedMovie;
