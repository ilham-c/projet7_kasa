import React from "react";
import "./Banner.css";


function Banner(props) {
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${props.overlayOpacity || 0.6})`
  };

  return (
    <div className="banner" style={{ backgroundImage: `url(${props.bannerImg})` }}>
      <div className="banner_overlay" style={overlayStyle}>
        {props.title && <h1 className="banner_text">{props.title}</h1>}
      </div>
    </div>
  );
}


export default Banner;