import React from "react";
import "./Footer.css";
import LOGOFOOTER from "../../assets/LOGOFOOTER.png";
import FooterSubtitle from "../../assets/FooterSubtitle.png";

function Footer(){
    return (
        <div className="footer">
            <div className="footer_logo"><img src={LOGOFOOTER} alt="kasa" /></div>
            <div className="footer_subtitle"><img src={FooterSubtitle} alt="subtitle" /></div>
            </div>
    )
}

export default Footer