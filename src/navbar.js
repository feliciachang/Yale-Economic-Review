import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import logo from "./yer.svg";
import "./App.css";

function Navbar() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <div className="leftnav">
            <a href="#" />
            <a href="#" />
            <a href="#" />
            <div style={{ paddingBottom: "80px" }}></div>
            <a href="/" style={{ color: "#2C2C2C" }}>
              Home
            </a>
            <hr
              style={{
                display: "block",
                border: 0,
                borderTop: "1px solid rgb(240, 240, 240)",
                padding: 0,
              }}
            />
            <a href="/subpages?tag=Campus" style={{ color: "#2C2C2C" }}>
              Campus
            </a>
            <hr
              style={{
                display: "block",
                border: 0,
                borderTop: "1px solid rgb(240, 240, 240)",
                padding: 0,
              }}
            />
            <a href="/subpages?tag=Opinion" style={{ color: "#2C2C2C" }}>
              Opinion
            </a>
            <hr
              style={{
                display: "block",
                border: 0,
                borderTop: "1px solid rgb(240, 240, 240)",
                padding: 0,
              }}
            />
            <a href="/subpages?tag=US" style={{ color: "#2C2C2C" }}>
              U.S.
            </a>
            <hr
              style={{
                display: "block",
                border: 0,
                borderTop: "1px solid rgb(240, 240, 240)",
                padding: 0,
              }}
            />
            <a href="/subpages?tag=World" style={{ color: "#2C2C2C" }}>
              World
            </a>
            <hr
              style={{
                display: "block",
                border: 0,
                borderTop: "1px solid rgb(240, 240, 240)",
                padding: 0,
              }}
            />
            <a href="/subpages?tag=Business" style={{ color: "#2C2C2C" }}>
              Business
            </a>
            <hr
              style={{
                display: "block",
                border: 0,
                borderTop: "1px solid rgb(240, 240, 240)",
                padding: 0,
              }}
            />
            <a href="/mag" style={{ color: "#2C2C2C" }}>
              Mag
            </a>
            <hr
              style={{
                display: "block",
                border: 0,
                borderTop: "1px solid rgb(240, 240, 240)",
                padding: 0,
              }}
            />
            <a href="/about" style={{ color: "#2C2C2C" }}>
              About
            </a>
            <hr
              style={{
                display: "block",
                border: 0,
                borderTop: "1px solid rgb(240, 240, 240)",
                padding: 0,
              }}
            />
            <a href="/team" style={{ color: "#2C2C2C" }}>
              Team
            </a>
            <hr
              style={{
                display: "block",
                border: 0,
                borderTop: "1px solid rgb(240, 240, 240)",
                padding: 0,
              }}
            />
            <a href="/submit" style={{ color: "#2C2C2C" }}>
              Submit
            </a>
            <hr
              style={{
                display: "block",
                border: 0,
                borderTop: "1px solid rgb(240, 240, 240)",
                padding: 0,
              }}
            />
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
