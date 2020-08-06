import React from "react";
import { Link } from "react-router-dom";

import Nav from "../components/nav";
import ProgresBar from "../components/progresBar";

const HomeHeader = () => {
  const img =
    "https://i0.wp.com/www.radiodesign.co.uk/content/uploads/2018/05/skyfall_jellyfish_HERO.jpg?fit=1920%2C800&ssl=1";
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="home-header-container"
    >
      <Nav />
      <div className="header-movie-info">
        <div>
          <span id="header-movie">2012</span>
          <span id="header-movie">7.7/10</span>
        </div>
        <h1>SkyFall</h1>
        <p>
          "James Bond's loyalty to M is tested when her past comes back to haunt
          her. When MI6 comes under attack, 007 must track down and destroy the
          threat, no matter how personal the cost."
        </p>
        <Link
          style={{ textDecoration: "none ", color: "white" }}
          to="/film/Skyfall"
        >
          {" "}
          <div>Detalji</div>
        </Link>
      </div>
      {/* <ProgresBar /> */}
    </div>
  );
};

export default HomeHeader;
