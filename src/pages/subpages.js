import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import "./pages.css";
import styled from "styled-components";
import Search from "../components/search";
const contentful = require("contentful");

const ImgContainer = styled.div`
  width: 100%;
`;

const Img = styled.img`
  height: 200px;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  word-wrap: break-word;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
`;

const Subtitle = styled.div`
  padding-top: 10px;
  font-size: 12px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
`;

const SubPages = () => {
  const [title, setTitle] = useState("");
  const [campusContent, setCampusContent] = useState([]);
  const [asset, setAsset] = useState("");
  let history = useHistory();

  useEffect(() => {
    const getArticles = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU",
      });

      let searchParams = new URLSearchParams(window.location.search);

      setTitle(searchParams.get("tag"));

      let response = await client.getEntries({
        "fields.articleType": searchParams.get("tag"),
        content_type: "articles",
      });

      let asset = await client.getAsset("4UIL0ZhTJmTNmBD4bcLEdF");
      await console.log(asset.fields.file.url);
      setAsset("https:" + asset.fields.file.url);

      await console.log("response", response);
      setCampusContent(response.items);
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

  return (
    <div>
      {campusContent.size != 0 ? (
        <div>
          <div className="content">
            <div className="section">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>{title}</h2>
                <Search />
              </div>
              <div className="cards">
                {campusContent.map((article, i) => (
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loading content</div>
      )}
    </div>
  );
};

export default withRouter(SubPages);
