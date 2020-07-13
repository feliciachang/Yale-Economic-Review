import React, { useState, useEffect } from "react";
import yermag from "../assets/YER_Fall2017.pdf";

const contentful = require("contentful");

const Mag = () => {
  const [mags, setMags] = useState(null);

  useEffect(() => {
    const getMags = async () => {
      let client = contentful.createClient({
        space: "obm5e8rm0eay",
        accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU",
      });

      let response = await client.getEntries({
        content_type: "magazine",
      });
      console.log(response);
      setMags(response.items);
    };
    getMags();
  }, []);
  console.log(mags);
  return (
    <>
      {/* <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
      >
        <embed src={yermag} width="700vw" height="2000vh" />
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
          marginBottom: "10%",
        }}
      >
        {mags !== null ? (
          <div>
            {mags.map((m, i) => (
              <div key={i}>
                <h2>{m.fields.title}</h2>
                <embed
                  src={m.fields.pdf.fields.file.url}
                  width="700vw"
                  height="700vh"
                />
              </div>
            ))}
          </div>
        ) : (
          <div />
        )}
      </div>
    </>
  );
};

export default Mag;
