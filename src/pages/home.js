import React, { useState, useEffect } from "react";
import {Row, Col} from "reactstrap";
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


      let asset = await client.getAsset("SwkqadbMXFiT0oKlgMwBl");
      await console.log("cover photos", asset.fields.file.url);
      setPhoto('https:' + asset.fields.file.url);

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
  const [magContent, setMagContent] = useState([]);
  const [asset, setAsset] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU"
      });

      let response = await client.getEntries();
      await console.log(response.items[0]);
      setMagContent(response.items.slice(0, 3));

      let asset = await client.getAsset("4UIL0ZhTJmTNmBD4bcLEdF");
      await console.log(asset.fields.file.url);
      setAsset('https:' + asset.fields.file.url);

    };
    getArticles();
  }, []);

  if (magContent != null) {
    return (
      <div className="section">
      <div>Highlights </div>
      <div className="small-card-container">
        {magContent.map((article, i) => (
          <div style={{gridColumnStart: i+1, gridColumnEnd: i+2}}>
            <div className="small-img">
            <img className="small-card-img" src={asset}/>
            </div>
            <div style={{marginTop: "10px"}}>{article.fields.title}</div>
          </div>
        ))}
      </div> 
      </div>
    );
  }

  return <div>null</div>;
}

{/* <div className="small-card-container">
{magContent.map((article, i) => (
     <div style={{gridColumnStart: i, gridColumnEnd: i+1}}>
      <img className="small-card-img" src={asset}/>
      <div className="small-card-text">{article.fields.title}</div>
    </div>
))}
</div> */}

{/* <div className="small-card-container">
{magContent.map((article, i) => (
  <div style={{
    gridColumnStart: i,
    gridColumnEnd: i+1,
    gridRow: 1,
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "200px auto auto",
    position: "relative",
  }}>
     <div style={{
      height: "200px", 
      gridColumn: i, 
      gridRow: 1,
      position: "relative",
      overflow: "hidden"}}>

        <img className="small-img" src={asset}/>
      </div>
      
      <h4 className="small-card-text">{article.fields.title}</h4>
  </div>
))}
</div> */}

function Home() {
  return (
    <div className="content">
      <Cover />
      <br />
      <div className="section-divider" />
      <br />
      <Mag />
      <br />
      <div className="section-divider" />
      <br />
    </div>
  );
}

export default Home;
