import React from "react";
import "./Property.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import img from "../../assets/img_property.png";
import Collapse from "../../components/Collapse";



function Property() {
    return (
        <>
            <div className="img">
                <img src={img} alt="image property"/>
            </div>
            <h1 className="title_property">Cozy loft on the Canal Saint-Martin</h1>
            <h2 className="title2_property">Paris, Ile-de-France</h2>
            <div className="buttons">
                <button className="btn">Cozy</button>
                <button className="btn">Canal</button>
                <button className="btn">Paris 10</button>
            </div>
            <div className="collapse_container">
                <Collapse 
                    title="Description"
                />
                 <Collapse 
                    title="Equipements"
                />
            </div>
            
        </>
    )
}

export default Property
