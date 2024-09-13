import React from "react";
import "./Produits.scss";
import { images } from "../../autres/data";

const Produits = () => {
  return (
    <div className="sous-conteneur-produits">
      <span className="titre">Les meilleures Offres</span>
      <h2 className="sous-titre">Résidences les plus populaire</h2>
      <div className="conteneur-slide">
        <div className="suivi-slide">
          <div className="carte-article">
            <img src={images.home4} alt="" />
            <div className="details">
              <span className="prix">
                <span>$</span>1000
              </span>
              <h4 className="nom"> Rize de Sana</h4>
              <p className="desc">
                Un magnifique et spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home5} alt="" />
            <div className="details">
              <span className="prix">
                <span>$</span>1000
              </span>
              <h4 className="nom"> Rize de Sana</h4>
              <p className="desc">
                Un magnifique et spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home6} alt="" />
            <div className="details">
              <span className="prix">
                <span>$</span>1000
              </span>
              <h4 className="nom"> Rize de Sana</h4>
              <p className="desc">
                Un magnifique et spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home7} alt="" />
            <div className="details">
              <span className="prix">
                <span>$</span>1000
              </span>
              <h4 className="nom"> Rize de Sana</h4>
              <p className="desc">
                Un magnifique et spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home8} alt="" />
            <div className="details">
              <span className="prix">
                <span>$</span>1000
              </span>
              <h4 className="nom"> Rize de Sana</h4>
              <p className="desc">
                Un magnifique et spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home3} alt="" />
            <div className="details">
              <span className="prix">
                <span>$</span>1000
              </span>
              <h4 className="nom"> Rize de Sana</h4>
              <p className="desc">
                Un magnifique et spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
        </div>
        <div className="suivi-slide">
          <div className="carte-article">
            <img src={images.home4} alt="" />
            <div className="details">
              <span className="prix">
                <span>$</span>1000
              </span>
              <h4 className="nom"> Rize de Sana</h4>
              <p className="desc">
                Un magnifique et spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home5} alt="" />
            <div className="details">
              <span className="prix">
                <span>$</span>1000
              </span>
              <h4 className="nom"> Rize de Sana</h4>
              <p className="desc">
                Un magnifique et spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home6} alt="" />
            <div className="details">
              <span className="prix">
                <span>$</span>1000
              </span>
              <h4 className="nom"> Rize de Sana</h4>
              <p className="desc">
                Un magnifique et spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home7} alt="" />
            <div className="details">
              <span className="prix">
                <span>$</span>1000
              </span>
              <h4 className="nom"> Rize de Sana</h4>
              <p className="desc">
                Un magnifique et spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home8} alt="" />
            <div className="details">
              <span className="prix">
                <span>$</span>1000
              </span>
              <h4 className="nom"> Rize de Sana</h4>
              <p className="desc">
                Un magnifique et spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
          <div className="carte-article">
            <img src={images.home3} alt="" />
            <div className="details">
              <span className="prix">
                <span>$</span>1000
              </span>
              <h4 className="nom"> Rize de Sana</h4>
              <p className="desc">
                Un magnifique et spacieux appartement pour vous et votre famille
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produits;
