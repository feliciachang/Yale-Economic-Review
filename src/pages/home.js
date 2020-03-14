import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./pages.css";
const contentful = require("contentful");

function Cover() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const getArticle = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU"
      });

      let response = await client.getEntry("4GRjQ8wzdSyw0MXCPGmsSi");
      await console.log(response.fields);

      setTitle(response.fields.title);
      setAuthor(response.fields.authors[0]);
      setPhoto("https://felswebsite.s3.amazonaws.com/BectonWall2.jpg");
    };
    getArticle();
  }, []);

  return (
    <div className="img-container">
      <img className="img" src={photo} />
      <div className="img-text">
        <h1>{title}</h1>
        <h5>By {author}</h5>
      </div>
    </div>
  );
}

function Mag() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const getArticle = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU"
      });

      let response = await client.getEntry("4GRjQ8wzdSyw0MXCPGmsSi");
      await console.log(response.fields);

      setTitle(response.fields.title);
      setAuthor(response.fields.authors[0]);
      setPhoto("https://felswebsite.s3.amazonaws.com/BectonWall2.jpg");
    };
    getArticle();
  }, []);

  return (
    <div className="img-container">
      <img className="img" src={photo} />
      <div className="img-text">
        <h1>{title}</h1>
        <h5>By {author}</h5>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="content">
      <Cover />
      <br />
      <div class="section-divider" />
    </div>
  );
}

export default Home;
