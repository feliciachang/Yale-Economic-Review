import React from "react";
import "../App.css";


const Footer = () => {

    return(
        <footer className="footer-container">
            <div className="footer">
            <div>Yale Economic Review</div>
            <br/>
            <img style={{width: "30px"}} alt="" src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/>
            <img style={{width: "30px"}} alt="" src="https://img.icons8.com/ios-filled/100/000000/twitter-circled.png"/>
            <img style={{width: "30px"}} alt="" src="https://img.icons8.com/ios-filled/100/000000/linkedin-circled.png"/>
            <div>Copyright @ Yale Economic Review 2019</div>
            </div>
        </footer>
    )
}

export default Footer;