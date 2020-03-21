import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function Navbar() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div className="sidenav">
            <a href="#" />
            <br />
            <br />
            <br />
            <a href="/">About</a>
            <div className="nav-divider"> </div>
            <a href="/subpages?tag=Campus">Team</a>
            <div className="nav-divider"> </div>
            <a href="/subpages?tag=Opinion">Join</a>
            <div className="nav-divider"> </div>
          </div>
          <div className="leftnav">
            <a href="#" />
            <br />
            <br />
            <br />
            <a href="/">Home</a>
            <div className="nav-divider"> </div>
            <a href="/subpages?tag=Campus">Campus</a>
            <div className="nav-divider"> </div>
            <a href="/subpages?tag=Opinion">Opinion</a>
            <div className="nav-divider"> </div>
            <a href="/subpages?tag:us">U.S.</a>
            <div className="nav-divider"> </div>
            <a href="/subpages?tag:data">Data</a>
            <div className="nav-divider"> </div>
            <Link to="/mag">Mag</Link>
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
