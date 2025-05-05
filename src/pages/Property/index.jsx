import React from "react";
import "./Property.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import img from "../../assets/img_property.png";
import Collapse from "../../components/Collapse";
import Hostimage from "../../assets/Host.png";
import ImageSlider from "../../components/ImageSlider";
import data from "../../data/properties.json";




function Property() {
    return (
        <>
            <div className="img">
            <ImageSlider images={[img]} />

            </div>

            <div className="header_property">
                <h1 className="title_property">Cozy loft on the Canal Saint-Martin</h1>
                <div className="host">
                    <span className="host_name">Alexandre Dumas</span>
                    <img className="host_picture" src={Hostimage} alt="propriétaire" /> 
                </div>
            </div>
            <h2 className="title2_property">Paris, Ile-de-France</h2>

            <div className="buttons_rating">
                <div className="buttons">
                    <button className="btn">Cozy</button>
                    <button className="btn">Canal</button>
                    <button className="btn">Paris 10</button>
                </div>
                <div className="rating">
                <i class="fa-sharp-duotone fa-solid fa-star colored"></i>
                <i class="fa-sharp-duotone fa-solid fa-star colored"></i>
                <i class="fa-sharp-duotone fa-solid fa-star colored"></i>
                <i class="fa-sharp-duotone fa-solid fa-star"></i>
                <i class="fa-sharp-duotone fa-solid fa-star"></i>
                </div>
            </div>

            <div className="collapse_container_property">
                <Collapse 
                    title="Description"
                    content="Vous serez à 50m du canal Saint-Martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants.
                    Au coeur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires.
                    Vous êtes à 1 station de la gare de l'Est (7 minutes à pieds). "
                />
                 <Collapse 
                    title="Equipements"
                    content={ 
                        <ul>
                            <li>Climatisation</li>
                            <li>Wifi</li>
                            <li>Cuisine</li>
                            <li>Espace de travail</li>
                            <li>Fer à repasser</li>
                            <li>Sèche-cheveux</li>
                            <li>Cintres</li>
                        </ul>
                    }
                   
                />
            </div>
            
        </>
    )
}

export default Property
