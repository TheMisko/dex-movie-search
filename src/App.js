import React, { useEffect, useState } from "react";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import MovieDetails from "./pages/movieDetails";

function App() {
  const search = "Rambo";

  return (
    <div className="App">
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/film/:naziv" component={MovieDetails} />
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
