import React from "react";
import { Link } from "react-router-dom";

import NavInput from "../components/navInput";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left-items">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Dex Pretraga</h1>
        </Link>

        <h3>Filmovi</h3>
        <h3>Serija</h3>
        <h3>Lista</h3>
      </div>
      {/* <div>
        <NavInput />
      </div> */}
    </div>
  );
};

export default Nav;
