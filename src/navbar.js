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
          <div className="sidenav">
            <a href="#" />
            <br />
            <br />
            <a href="/">Home</a>
            <div className="nav-divider"> </div>
            <a href="/campus">Campus</a>
            <div className="nav-divider"> </div>
            <Link to="/opinion">Opinion</Link>
            <div className="nav-divider"> </div>
            <Link to="/us">U.S.</Link>
            <div className="nav-divider"> </div>
            <Link to="/data">Data</Link>
            <div className="nav-divider"> </div>
            <Link to="/mag">Mag</Link>
            <div className="nav-divider"> </div>
            <Link to="/about">About</Link>
            <div className="nav-divider"> </div>
            <Link to="/join">Join</Link>
            <div className="nav-divider"> </div>
          </div>
        </Router>
        <div className="divided">
          <span className="divider" />
          <img src={logo} className="App-logo" alt="logo" />
          <span className="divider" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
