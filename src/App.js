import React, { useEffect, useState } from "react";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import MovieDetails from "./pages/movieDetails";
import RecomnedMovie from "./pages/recomendedMovie";
import ActorDetails from "./pages/actorDetails";

function App() {
  const search = "Rambo";

  return (
    <div className="App">
      <div>
        <HashRouter primary={false}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/film/:naziv" component={MovieDetails} />
            <Route exact path="/films/:naziv" component={RecomnedMovie} />
            <Route exact path="/actorDetails/:id" component={ActorDetails} />
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
