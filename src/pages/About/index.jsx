import React from "react";
import "./About.css";
import Banner from '../../components/Banner';
import BannerImg from '../../assets/IMG_about.jpg';
import Collapse from "../../components/Collapse";





function About() {
   return (
    <>

    <Banner bannerImg={BannerImg} overlayOpacity={0.3} />
        <div className="about_container">
            <Collapse
                title= "Fiabilité" 
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements
                    et toutes les informations sont régulièrement vérifiées par nos équipes."
            />

            <Collapse
                title= "Respect" 
                content="La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire
                    ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />

            <Collapse
                title= "Service" 
                content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intéraction,
                    que se soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
            />

            <Collapse
                title= "Securité" 
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                    correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
                    qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous 
                    organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
            
        </div>
    </>
  );
}

export default About
