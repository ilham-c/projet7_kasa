import React from "react";
import "./Banner.css";


function Banner(props) {
    return (

        <div className = "banner" style={{ backgroundImage: `url(${props.bannerImg})` }} >
            <div className = "banner_overlay">
                {props.title && <h1 className="banner_text">{props.title}</h1>}
            </div>
        </div>
    );

    
}

export default Banner;