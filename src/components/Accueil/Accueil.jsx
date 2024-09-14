import React from "react";
import "./Accueil.scss";
import { FaLocationDot } from "react-icons/fa6";
import { images } from "../../autres/data.js";

const Accueil = () => {
  return (
    <div className="accueil-grid">
      <div className="info">
        <h1>Découvrez la résidence de vos rêves</h1>
        <p>
          Trouvez une résidence n'a jamais été un tel plaisir, naviguez au
          travers des meilleurs résidences du pays.
        </p>
        <div className="conteneur-recherche">
          <input type="text" />
          <FaLocationDot className="icon" />
          <span className="btn">Chercher</span>
        </div>
        <div className="achievements">
          <div className="item">
            <h3>
              <span>+</span>9000
            </h3>
            <span>Résidences</span>
          </div>
          <div className="item">
            <h3>
              <span>+</span>3150
            </h3>
            <span>Clients satisfaits</span>
          </div>
          <div className="item">
            <h3>
              <span>+</span>421
            </h3>
            <span>Partenaires</span>
          </div>
        </div>
      </div>
      <div className="conteneur-image">
        <img src={images.home3} alt="" />
      </div>
    </div>
  );
};

export default Accueil;
