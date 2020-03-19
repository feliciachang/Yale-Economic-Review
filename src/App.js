import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Navbar from "./navbar.js";
import Footer from "./components/footer.js";

import Home from "./pages/home";
import Campus from "./pages/campus";
import Content from "./components/content";

// import { useEffect }

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/campus" exact component={Campus} />
        <Route path="/content/:id" exact component={Content}/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
