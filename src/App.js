import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./navbar.js";
import Footer from "./components/footer.js";

import Home from "./pages/home";
import SubPages from "./pages/subpages";
import StaticPages from "./components/staticpages";
import Content from "./components/content";
import Mag from "./pages/mag";
import Search from "./pages/search";

import ReactGA from "react-ga";
ReactGA.initialize("UA-171070849-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/subpages" exact component={SubPages} />
        <Route path="/content/:id" exact component={Content} />
        <Route path="/mag" exact component={Mag} />
        <Route path="/static" exact component={StaticPages} />
        <Route path="/search" exact component={Search} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
