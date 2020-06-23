import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import "./pages.css";
const contentful = require("contentful");

const SubPages = () => {
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
      console.log(searchParams.get("tag"));

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
              <div className="small-card-container">
                {campusContent.map((article, i) => (
                  <div
                    onClick={() => goToArticle(article.sys.id)}
                    key={i}
                    style={{
                      gridColumnStart: i + 1,
                      gridColumnEnd: i + 2,
                      border: "1px solid rgb(240, 240, 240)",
                      opacity: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <div className="small-img">
                      <img
                        alt=""
                        className="small-card-img"
                        src={article.fields.featuredPhoto.fields.file.url}
                      />
                    </div>
                    <div className="card-text">{article.fields.title}</div>
                    <div className="card-author">
                      By {article.fields.authors[0]}
                    </div>
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
