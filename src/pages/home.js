import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./pages.css";
import SignUp from "../components/signup.js";
import styled from "styled-components";
import Search from "../components/search";
import { Helmet } from "react-helmet";

const contentful = require("contentful");

function Cover() {
  const [cover, setCover] = useState(null);
  const [photo, setPhoto] = useState("");
  let history = useHistory();

  useEffect(() => {
    const getArticle = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU",
      });

      let response = await client.getEntries({
        "fields.articleDisplay": "CoverStory",
        content_type: "articles",
      });
      console.log(response);
      setCover(response.items[0]);

      let asset = await client.getAsset("SwkqadbMXFiT0oKlgMwBl");
      await console.log("cover photos", asset.fields.file.url);
      setPhoto(response.items[0].fields.featuredPhoto.fields.file.url);
    };
    getArticle();
  }, []);

  const goToArticle = () => {
    history.push({
      pathname: "/content/" + cover.sys.id,
      search: "?id=" + cover.sys.id,
      state: { contentId: cover.sys.id },
    });
  };

  return (
    <div>
      {cover != null ? (
        <div className="img-container" onClick={() => goToArticle()}>
          <img alt="" className="img" src={photo} />
          <div
            style={{
              position: "absolute",
              bottom: "-2%",
              color: "#fff",
              opacity: "100%",
              paddingRight: "20%",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: "1.3vw",
                fontWeight: "bold",
                textAlign: "center",
                color: "black",
                backgroundColor: "white",
                borderRadius: "0rem 2rem 2rem 0rem",
                padding: "3px 10px 3px 3px",
                width: "15%",
                fontFamily: "Gill Sans",
              }}
            >
              Cover Story
            </div>
            <div className="photoTitle">{cover.fields.title}</div>
          </div>
        </div>
      ) : (
        <div>content loading</div>
      )}
    </div>
  );
}

const ImgContainer = styled.div`
  width: 100%;
`;

const Img = styled.img`
  height: 200px;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  word-wrap: break-word;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
`;

const Subtitle = styled.div`
  padding-top: 10px;
  font-size: 13px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
  font-family: "Gill Sans";
`;

function Mag() {
  const [magContent, setMagContent] = useState([]);
  const [asset, setAsset] = useState("");
  let history = useHistory();

  useEffect(() => {
    const getArticles = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU",
      });

      let response = await client.getEntries({
        "fields.articleDisplay": "Highlight",
        content_type: "articles",
      });
      await console.log(response.items[0]);
      setMagContent(response.items.slice(0, 3));

      let asset = await client.getAsset("4UIL0ZhTJmTNmBD4bcLEdF");
      await console.log(asset.fields.file.url);
      setAsset("https:" + asset.fields.file.url);
    };
    getArticles();
  }, []);

  const goToArticle = (id) => {
    history.push({
      pathname: "/content/" + id,
      search: "?id=" + id,
      state: { contentId: id },
    });
  };

  if (magContent != null) {
    return (
      <div className="section">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>HIGHLIGHTS </h2>
          <Search />
        </div>
        <hr />
        <br />
        <div className="cards">
          {magContent.map((article, i) => (
            <div
              className="card"
              onClick={() => goToArticle(article.sys.id)}
              key={i}
            >
              <ImgContainer>
                <Img
                  alt=""
                  className="small-card-img"
                  src={article.fields.featuredPhoto.fields.file.url}
                />
              </ImgContainer>
              <Title>{article.fields.title}</Title>
              <Subtitle>By {article.fields.authors[0]}</Subtitle>
              <Subtitle>{article.fields.dateOfPost}</Subtitle>
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
  let history = useHistory();

  useEffect(() => {
    const getArticles = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU",
      });

      console.log("contentType", contentType);
      let response = await client.getEntries({
        "fields.articleDisplay": "Normal",
        content_type: "articles",
      });
      console.log(response.fields);
      setMagContent(response.items.slice(0, 3));

      let asset = await client.getAsset("4UIL0ZhTJmTNmBD4bcLEdF");
      await console.log(asset.fields.file.url);
      setAsset("https:" + asset.fields.file.url);
    };
    getArticles();
  }, [contentType]);

  const goToArticle = (id) => {
    history.push({
      pathname: "/content/" + id,
      search: "?id=" + id,
      state: { contentId: id },
    });
  };

  if (magContent != null) {
    return (
      <div className="section">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>RECENT</h2>
          <Search />
        </div>
        <hr />
        <br />
        <div className="cards">
          {magContent.map((article, i) => (
            <div
              className="card2"
              onClick={() => goToArticle(article.sys.id)}
              key={i}
            >
              <ImgContainer>
                <Img
                  alt=""
                  className="small-card-img"
                  src={article.fields.featuredPhoto.fields.file.url}
                />
              </ImgContainer>
              <Title>{article.fields.title}</Title>
              <Subtitle>By {article.fields.authors[0]}</Subtitle>
              <Subtitle>{article.fields.dateOfPost}</Subtitle>
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
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU",
      });

      let response = await client.getEntries();
      await console.log(response.items[0]);
      setMagContent(response.items.slice(0, 3));

      let asset = await client.getAsset("4UIL0ZhTJmTNmBD4bcLEdF");
      await console.log(asset.fields.file.url);
      setAsset("https:" + asset.fields.file.url);
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
                <div
                  key={i}
                  style={{
                    gridRowStart: i + 1,
                    gridRowEnd: i + 2,
                    backgroundColor: "#000",
                    opacity: "90%",
                  }}
                >
                  <div style={{ width: "300px" }}>
                    <div className="small-img">
                      <img alt="" className="small-card-img" src={asset} />
                    </div>
                    <div style={{ backgroundColor: "#000", opacity: "90%" }}>
                      <div
                        style={{
                          color: "#FFF",
                          padding: "20px",
                          paddingBottom: "0px",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        {article.fields.title}
                      </div>
                      <div
                        style={{
                          color: "#FFF",
                          padding: "10px 20px 20px 20px",
                        }}
                      >
                        By {article.fields.authors[0]}
                      </div>
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
                <div key={i} style={{ gridRowStart: i + 1, gridRowEnd: i + 2 }}>
                  <div className="small-img">
                    <img alt="" className="img" src={asset} />
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#000",
                      opacity: "90%",
                    }}
                  >
                    {article.fields.title}
                  </div>
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
    <>
      <Helmet>
        <title>The Yale Economic Review - Home</title>
        <meta
          name="description"
          content="The Yale Economic Review (YER), established in 2005, is a non-profit, bi-annual journal of popular economics which reports on developments in economics to a broad audience. "
        />
      </Helmet>
      <div className="content">
        <Cover />
        <br />
        <br />
        <br />
        <Mag />
        <br />
        <br />
        <br />
        <br />
        <ToggleSubjects />
        <br />
        <br />
        <br />
        <br />
        <SignUp />
        <br />
        <br />
      </div>
    </>
  );
}

export default Home;
