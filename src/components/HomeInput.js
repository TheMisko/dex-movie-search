import React, { useState, useEffect } from "react";

const HomeInput = ({ setSearchData, page, setPage, searchData }) => {
  const apiKey = "26036bee";
  const key = "a3a762f0bd65bbbe87534c5c4acc9a3f";
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState({
    movieTitle: "",
    year: "",
    actor: "",
    genre: "",
  });
  useEffect(() => {
    getData();
  }, []);
  //   useEffect(() => {
  //     getData();
  //   }, setPage);

  console.log(typeof page);
  console.log("DATA", data);
  console.log("SEACRH", searchData);

  const getData = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${inputValue.movieTitle}&apikey=${apiKey}&page=1&year=${inputValue.year}`
      );
      const data = await response.json();
      //   setData(data);
      console.log(data);
      setSearchData(data.Search);
      console.log("SEACRH", data.Search);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };

  const handleSubmit = () => {
    console.log(inputValue);
    getData();
  };
  console.log("movie", inputValue.movieTitle);
  console.log("year", inputValue.year);
  console.log("actor", inputValue.actor);
  console.log("genre", inputValue.genre);

  return (
    <div className="home-input-container">
      <form className="form-flex">
        <input
          placeholder="Movie"
          className="form__input"
          name="movieTitle"
          value={inputValue.movieTitle}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Year"
          name="year"
          className="form__input"
          value={inputValue.year}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Actor"
          name="actor"
          className="form__input"
          value={inputValue.actor}
          onChange={handleChange}
        ></input>
        <input
          placeholder="Genre"
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
