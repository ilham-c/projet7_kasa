import React, { useState } from "react";
import "./Collapse.css";


function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="collapse">
        <div className="collapse_header" onClick={toggleCollapse}>
          <h3 className="collapse_title">{title}</h3>
          <span className={`arrow ${isOpen ? "open" : ""}`}>
          <i className={`fa-solid ${isOpen ? "fa-angle-down" : "fa-angle-up"}`}></i>
          </span>
        </div>
        {isOpen && <div className="collapse_content">{content}</div>}
      </div>
    );
  }
export default Collapse

