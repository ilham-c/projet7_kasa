import { Link } from "react-router-dom";
import properties from "../../data/properties.json";
import "./PropertyList.css";

function PropertyList() {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <Link
          to={`/property/${property.id}`}
          key={property.id}
          className="property-card"
        >
          <img
            src={property.cover}
            alt={property.title}
            className="property-card-image"
          />
          <div className="property-title-overlay">
            <h3 className="property-card-title">{property.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PropertyList;

