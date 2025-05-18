import React from "react";
import "./Property.css";
import Collapse from "../../components/Collapse";
import Gallery from "../../components/Gallery";
import { useParams, Navigate } from "react-router-dom";
import properties from "../../data/properties.json";

function Property() {
  const { id } = useParams();
  const property = properties.find((property) => property.id === id);
  

if (!property) {
  return <Navigate to="/error" />;
}
  return (
    <>
      <div className="img">  
        <Gallery images={property.pictures}  showArrows={property.pictures.length > 1} />
      </div>

      <div className="header_property">
        <h1 className="title_property">{property.title}</h1>
        <div className="host">
          <span className="host_name">{property.host.name}</span>
          <img
            className="host_picture"
            src={property.host.picture}
            alt="propriétaire"
          />
        </div>
        </div>
        <h2 className="title2_property">{property.location}</h2>
        <div className="rating">
            {/* Générer les étoiles colorées */}
            {(function () {
              let stars = [];
              for (let i = 0; i < parseInt(property.rating); i++) {
                stars.push(
                  <i key={i} className="fa-solid fa-star colored"></i>
                );
              }
              return stars;
            })()}

            {/* Générer les étoiles grises */}
            {(function () {
              let stars = [];
              for (let i = 0; i < 5 - parseInt(property.rating); i++) {
                stars.push(
                  <i
                    key={i + parseInt(property.rating)}
                    className="fa-solid fa-star"
                  ></i>
                );
              }
              return stars;
            })()}
          </div>
       
      
     

      <div className="buttons_rating">
        <div className="buttons">
          {property.tags.map((tag, index) => (
            <button key={index} className="btn">
              {tag}
            </button>
          ))}
        </div>

      </div>

      <div className="collapse_container_property">
        <Collapse title="Description" content={property.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {property.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </>
  );
}

export default Property;
