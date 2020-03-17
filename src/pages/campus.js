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

  if(campusContent != null){
    return (
      <div className="content">
        <div className="section">
        <div className="small-card-container">
          {campusContent.map((article, i) => (
            <div key={i} style={{gridColumnStart: i+1, gridColumnEnd: i+2}}>
              <div className="small-img">
              </div>
              <div style={{marginTop: "10px"}}>{article.fields.title}</div>
            </div>
          ))}
        </div> 
        </div>
      </div>
    );
  }

  return <div>null</div>;
};

export default Campus;
