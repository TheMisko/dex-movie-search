import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../components/homeHeader";
import MovieCard from "../components/movieCard";
import HomeInput from "../components/HomeInput";
import Pagination from "../components/pagination";

const Home = () => {
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
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  console.log(searchData);
  console.log(page);
  return (
    <dvi>
      <HomeHeader />
      <div className="home-center">
        {" "}
        <div className="home-direction">
          <HomeInput
            page={page}
            searchData={searchData}
            setSearchData={setSearchData}
            setPage={setPage}
          />
          <div className="searched-movies-container">
            {searchData
              ? searchData.map((searchedMovies) => (
                  <Link
                    to={`/film/${searchedMovies.Title}`}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <MovieCard searchedMovies={searchedMovies} />
                  </Link>
                ))
              : null}
          </div>
          {/* {searchData ? <Pagination setPage={setPage} /> : null} */}
          <div className="block2"></div>
          <div className="details-recomendation-home">
            <h2>Nasa preporuka:</h2>
          </div>

          <div className="movie-list-container">
            {movieList.map((movie) => (
              <Link
                to={`/film/${movie.Title}`}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <MovieCard searchedMovies={movie} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="block"></div>
    </dvi>
  );
};

export default Home;
