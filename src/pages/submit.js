import React from "react";

const Submit = () => (
  <div
    style={{
      marginTop: "5%",
      marginLeft: "15%",
      marginRight: "20%",
      marginBottom: "10%",
    }}
  >
    <div style={{ lineHeight: "1.4rem", marginBottom: "3%" }}>
      We'd love to hear from you!
    </div>
    <br />
    <div style={{ lineHeight: "1.4rem", marginBottom: "3%" }}>
      For pitches and submissions, please fill out the following{" "}
      <a style={{ color: "black" }} href="https://forms.gle/8KecJDJjALiUJ72p8">
        Google Form
      </a>
      .
    </div>
    <br />
    <div style={{ lineHeight: "1.4rem", marginBottom: "3%" }}>
      For all queries and suggestions, please email us at
      theyaleeconomicreview@gmail.com.
    </div>
    <br />
    <div style={{ lineHeight: "1.4rem", marginBottom: "3%" }}>
      To get our latest, find us on Facebook as “Yale Economic Review”
      (@yaleeconomicreview).
    </div>
    <br />
    <div style={{ lineHeight: "1.4rem", marginBottom: "3%" }}>
      We look forward to being in touch.
    </div>
  </div>
);

export default Submit;
