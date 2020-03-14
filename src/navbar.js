import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/home";
import Campus from "./pages/campus";

// import { useEffect }

function Navbar() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div class="sidenav">
            <a href="#" />
            <br />
            <a href="/">Home</a>
            <div class="nav-divider"> </div>
            <a href="/campus">Campus</a>
            <div class="nav-divider"> </div>
            <Link to="/opinion">Opinion</Link>
            <div class="nav-divider"> </div>
            <Link to="/us">U.S.</Link>
            <div class="nav-divider"> </div>
            <Link to="/data">Data</Link>
            <div class="nav-divider"> </div>
            <Link to="/mag">Mag</Link>
            <div class="nav-divider"> </div>
            <Link to="/about">About</Link>
            <div class="nav-divider"> </div>
            <Link to="/join">Join</Link>
            <div class="nav-divider"> </div>
          </div>
        </Router>
        <div className="divided">
          <span class="divider" />
          <img src={logo} className="App-logo" alt="logo" />
          <span class="divider" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
