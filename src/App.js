import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Navbar from "./navbar.js";

import Home from "./pages/home";
import Campus from "./pages/campus";

// import { useEffect }

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/campus" exact component={Campus} />
      </Router>
    </div>
  );
}

export default App;
