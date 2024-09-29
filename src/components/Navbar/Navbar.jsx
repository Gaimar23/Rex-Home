import React from "react";
import "./Navbar.scss";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="laptop">
        <h2 className="logo">RexHome</h2>
        <div className="navigation">
          <ul className="links-conteneur">
            <a href="#articles">
              <li
                className="link"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  opacity: "0.7",
                }}
              >
                Résidences
              </li>
            </a>
            <a href="#our-values">
              <li
                className="link"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  opacity: "0.7",
                }}
              >
                Nos Valeurs
              </li>
            </a>
            <a href="#contact">
              <li
                className="link"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  opacity: "0.7",
                }}
              >
                Contact
              </li>
            </a>
            <li className="link">C'est Parti</li>
            <li className="link">Louer</li>
          </ul>
          <FiMenu className="menu-icon" />
        </div>
      </div>
      <div className="mobile"></div>
    </div>
  );
};

export default Navbar;
