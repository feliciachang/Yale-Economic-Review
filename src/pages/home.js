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
      <div style={{
          position: "absolute",
          bottom: "-4%",
          color: "#fff",
          opacity: "100%",
          paddingRight: "20%"
      }}>
        <div style={{
            fontSize: "1.3vw",
            fontWeight: "bold",
            textAlign: "center",
            color: "black",
            backgroundColor: "white",
            borderRadius: "0rem 2rem 2rem 0rem",
            padding: "3px 10px 3px 3px",
            width: "15%"
        }}>Cover Story</div>
        <div style={{
            right: 0,
            fontSize: "9vw",
            fontWeight: "bold",
            textAlign: "left"
        }}>{title}</div>
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









function ToggleSubjects() {
  const [magContent, setMagContent] = useState([]);
  const [contentType, setContentType] = useState("Campus");
  const [asset, setAsset] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU"
      });

      console.log("contentType", contentType);
      let response = await client.getEntries({
        'fields.articleType': contentType,
        'content_type': 'articles'
      });
      console.log(response.fields);
      setMagContent(response.items.slice(0, 3));

      let asset = await client.getAsset("4UIL0ZhTJmTNmBD4bcLEdF");
      await console.log(asset.fields.file.url);
      setAsset('https:' + asset.fields.file.url);

    };
    getArticles();
  }, [contentType]);

  if (magContent != null) {
    return (
      <div className="section">
      <h1>More From </h1>
      <div className="btn-group" style={{width:"100%"}}>
        <button onClick={() => setContentType("Campus")} style={{width:"15%"}}>Campus</button>
        <button onClick={() => setContentType("Opinion")} style={{width:"15%"}}>Opinion</button>
        <button onClick={() => setContentType("us")} style={{width:"15%"}}>U.S.</button>
        <button onClick={() => setContentType("data")} style={{width:"15%"}}>Data</button>
      </div>
      <div className="small-card-container">
        {magContent.map((article, i) => (
          <div key={i} style={{gridColumnStart: i+1, gridColumnEnd: i+2, border: "1px solid black", opacity: "100%"}}>
            <div className="small-img">
            <img alt="" className="small-card-img" src={asset}/>
            </div>
            <div style={{color: "#000", padding: "20px", paddingBottom: "0px", fontSize: "20px", fontWeight: "bold"}}>{article.fields.title}</div>
            <div style={{color: "#000", padding: "10px 20px 20px 20px"}}>By {article.fields.authors[0]}</div>
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
                <div style={{width: "300px"}}>
                  <div className="small-img">
                  <img alt="" className="small-card-img" src={asset}/>
                  </div>
                  <div style={{backgroundColor: "#000", opacity: "90%"}}>
                    <div style={{color: "#FFF", padding: "20px", paddingBottom: "0px", fontSize: "20px", fontWeight: "bold"}}>{article.fields.title}</div>
                    <div style={{color: "#FFF", padding: "10px 20px 20px 20px"}}>By {article.fields.authors[0]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div> 
        </div>
        <div>
          <h1>Most Read</h1>
          <div className="vertical-container">
            {magContent.map((article, i) => (
              <div key={i} style={{gridRowStart: i+1, gridRowEnd: i+2}}>
                <div className="small-img">
                <img alt="" className="small-card-img" src={asset}/>
                </div>
                <div style={{marginTop: "10px", backgroundColor: "#000", opacity: "90%"}}>{article.fields.title}</div>
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
      <br/>
      <ToggleSubjects/>
      <br/>
      <br/>
      <br/>
      <SignUp/>
      <br/>
    </div>
  );
}

export default Home;
