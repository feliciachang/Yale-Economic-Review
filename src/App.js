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
      </Router>
      <Footer />
    </div>
  );
}

export default App;
