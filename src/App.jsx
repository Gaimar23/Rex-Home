import "./App.scss";
import Accueil from "./components/Accueil/Accueil";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import NosValeurs from "./components/NosValeurs/NosValeurs";
import Produits from "./components/Produits/Produits";

function App() {
  return (
    <div className="app">
      <section className="conteneur-accueil">
        <div className="accueil">
          <Navbar />
          <Accueil />
        </div>
      </section>
      <section className="conteneur-produits">
        <div className="produits">
          <Produits />
        </div>
      </section>
      <section className="conteneur-valeurs">
        <div className="valeurs">
          <NosValeurs />
        </div>
      </section>
      <section className="conteneur-contact">
        <div className="contact">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default App;
