import React from "react";
import "../App.css";
import logo from "../logo.svg";


const Footer = () => {

    return(
        <footer className="footer-container">
            <div className="footer">
            <div>
            <img style={{
                  height: "15vmin",
                  minWidth: "70px",
            }}src={logo}  alt="logo" />            
            <div style={{marginTop: "20px", fontSize: "12px"}}>Copyright @ Yale Economic Review 2019</div>
            </div>
            <div>
            <img style={{width: "30px", marginRight: "10px"}} alt="" src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/>
            <img style={{width: "30px", marginRight: "10px"}} alt="" src="https://img.icons8.com/ios-filled/100/000000/twitter-circled.png"/>
            <img style={{width: "30px", marginRight: "10px"}} alt="" src="https://img.icons8.com/ios-filled/100/000000/linkedin-circled.png"/>
            </div>
            </div>
        </footer>
    )
}

export default Footer;