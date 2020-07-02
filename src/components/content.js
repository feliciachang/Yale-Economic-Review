import React, { useEffect, useState } from "react";
import { useParams, withRouter, useLocation } from "react-router-dom";
import "../pages/pages.css";
import "./content.css";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
const contentful = require("contentful");

const Content = (props) => {
  const [article, setArticle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getArticle = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU",
      });
      let searchParams = new URLSearchParams(window.location.search);

      let response = await client.getEntry(searchParams.get("id"));
      console.log(response.fields);

      setArticle(response.fields);

      //   let asset = await client.getAsset("SwkqadbMXFiT0oKlgMwBl");
      //   console.log("cover photos", asset.fields.file.url);
      //   setPhoto('https:' + asset.fields.file.url);
    };

    getArticle();
  }, []);

  return (
    <div style={{ marginLeft: "15%", marginRight: "20%", marginBottom: "10%" }}>
      {article != null ? (
        <div>
          <div className="title">{article.title}</div>
          <div className="subtitle">{article.subtitle}</div>
          <div className="author">By {article.authors[0]}</div>
          <br />
          <br />
          <div>
            {article.articleContent.content.map((c, i) => (
              <div
                key={i}
                className="body"
                dangerouslySetInnerHTML={{ __html: c.content[0].value }}
              />
            ))}
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
