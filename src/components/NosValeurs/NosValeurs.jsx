import React, { useState } from "react";
import "./NosValeurs.scss";
import { images } from "../../autres/data";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const NosValeurs = () => {
  const [activeItem, setActiveItem] = useState("un");

  const updateActiveItem = (valeur) => {
    setActiveItem(valeur);
  };

  return (
    <div className="sous-conteneur-valeurs">
      <div className="grid">
        <div className="gauche">
          <div className="conteneur-image">
            <img src={images.home1} alt="" />
          </div>
        </div>
        <div className="droite">
          <span className="titre">Nos valeurs</span>
          <h2 className="sous-titre">Ce en quoi nous croyons</h2>
          <p className="desc-valeurs">
            Nous garantissons un niveau de qualité inégalé Un magnifique et
            spacieux appartement pour vous et votre famille
          </p>
          <div className="liste-valeurs">
            <div
              className={activeItem == "un" ? "item active" : "item"}
              onClick={() => updateActiveItem("un")}
            >
              <div className="head">
                <IoShieldCheckmarkSharp className="valeur-icon" />
                <span>Qualité</span>
                <FaChevronDown className="valeur-icon" />
              </div>
              <p className="description">
                Nous garantissons un niveau de qualité inégalé Un magnifique et
                spacieux appartement pour vous et votre famille
              </p>
            </div>
            <div
              className={activeItem == "deux" ? "item active" : "item"}
              onClick={() => updateActiveItem("deux")}
            >
              <div className="head">
                <IoShieldCheckmarkSharp className="valeur-icon" />
                <span>Qualité</span>
                <FaChevronDown className="valeur-icon" />
              </div>
              <p className="description">
                Nous garantissons un niveau de qualité inégalé Un magnifique et
                spacieux appartement pour vous et votre famille
              </p>
            </div>
            <div
              className={activeItem == "trois" ? "item active" : "item"}
              onClick={() => updateActiveItem("trois")}
            >
              <div className="head">
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
