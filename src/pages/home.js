import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

import HomeHeader from "../components/homeHeader";
import MovieCard from "../components/movieCard";
import HomeInput from "../components/HomeInput";
import Pagination from "../components/pagination";
import HomeList from "../components/homeList";
import HomeFilter from "../components/homeFilter";
import ActorCard from "../components/actorCard";
import Footer from "../components/footer";
import PaginationActor from "../components/paginationActor";

import ListPagePagination from "../components/listPagePagination";
AOS.init();
const Home = () => {
  const [searchedActor, setSearchedActor] = useState([]);
  const [sortedArr, setSortedArr] = useState([]);
  const [totalResults, setTotalResults] = useState("");
  const [sortedArrAsc, setSortedArrAsc] = useState([]);
  const [sortedArrTitle, setSortedArrTitle] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [listPage, setListPage] = useState(1);
  const [documentaryPage, setDocumentaryPage] = useState(1);
  const [actorPage, setActorPage] = useState(1);
  const [searchedGenre, setSearchedGenre] = useState("");
  const [genreMovies, setGenreMovies] = useState();
  const [api, setApi] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&language=en-US&page=1"
  );

  const changeFilter = (api) => {
    setApi(api);
  };

  const sortByYear = () => {
    searchData.sort(function (a, b) {
      return a.Year - b.Year;
    });
    setSortedArr(searchData);
    setSortedArr([]);
    console.log("ARRAY", sortedArr);
  };

  const sortByYearAsc = () => {
    searchData.sort(function (a, b) {
      if (a.Year > b.Year) {
        return -1;
      } else if (b.Year > a.Year) {
        return 1;
      } else {
        return 0;
      }
    });
    setSortedArrAsc(searchData);
    setSortedArrAsc([]);
    console.log("ARRAY", sortedArr);
  };
  const sortByTitle = () => {
    searchData.sort(function (a, b) {
      if (a.Title < b.Title) {
        return -1;
      }
      if (a.Title > b.Title) {
        return 1;
      }
      return 0;
    });
    setSortedArrTitle(searchData);
    setSortedArrTitle([]);
    console.log("ARRAY", sortedArrTitle);
  };

  return (
    <div>
      <HomeHeader />
      <div className="home-center">
        {" "}
        <div className="home-direction">
          <HomeInput
            documentaryPage={documentaryPage}
            setSearchedActor={setSearchedActor}
            page={page}
            actorPage={actorPage}
            searchData={searchData}
            setSearchData={setSearchData}
            setPage={setPage}
            searchedActor={searchedActor}
            setGenreMovies={setGenreMovies}
            setTotalResults={setTotalResults}
            setSearchedGenre={setSearchedGenre}
          />{" "}
          {searchData ? (
            <div className="home-sort-container">
              <span id="sortiraj">
                <h3>Sortiraj po:</h3>{" "}
              </span>
              <div
                className="filter-select-search"
                onClick={() => sortByYear()}
              >
                Godini Rastuce
              </div>
              <div
                className="filter-select-search"
                onClick={() => sortByYearAsc()}
              >
                Godini Opadajuce
              </div>
              <div
                className="filter-select-search"
                onClick={() => sortByTitle()}
              >
                Nazivu
              </div>
            </div>
          ) : null}
          {searchData ? (
            <div className="home-pronadjeni">
              <h3>Pronadjeni filmovi:</h3>
            </div>
          ) : null}
          <div className="searched-movies-container">
            {searchData
              ? searchData.map((searchedMovies) => (
                  <div data-aos="zoom-in">
                    <Link
                      to={`/film/${searchedMovies.Title}`}
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <MovieCard
                        title={searchedMovies.Title}
                        year={searchedMovies.Year}
                        poster={searchedMovies.Poster}
                      />
                    </Link>
                  </div>
                ))
              : null}
          </div>
          {searchData ? (
            <Pagination
              totalResults={totalResults}
              setPage={setPage}
              page={page}
            />
          ) : null}
          {searchedActor ? (
            <div className="home-pronadjeni">
              <h3>Pronadjeni glumci:</h3>
            </div>
          ) : null}
          <div className="searched-movies-container">
            {searchedActor
              ? searchedActor.map((actor) => (
                  <div data-aos="zoom-in">
                    <Link
                      to={`/actorDetails/${actor.id}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      <ActorCard
                        actor={searchedActor}
                        name={actor.name}
                        id={actor.id}
                        profile={actor.profile_path}
                      />
                    </Link>
                  </div>
                ))
              : null}
          </div>
          {searchedActor ? (
            <PaginationActor
              totalResults={totalResults}
              setActorPage={setActorPage}
              actorPage={actorPage}
            />
          ) : null}
          {genreMovies ? (
            <div className="home-pronadjeni">
              <h3>Zanr {searchedGenre}:</h3>
            </div>
          ) : null}
          <div className="searched-movies-container">
            {genreMovies
              ? genreMovies.map((genre) => (
                  <div data-aos="zoom-in">
                    <Link
                      to={`/film/${genre.title}`}
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <MovieCard
                        title={genre.title}
                        year={genre.release_date}
                        poster={`https://image.tmdb.org/t/p/w500${genre.poster_path}`}
                      />
                    </Link>
                  </div>
                ))
              : null}
          </div>
          <div className="block2"></div>
          <HomeFilter changeFilter={changeFilter} />
          <HomeList listPage={listPage} api={api} />
          <ListPagePagination setListPage={setListPage} listPage={listPage} />
        </div>
      </div>

      <div className="block"></div>
      <Footer />
    </div>
  );
};

export default Home;
