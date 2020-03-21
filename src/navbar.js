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
            <div style={{paddingBottom: "80px"}}></div>
            <a href="/">About</a>
            <hr style={{
                  display: "block",
                  border: 0,
                  borderTop: "1px solid #000",
                  padding: 0,
            }}/>          
            <a href="/subpages?tag=Campus">Team</a>
            <hr style={{
                  display: "block",
                  border: 0,
                  borderTop: "1px solid #000",
                  padding: 0,
            }}/>
            <a href="/subpages?tag=Opinion">Join</a>
            <hr style={{
                  display: "block",
                  border: 0,
                  borderTop: "1px solid #000",
                  padding: 0,
            }}/>
          </div>
          <div className="leftnav">
            <a href="#" />
            <div style={{paddingBottom: "80px"}}></div>
            <a href="/">Home</a>
            <hr style={{
                  display: "block",
                  border: 0,
                  borderTop: "1px solid #000",
                  padding: 0,
            }}/>  
            <a href="/subpages?tag=Campus">Campus</a>
            <hr style={{
                  display: "block",
                  border: 0,
                  borderTop: "1px solid #000",
                  padding: 0,
            }}/>  
            <a href="/subpages?tag=Opinion">Opinion</a>
            <hr style={{
                  display: "block",
                  border: 0,
                  borderTop: "1px solid #000",
                  padding: 0,
            }}/>  
            <a href="/subpages?tag:us">U.S.</a>
            <hr style={{
                  display: "block",
                  border: 0,
                  borderTop: "1px solid #000",
                  padding: 0,
            }}/>  
            <a href="/subpages?tag:data">Data</a>
            <hr style={{
                  display: "block",
                  border: 0,
                  borderTop: "1px solid #000",
                  padding: 0,
            }}/>  
            <a href="#">Mag</a>
            <hr style={{
                  display: "block",
                  border: 0,
                  borderTop: "1px solid #000",
                  padding: 0,
            }}/>  
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
