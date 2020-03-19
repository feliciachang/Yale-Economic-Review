import React, { useEffect, useState } from "react";
import {useParams, withRouter, useLocation} from "react-router-dom";
const contentful = require("contentful");

const Content = (props) => {
    const [article, setArticle] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const getArticle = async () => {
            let client = contentful.createClient({
                space: "obm5e8rm0eay",
                accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU"
              });
            let searchParams = new URLSearchParams(window.location.search);
            console.log("id", searchParams.get('id'));

            //let response = await client.getEntry(contentId);
            //console.log(response.fields);
        
            //setArticle(response.fields);
        
            //   let asset = await client.getAsset("SwkqadbMXFiT0oKlgMwBl");
            //   console.log("cover photos", asset.fields.file.url);
            //   setPhoto('https:' + asset.fields.file.url);
        }

        getArticle();
    }, []) 

    return(
        <div>
           content
        </div>
    )
}

export default withRouter(Content);