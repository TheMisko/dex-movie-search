import React, { useState, useEffect } from "react";

const ProgresBar = () => {
  const [showBar, setShowBar] = useState(true);

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBar(!showBar);

      console.log("NOVI FILM");
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
