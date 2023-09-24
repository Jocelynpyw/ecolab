import React from "react";
import "../Styles/navbar2.css";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div>
      <header id="home">
        <section className="sidebarContainer" id="sidebarIdContainer">
          <div className="sidebar" id="sidebarId">
            <div id="close-sidebar-containe">
              <i className="fa-solid fa-xmark" id="close-sidebar"></i>
            </div>
            <ul className="sidebar-container">
              <li className="sidebar-container-item">
                <a href="#home" id="home-nav">
                  Accueil
                </a>
              </li>
              <li className="sidebar-container-item">
                <a href="#about">A propos</a>
              </li>
              {/* <!-- <li className="sidebar-container-item"><a href="#procedure">prodedure</a></li> --> */}
              <li className="sidebar-container-item">
                <a href="#services">Nos gammes</a>
              </li>

              <li className="sidebar-container-item">
                <a href="#gallery">consequences</a>
              </li>
              <li className="sidebar-container-item">
                <a href="#temoignage">Temoignages</a>
              </li>
              <li className="sidebar-container-item">
                <a href="#faq">Partenariat</a>
              </li>
              <li className="sidebar-container-item">
                <a href="#paiement">Carriere</a>
              </li>
              <li className="sidebar-container-item">
                <a href="#contact">Nous contactr</a>
              </li>
              <li className="sidebar-container-item-whatsap">
                <a href="http://Wa.me/+33751039353" target="_blank">
                  <button
                    className="btn-ensemble btn-ensemble-whatsap"
                    id="btn-whatsapp"
                  >
                    whatsapp
                  </button>
                </a>
              </li>
              {/* <!-- <div className="fa-whatsap-container"><i className="fa-solid fa-bars"></i> --> */}
            </ul>
          </div>
        </section>

        <section className="navbar-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 envelope">
                <div
                  style={{ marginRight: "2px", color: "black" }}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Envoyez Nous un mail"
                >
                  {" "}
                  <a
                    href="mailto:serviceactif93@gmail.com"
                    style={{
                      color: "#082744",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <i className="fa-solid fa-envelope"></i> eco.lab@gmail.com{" "}
                  </a>
                </div>
                <div>
                  {"             "}
                  <i className="fa-solid fa-mobile-screen"></i> :+337513429353
                </div>
              </div>
              <div className="col-lg-5"></div>
              <div className="col-lg-2 navbar-top-icon-container">
                <a href="#!">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://t.me/" target="_blank">
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a href="http://Wa.me/" target="_blank">
                  <i className="fa-brands fa-whatsapp-square"></i>
                </a>
                {/* <!-- <a href="#!"><i className="fa-solid fa-signal"></i></a> --> */}
              </div>
            </div>
          </div>
        </section>

        <section className="navbar">
          <div className="navbat-left">
            {" "}
            <span className="logo-box" id="logo">
              <Link to="/">
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    marginTop: "-20px",
                  }}
                  src="images/LeetCode_logo_rvs.png"
                  alt=""
                />
              </Link>
            </span>
          </div>
          {/* <!-- <div className="navbat-left"> <span className="logo-box" id="logo">LOGO</span></div> --> */}
          <div className="navbat-right">
            <ul className="navbar-container">
              <li className="navbar-container-item">
                <Link to="/" id="home-nav">
                  Accueil
                </Link>
              </li>
              <li className="navbar-container-item">
                <a href="#about">A propos</a>
              </li>
              {/* <!-- <li className="navbar-container-item"><a href="#procedure">prodedure</a></li> --> */}
              <li className="navbar-container-item">
                <a href="#services">Nos gammes</a>
              </li>

              <li className="navbar-container-item">
                <a href="#gallery">Temoignages</a>
              </li>
              <li className="navbar-container-item">
                <a href="#temoignage"> Partenariat </a>
              </li>
              <li className="navbar-container-item">
                <a href="#faq">Carriere</a>
              </li>
              <li className="navbar-container-item">
                <a href="#paiement">Nos notices</a>
              </li>
              <li className="navbar-container-item">
                <a href="#contact">Nous contacter</a>
              </li>
              <li
                className="navbar-container-item-whatsap"
                tabindex="0"
                data-toggle="tooltip"
                title="Contactez nous"
              >
                <a href="http://Wa.me/+33751039353" target="_blank">
                  <button
                    className="btn-ensemble btn-ensemble-whatsap"
                    id="btn-whatsapp"
                  >
                    whatsapp
                  </button>
                </a>
              </li>
              {/* <!-- <div className="fa-whatsap-container"><i className="fa-solid fa-bars"></i> --> */}
              <div className="fa-bar-container" id="fabarid">
                <i className="fa-solid fa-bars"></i>
              </div>
            </ul>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Navbar2;
