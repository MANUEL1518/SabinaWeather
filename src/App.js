import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";

export default function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/Home">
                    <a class="nav-link active" aria-current="page">Home</a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/About"><a class="nav-link">About</a></Link>
                </li>
                <li class="nav-item">
                  <Link to="/Users"><a class="nav-link">Users</a></Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}