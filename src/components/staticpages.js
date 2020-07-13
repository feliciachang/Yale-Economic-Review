import React, { useEffect, useState } from "react";
import { withRouter, useLocation } from "react-router-dom";
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

const StaticPages = (props) => {
  const [articles, setArticles] = useState(null);
  const [richText, setRichText] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU",
      });
      let searchParams = new URLSearchParams(window.location.search);
      console.log(searchParams);

      let response = await client.getEntries({
        "fields.pageType": searchParams.get("id"),
        content_type: "staticPage",
      });
      console.log(response);

      let richText = documentToHtmlString(response.items[0].fields.content);
      console.log(response.items[0].fields.content);
      setRichText(richText);

      setArticles(response.items);
    };

    getArticles();
  }, []);

  return (
    <div
      style={{
        marginLeft: "25vw",
        marginBottom: "10%",
        width: "50vw",
      }}
    >
      {articles?.map((a, i) => (
        <div>
          {a.featuredPhoto !== undefined ? (
            <ImgContainer>
              <Img
                alt=""
                className="small-card-img"
                src={a.featuredPhoto.fields.file.url}
              />
            </ImgContainer>
          ) : (
            <div />
          )}
          <div className="title">{a.fields.title}</div>
          <br />
          <br />
          <div>
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: richText }}
            />
          </div>
          <br />
          <hr />
          <br />
        </div>
      ))}
    </div>
  );
};

export default withRouter(StaticPages);
