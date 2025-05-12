import React from "react";
import "./Footer.css";
import LOGOFOOTER from "../../assets/LOGOFOOTER.png";
import FooterSubtitle from "../../assets/FooterSubtitle.png";
import footer_mobile from "../../assets/footer_mobile.png";

function Footer(){
    return (
        <div className="footer">
            <div className="footer_logo"><img src={LOGOFOOTER} alt="kasa" /></div>
            <div className="footer_subtitle_desktop"><img src={FooterSubtitle} alt="subtitle_desktop" /></div>
            <div className="footer_subtitle_mobile"><img src={footer_mobile} alt="subtitle_mobile" /></div>
            </div>
    )
}

export default Footer