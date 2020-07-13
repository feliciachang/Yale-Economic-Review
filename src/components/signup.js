import React, { Component } from "react";
import "../App.css";

class SignUp extends Component {
  render() {
    const url =
      "https://gmail.us20.list-manage.com/subscribe/post?u=efcf53e5cc53e101735848444&amp;id=9d9a5c1f74";
    return (
      <div
        style={{
          marginLeft: "1%",
          marginRight: "5%",
          border: "solid rgb(240, 240, 240) 2px",
          backgroundColor: "rgb(240, 240, 240)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5% 10% 5% 10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ maxWidth: "30vw", textAlign: "left" }}>
            Get updates from the YER
          </h1>
          <a
            style={{
              textDecoration: "none",
              color: "black",
              padding: "15px 25px",
              fontSize: "20px",
              border: "1px solid black",
              borderRadius: "50px",
              fontWeight: "bold",
            }}
            href="https://mailchi.mp/1649f471e01f/the-yale-economic-review"
          >
            Subscribe
          </a>
        </div>
      </div>
    );
  }
}

export default SignUp;
