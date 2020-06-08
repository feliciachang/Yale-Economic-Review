import React from "react";
import "../App.css";
import logo from "../yer.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div>
          <img
            style={{
              height: "13vmin",
              minWidth: "70px",
              paddingTop: "15px",
            }}
            src={logo}
            alt="logo"
          />
          <div style={{ marginTop: "20px", fontSize: "12px" }}>
            Copyright @ Yale Economic Review 2019
          </div>
        </div>
        <div>
          <img
            style={{ paddingTop: "20px", width: "30px", marginRight: "10px" }}
            alt=""
            src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"
          />
          <img
            style={{ paddingTop: "20px", width: "30px", marginRight: "10px" }}
            alt=""
            src="https://img.icons8.com/ios-filled/100/000000/twitter-circled.png"
          />
          <img
            style={{ paddingTop: "20px", width: "30px", marginRight: "10px" }}
            alt=""
            src="https://img.icons8.com/ios-filled/100/000000/linkedin-circled.png"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
