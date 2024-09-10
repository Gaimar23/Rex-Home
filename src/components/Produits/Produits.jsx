import React from "react";
import "./Produits.scss";
import { images } from "../../autres/data";

const Produits = () => {
  return (
    <div className="sous-conteneur-produits">
      <span>Les meilleures Offres</span>
      <h2>Résidences les plus populaire</h2>
      <div className="conteneur-slide">
        <div className="suivi-slide">
          <div className="carte-article">
            <img src={images.home4} alt="" />
          </div>
          <div className="carte-article">
            <img src={images.home5} alt="" />
          </div>
          <div className="carte-article">
            <img src={images.home6} alt="" />
          </div>
          <div className="carte-article">
            <img src={images.home7} alt="" />
          </div>
          <div className="carte-article">
            <img src={images.home8} alt="" />
          </div>
          <div className="carte-article">
            <img src={images.home3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produits;
