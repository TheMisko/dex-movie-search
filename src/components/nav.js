import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left-items">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Dex Pretraga</h1>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
