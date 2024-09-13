import React from "react";
import "./NosValeurs.scss";
import { images } from "../../autres/data";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const NosValeurs = () => {
  return (
    <div className="sous-conteneur-valeurs">
      <div className="grid">
        <div className="gauche">
          <div className="conteneur-image">
            <img src={images.home1} alt="" />
          </div>
        </div>
        <div className="droite">
          <span className="titre">Les meilleures Offres</span>
          <h2 className="sous-titre">Résidences les plus populaire</h2>
          <p className="desc-valeurs">
            Nous garantissons un niveau de qualité inégalé Un magnifique et
            spacieux appartement pour vous et votre famille
          </p>
          <div className="liste-valeurs">
            <div className="item">
              <div className="titre">
                <IoShieldCheckmarkSharp className="valeur-icon" />
                <span>Qualité</span>
                <FaChevronDown className="valeur-icon" />
              </div>
              <p className="description">
                Nous garantissons un niveau de qualité inégalé Un magnifique et
                spacieux appartement pour vous et votre famille
              </p>
            </div>
            <div className="item">
              <div className="titre">
                <IoShieldCheckmarkSharp className="valeur-icon" />
                <span>Qualité</span>
                <FaChevronDown className="valeur-icon" />
              </div>
              <p className="description">
                Nous garantissons un niveau de qualité inégalé Un magnifique et
                spacieux appartement pour vous et votre famille
              </p>
            </div>
            <div className="item">
              <div className="titre">
                <IoShieldCheckmarkSharp className="valeur-icon" />
                <span>Qualité</span>
                <FaChevronDown className="valeur-icon" />
              </div>
              <p className="description">
                Nous garantissons un niveau de qualité inégalé Un magnifique et
                spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosValeurs;
