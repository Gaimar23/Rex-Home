import "./App.scss";
import Accueil from "./components/Accueil/Accueil";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
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
      <section className="conteneur-produits" id="articles">
        <div className="produits">
          <Produits />
        </div>
      </section>
      <section className="conteneur-valeurs" id="our-values">
        <div className="valeurs">
          <NosValeurs />
        </div>
      </section>
      <section className="conteneur-contact" id="contact">
        <div className="contact">
          <Contact />
        </div>
      </section>
      <section className="conteneur-footer">
        <div className="footer">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
