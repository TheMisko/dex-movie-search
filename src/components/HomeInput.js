import React, { useState, useEffect } from "react";

const HomeInput = ({
  setSearchData,
  page,
  setPage,
  searchData,
  setSearchedActor,
  searchedActor,
  setGenreMovies,
  setTotalResults,
  actorPage,
  setSearchedGenre,
  documentaryPage,
}) => {
  const apiKey = "26036bee";

  const [data, setData] = useState([]);
  const [genreApi, setGenreApi] = useState("");

  const [inputValue, setInputValue] = useState({
    movieTitle: "",
    year: "",
    actor: "",
    genre: "",
  });
  useEffect(() => {
    getData();
  }, [page]);
  useEffect(() => {
    getGenreMovies();
  }, [genreApi]);

  useEffect(() => {
    getActorData();
  }, [actorPage]);

  console.log("DATA", data);
  console.log("SEACRH", searchData);

  const getGenreMovies = async () => {
    try {
      const response = await fetch(`${genreApi}&page=${documentaryPage}`);
      const data = await response.json();

      console.log("GENRES", data);
      setGenreMovies(data.results);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const getActorData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/person?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&language=en-US&query=${inputValue.actor}&page=${actorPage}&include_adult=false`
      );
      const data = await response.json();

      setSearchedActor(data.results);

      console.log("ACTOR", searchedActor);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const getData = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${inputValue.movieTitle}&apikey=${apiKey}&page=${page}&year=${inputValue.year}`
      );
      const data = await response.json();

      setSearchData(data.Search);
      setTotalResults(data.totalResults);
      console.log("SEACRH", data.Search);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = () => {
    console.log(inputValue);
    getData();
    getActorData();
    checkForGenreId();
    setSearchedGenre(inputValue.genre);
  };
  console.log(genreApi);
  const checkForGenreId = () => {
    if (inputValue.genre === "Action") {
      setGenreApi(
        "https://api.themoviedb.org/3/discover/movie?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&with_genres=28"
      );
    } else if (inputValue.genre === "Comedy") {
      setGenreApi(
        "https://api.themoviedb.org/3/discover/movie?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&with_genres=35"
      );
    } else if (inputValue.genre === "Thriller") {
      setGenreApi(
        "https://api.themoviedb.org/3/discover/movie?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&with_genres=53"
      );
    } else if (inputValue.genre === "Sci-fi") {
      setGenreApi(
        "https://api.themoviedb.org/3/discover/movie?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&with_genres=878"
      );
    } else if (inputValue.genre === "Documentary") {
      setGenreApi(
        "https://api.themoviedb.org/3/discover/movie?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&with_genres=99"
      );
    } else {
      setGenreApi("");
    }
  };

  return (
    <div className="home-input-container">
      <form className="form-flex">
        <input
          placeholder="Film"
          className="form__input"
          name="movieTitle"
          value={inputValue.movieTitle}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Godina"
          name="year"
          className="form__input"
          value={inputValue.year}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Glumac"
          name="actor"
          className="form__input"
          value={inputValue.actor}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Action, Comedy, Sci-fi..."
          name="genre"
          className="form__input"
          value={inputValue.genre}
          onChange={handleChange}
        ></input>
      </form>
      <button className="search-btn" onClick={() => handleSubmit()}>
        Pretraga
      </button>
    </div>
  );
};

export default HomeInput;
