import Socials from "../../components/Socials";
import fotoAna from "../../img/ana.png";
import logo from "../../img/logo.png";
// import Header from '../../components/Header';
import "./style.css";

function Home() {
  return (
    <>
      <section className="home-container">
        <div className="home-container__logo">
          <img src={logo} className="logo" alt="Logo Ana Glícia" />
          <Socials className="social" />
        </div>
        <img src={fotoAna} className="ana" alt="Imagem Ana Glícia" />
      </section>
    </>
  );
}

export default Home;
