import React, { useState } from "react";
import { Link } from "react-router-dom";

import Nav from "../components/nav";
import ProgresBar from "../components/progresBar";

const HomeHeader = () => {
  const movieList = [
    {
      poster:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/Inception-1.jpg",
      title: "Inception ",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      year: "2010",
    },
    {
      poster:
        "https://cdn.onebauer.media/one/empire-images/features/5718b250b602bb802e20f3e6/Interstellar%20primary1.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg",
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      year: "2014",
    },
    {
      poster:
        "https://imgix.bustle.com/inverse/d3/99/2c/40/7e24/4eb2/8e66/c7d26b715272/how-will-the-upcomingmatrixsequel-resolve-the-deaths-of-neo-keanu-reeves-and-trinity-carrie-a.jpeg?w=2000&h=640&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces&blend=000000&blendAlpha=45&blendMode=normal",
      title: "The Matrix ",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      year: "1999",
    },
    {
      poster:
        "https://www.zekefilm.org/wp-content/uploads/2017/07/Macbeth-Cover.jpg",
      title: "Macbeth",
      description:
        "Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland.",
      year: "2015",
    },
    {
      poster:
        "https://cms-assets.theasc.com/Fight-Club-Featured.jpg?mtime=20190414011015",
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      year: "1999",
    },
  ];
  const [headerMovie, setHeaderMovie] = useState(movieList[0]);
  const img =
    "https://i0.wp.com/www.radiodesign.co.uk/content/uploads/2018/05/skyfall_jellyfish_HERO.jpg?fit=1920%2C800&ssl=1";
  return (
    <div
      style={{
        backgroundImage: `url(${headerMovie.poster})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
        backgroundSize: "100% 100%",
      }}
      className="home-header-container"
    >
      <Nav />
      <div className="header-movie-info">
        <div className="header-title">
          <div className="header-movie">{headerMovie.title}</div>
          <span id="header-movie">2012</span>

          <span id="header-movie">7.7/10</span>
        </div>

        <p>{headerMovie.description}</p>
        <Link
          style={{
            textDecoration: "none ",
            color: "white",
            width: "fit-content",
          }}
          to={`film/${headerMovie.title}`}
        >
          {" "}
          <div className="header-btn">Vise Detalja</div>
        </Link>
        <ProgresBar setHeaderMovie={setHeaderMovie} movieList={movieList} />
      </div>
    </div>
  );
};

export default HomeHeader;
