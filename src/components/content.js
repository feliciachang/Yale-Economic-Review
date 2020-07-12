import React, { useEffect, useState } from "react";
import { useParams, withRouter, useLocation } from "react-router-dom";
import "../pages/pages.css";
import "./content.css";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import styled from "styled-components";

const contentful = require("contentful");

const ImgContainer = styled.div`
  width: 100%;
`;

const Img = styled.img`
  height: 200px;
  overflow: hidden;
`;

const Content = (props) => {
  const [article, setArticle] = useState(null);
  const [richText, setRichText] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getArticle = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU",
      });
      let searchParams = new URLSearchParams(window.location.search);

      console.log(searchParams.get("id"));
      let response = await client.getEntry(searchParams.get("id"));
      console.log(response.fields);

      let richText = documentToHtmlString(response.fields.articleContent);
      setRichText(richText);

      setArticle(response.fields);

      //   let asset = await client.getAsset("SwkqadbMXFiT0oKlgMwBl");
      //   console.log("cover photos", asset.fields.file.url);
      //   setPhoto('https:' + asset.fields.file.url);
    };

    getArticle();
  }, []);

  return (
    <div
      style={{
        marginLeft: "25vw",
        marginBottom: "10%",
        width: "50vw",
      }}
    >
      {article != null ? (
        <div>
          <ImgContainer>
            <Img
              alt=""
              className="small-card-img"
              src={article.featuredPhoto.fields.file.url}
            />
          </ImgContainer>
          <div className="title">{article.title}</div>
          <div className="subtitle">{article.subtitle}</div>
          <div className="author">By {article.authors[0]}</div>
          <div className="author">{article.dateOfPost}</div>
          <br />
          <br />
          <div>
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: richText }}
            />
          </div>
        </div>
      ) : (
        <div>
          <h5> loading content </h5>
        </div>
      )}
    </div>
  );
};

export default withRouter(Content);
