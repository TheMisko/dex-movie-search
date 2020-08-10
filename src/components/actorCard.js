import React, { useState, useEffect } from "react";

const ActorCard = ({ name, profile, id, actor }) => {
  useEffect(() => {
    checkForImg();
  }, [profile]);

  const [profileImg, setProfileImg] = useState("");
  const checkForImg = () => {
    if (profile === null) {
      setProfileImg(
        "https://www.icbtech.rs/wp-content/themes/seolounge/images/no-image/No-Image-Found-400x264.png"
      );
    } else {
      setProfileImg(`https://image.tmdb.org/t/p/w500${profile}`);
    }
  };

  return (
    <div className="actor-card-container">
      <img src={profileImg} />
      <div className="actor-card-name">{name}</div>
    </div>
  );
};

export default ActorCard;
