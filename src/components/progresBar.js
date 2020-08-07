import React, { useState, useEffect } from "react";

const ProgresBar = ({ setHeaderMovie, movieList }) => {
  const [showBar, setShowBar] = useState(true);

  const rand = () => {
    setHeaderMovie(movieList[Math.floor(Math.random() * movieList.length)]);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBar(!showBar);
      rand();
    }, 7000);
    return () => clearInterval(interval);
  }, [showBar]);

  useEffect(() => {
    setShowBar(true);
  }, [showBar]);

  return (
    <div className="quotes-container">
      {showBar ? (
        <div className="progress">
          <div className="progress-value"></div>
        </div>
      ) : null}
    </div>
  );
};

export default ProgresBar;
