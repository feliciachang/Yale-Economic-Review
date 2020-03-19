import React, { useState, useEffect } from "react";
import "./pages.css";
import SignUp from "../components/signup.js";
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
      <img alt="" className="img" src={photo} />
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
      <h1>Highlights </h1>
      <div className="small-card-container">
        {magContent.map((article, i) => (
          <div key={i} style={{gridColumnStart: i+1, gridColumnEnd: i+2, backgroundColor: "#000", opacity: "90%"}}>
            <div className="small-img">
            <img alt="" className="small-card-img" src={asset}/>
            </div>
            <div style={{color: "#FFF", padding: "20px", paddingBottom: "0px", fontSize: "20px", fontWeight: "bold"}}>{article.fields.title}</div>
            <div style={{color: "#FFF", padding: "10px 20px 20px 20px"}}>By {article.fields.authors[0]}</div>
          </div>
        ))}
      </div> 
      </div>
    );
  }

  return <div>null</div>;
}

function VerticalContent() {
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
      <div className="dual-section">
        <div>
          <h1>More From</h1>
          <div className="vertical-container">
            {magContent.map((article, i) => (
              <div key={i} style={{gridRowStart: i+1, gridRowEnd: i+2, backgroundColor: "#000", opacity: "90%"}}>
                <div className="small-img">
                <img alt="" className="small-card-img" src={asset}/>
                </div>
                <div style={{color: "#FFF", padding: "20px", paddingBottom: "0px", fontSize: "20px", fontWeight: "bold"}}>{article.fields.title}</div>
            <div style={{color: "#FFF", padding: "10px 20px 20px 20px"}}>By {article.fields.authors[0]}</div>
              </div>
            ))}
          </div> 
        </div>
        <div>
          <h1>Most Read</h1>
          <div className="vertical-container">
            {magContent.map((article, i) => (
              <div key={i} style={{gridRowStart: i+1, gridRowEnd: i+2, backgroundColor: "#000", opacity: "90%"}}>
                <div className="small-img">
                <img alt="" className="small-card-img" src={asset}/>
                </div>
                <div style={{marginTop: "10px"}}>{article.fields.title}</div>
              </div>
            ))}
          </div> 
        </div>
      </div>
      </div>
    );
  }

  return <div>null</div>;
}

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
      <VerticalContent/>
      <br/>
      <br/>
      <SignUp/>
      <br/>
    </div>
  );
}

export default Home;
