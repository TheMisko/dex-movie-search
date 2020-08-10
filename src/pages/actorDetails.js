import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

const ActorDetails = ({ match }) => {
  const [actor, setActor] = useState({});
  useEffect(() => {
    getActorDetails();
  }, []);
  const getActorDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${match.params.id}?api_key=a3a762f0bd65bbbe87534c5c4acc9a3f&language=en-US`
      );
      const data = await response.json();
      //   setData(data);
      console.log("ACTOR DETAILS", data);
      setActor(data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div>
      <Nav />
      <div className="actor-details-container">
        <div>
          {" "}
          <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} />
        </div>
        <div className="actor-details">
          <h3>
            <span id="actor-span">Ime:</span> {actor.name}
          </h3>{" "}
          <h4>
            <span id="actor-span">Datum Rodjenja:</span> {actor.birthday}
          </h4>{" "}
          <h4>
            <span id="actor-span">Mesto porekla:</span> {actor.place_of_birth}
          </h4>{" "}
          <p>{actor.biography}</p>
          <a
            target="_blank"
            href={`https://www.imdb.com/name/${actor.imdb_id}/?ref_=nv_sr_srsg_6`}
          >
            <img src="https://vimdb.files.wordpress.com/2015/06/imdb.png" />{" "}
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActorDetails;
