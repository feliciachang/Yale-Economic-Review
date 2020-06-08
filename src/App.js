import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Navbar from "./navbar.js";
import Footer from "./components/footer.js";

import Home from "./pages/home";
import SubPages from "./pages/subpages";
import Content from "./components/content";
import Mag from "./pages/mag";
import About from "./pages/about";
import Team from "./pages/team";
import Submit from "./pages/submit";

// import { useEffect }

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/subpages" exact component={SubPages} />
        <Route path="/content/:id" exact component={Content} />
        <Route path="/mag" exact component={Mag} />
        <Route path="/about" exact component={About} />
        <Route path="/team" exact component={Team} />
        <Route path="/submit" exact component={Submit} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
