import React, { useState, useEffect } from "react";
import "./pages.css";

const contentful = require("contentful");

const Campus = () => {
  const [campusContent, setCampusContent] = useState([]);
  
  useEffect(() => {
    const getArticles = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU"
      });

      let response = await client.getEntries({
        'fields.articleType': 'Campus',
        'content_type': 'articles'
      });
      await console.log(response);
      setCampusContent(response.items);
    }

    getArticles();
  }, [])

  return (
    <div className="content">
      <h1>Title</h1>
      <h5>Subtitle</h5>
    </div>
  );
};

export default Campus;
