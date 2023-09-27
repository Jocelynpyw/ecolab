import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HomeNext.css";

import "../Styles/Home.css";
import EtapesDossier from "./EtapesDossier";
import Faq from "./Faq";
// import Maquette from "./Maquette";

function Home() {
  return (
    <>
      <section className="barner container-fluide">
        {/*                    Nav                           */}
        <nav>
          <div className="logo-box">
            {/* <img src="images/LeetCode_logo_rvs.png" className="logo-img" /> */}
            <span style={{ color: "#FFF", fontSize: 14 }}>Eco.Labs</span>
          </div>
          <div className="nav-link">
            <ul>
              <li>
                <a
                  href="#"
                  className="nav-link-item "
                  style={{ color: "#FFF", fontSize: 14 }}
                >
                  Nouvel eclairage
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/*                           Contenu de la barniere                    */}

        <div className="content-barner container" style={{ marginTop: 50 }}>
          <div className="content-barner-left col-md-5 col-sm-0 col-xs-0 ">
            <p className="digitalText">NOUVEL ECLAIRAGE </p>
            {/* <Maquette /> */}
          </div>
          <div
            className=" col-md-4 col-sm-12 "
            style={{ position: "relative", top: 0, marginTop: " -12rem" }}
          >
            <img src="images/soucoupe.PNG" className="logo-img" id="soucoupe" />
          </div>
          <div
            className="content-barner-right col-md-2 col-sm-12 "
            style={{ position: "relative" }}
          >
            <h6
              style={{
                color: "#fff",
                fontSize: 12,
                fontWeight: "normal",
                position: "absolute",
                bottom: 0,
              }}
            >
              Les hommes ont trouvé comment révolutionner l'eclairage des
              menages et nous sommes là pour les aider a en beneficier
              gratuitement . et nous sommes là pour les aider.
            </h6>
          </div>
        </div>
      </section>
      <section className="barnerCard container">
        <img
          src="images/mais.PNG"
          style={{
            position: "absolute",
            top: "-14.6rem",
            right: 15,
            zIndex: "-400",
          }}
        />

        <nav>
          <div className="logo-box">
            <Link to="/">
              <img src="images/LeetCode_logo_rvs.png" className="logo-img" />
            </Link>

            <span style={{ color: "#333333", fontWeight: 500 }}>EcoLab</span>
          </div>
          <div className="nav-link">
            <ul>
              <li>
                <a href="#" className="nav-link-item premium">
                  A PROPOS
                </a>
              </li>
              <li>
                <a href="#" className="nav-link-item ">
                  PRODUIT
                </a>
              </li>
              <li>
                <a href="#" className="nav-link-item ">
                  ESPACE PRO
                </a>
              </li>
              <li>
                <a href="#" className="nav-link-item ">
                  NOUS CONTACTER
                </a>
              </li>
              <li>
                <Link to="nos-valeurs" className="nav-link-item ">
                  NOS VALEURS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/student" style={{ textDecoration: "none" }}>
              <a href="#" className="nav-link-item">
                <button
                  style={{
                    outline: "none",
                    border: "none",
                    backgroundColor: "#27ae60",
                    borderRadius: "3px",
                    padding: "5px",
                    color: "#fff",
                  }}
                >
                  {/* <i class="fa-regular fa-avatar"></i> */}
                  My Space
                </button>
              </a>
            </Link>
          </div>
        </nav>
        <div className="containerCard container">
          <div className="containerCardLeft col-md-6 col-sm-12">
            <h1
              style={{
                fontSize: "3.4rem",
                color: "#000",
                lineHeight: "3.5rem",
                fontWeight: "bold",
              }}
            >
              Make reliable <br />
              agriculture decisions with US
            </h1>
            <p>
              Get to Know the field in seconds and take informed actions with
              the Farm.Smart platform.To make farming simple,we analyze
              satellite images with machine learning technologies.For free
            </p>
            <div
              style={{
                backgroundColor: "#F9F9F2",
                width: "20rem",
                padding: "10px",
              }}
            >
              <input
                placeholder="Enter your email..."
                style={{
                  outline: "none",
                  border: "none",

                  borderRadius: "3px",
                  padding: "5px",
                }}
              />{" "}
              <button
                style={{
                  outline: "none",
                  border: "none",
                  backgroundColor: "#27ae60",
                  borderRadius: "3px",
                  padding: "5px",
                  color: "#fff",
                }}
              >
                Get Started
              </button>
            </div>
            <p style={{ marginTop: 10 }}>
              <span>Already have an account?</span>{" "}
              <Link
                to="/login"
                style={{
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Log in
              </Link>{" "}
            </p>
          </div>
          <div className="containerCardRight col-md-6 col-sm-12">
            <img src="images/IAFarm.PNG" className="logo-farm" />
          </div>
        </div>

        {/*///////////////////////////ECOLAB VOUS ACCOMPAGNE START/////////////////////////////////////////////////////  */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 cardContainer">
              <div className="container">
                <div className="row">
                  <h1 className="ecotitlebold">
                    <span className="textColorGreen">DISPOSITIF CEE,</span>
                    <br></br>ECOLAB VOUS ACCOMPAGNE
                  </h1>
                </div>
                <div className="row">
                  <img
                    alt="images lumiere gratuite en france"
                    src="images/images_eco.jpg"
                    className="imagescee"
                  />
                </div>

                <div className="row">
                  <h1 className="ecotitlebold">
                    RÉNOVEZ VOTRE SYSTEME D'ECLAIRAGE EXTÉRIEUR
                  </h1>
                  <p>
                    Vos projets de rénovation énergétique tel qu'un relamping
                    peuvent entrer dans le champ d'application des Certificats
                    d'Economies d'Energie (CEE).
                  </p>
                  <p>
                    <span className="textBackgroundGreen">Comment?</span>
                  </p>
                  <p>
                    En remplaçant votre système d'éclairage actuel obsolète ou
                    énergivore par des
                    <strong> solutions LED performantes</strong> offrant un
                    meilleur confort d'éclairage.
                  </p>
                  <p>
                    <span className="textBackgroundGreen">A la clé ?</span>
                  </p>

                  <p>
                    Du matériel mis à votre disposition
                    <strong> gratuitement* </strong> et une baisse de votre
                    facture énergétique jusqu'à 80% et une
                    <strong> amélioration de votre bilan carbone.</strong>
                  </p>
                </div>
                <div className="row">
                  <img
                    className="imagescee"
                    alt="images lumiere gratuite en france"
                    src="images/image_eco_2.jpg"
                  />
                </div>
                <div className="row">
                  <h1 className="ecotitlebold">BÉNÉFICIEZ DE LA PRIME CEE</h1>
                  <p>
                    XANLITE, marque française spécialiste de la LED depuis plus
                    de 25 ans vous propose des solutions éligibles à la prime
                    CEE. Profitez de notre multi-expertise pour mettre en œuvre
                    et financer votre projet via un accompagnement clé en main.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 cardContainer">
              <div className="container">
                <div className="row">
                  <form id="formulaire">
                    <div className="container">
                      <div className="row">
                        <p>
                          <span className="textBackgroundGreen">
                            Profitez rapidement ici ! ! ! ! ! ! ! ! ! ! ! !
                          </span>
                        </p>
                        <div className="col-md-12">
                          <input
                            type="text"
                            value=""
                            className="input-contact-form"
                            id="subject-form"
                            placeholder="Votre raison sociale*"
                          />
                        </div>
                      </div>

                      {/* ----------------------------------------------------------------- */}
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            value=""
                            className="input-contact-form"
                            id="subject-form"
                            placeholder="Votre nom*"
                          />
                        </div>
                      </div>

                      {/* ----------------------------------------------------------------- */}
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            value=""
                            className="input-contact-form"
                            id="subject-form"
                            placeholder="Votre prenom*"
                          />
                        </div>
                      </div>

                      {/* ----------------------------------------------------------------- */}
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="email"
                            value=""
                            className="input-contact-form"
                            id="subject-form"
                            placeholder="Votre email*"
                          />
                        </div>
                      </div>

                      {/* ----------------------------------------------------------------- */}
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="number"
                            value=""
                            className="input-contact-form"
                            id="subject-form"
                            placeholder="Votre numero de telephone*"
                          />
                        </div>
                      </div>

                      {/* ----------------------------------------------------------------- */}

                      <div className="row">
                        <div className="col-md-12">
                          <textarea
                            className="textarea-contact-form"
                            value=""
                            id="messageForm"
                            placeholder="Votre message"
                          ></textarea>
                        </div>
                      </div>
                      {/* ----------------------------------------------------------------- */}
                      <div className="row">
                        <div className="col-md-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                              checked="false"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              J'accepte que mes informations soient utilisées
                              dans le cadre de ma demande et de la relation
                              commerciale qui pourrait en découler.
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* ----------------------------------------------------------------- */}

                      <div className="btn-send-box">
                        <button id="btnsendform">S'inscrire</button>
                      </div>
                    </div>
                  </form>

                  <form></form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*///////////////////////////ECOLAB VOUS ACCOMPAGNE END/////////////////////////////////////////////////////  */}

        {/* /////////////////////////////////////////////differentes Etapes Start////////////////////////////////////////////////////// */}
        <div className="containerCard">
          <EtapesDossier />
        </div>
        {/* /////////////////////////////////////////////differentes Etapes End////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////Les trois images start ///////////////////////////////////////////////// */}
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "70px",
          }}
        >
          <div
            className="col-md-4 col-sm-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <img
              src="images/search.PNG"
              className="logo-farm"
              style={{ width: "160px", height: "100px" }}
            />
            <h1>Easily add courses</h1>
            <p
              style={{
                textAlign: "center",
              }}
            >
              We've found all the techniques in Africa and Cameroon - just
              choose yours
            </p>
          </div>
          <div
            className="col-md-4 col-sm-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <img
              src="images/fast data.PNG"
              className="logo-farm"
              style={{ width: "160px", height: "100px" }}
            />
            <h1>Fast data processing</h1>
            <p
              style={{
                textAlign: "center",
              }}
            >
              We show a current photo of the field in a second
            </p>
          </div>
          <div
            className="col-md-4 col-sm-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <img
              src="images/mobile.PNG"
              className="logo-farm"
              style={{ width: "160px", height: "100px" }}
            />
            <h1>Website and mobile app</h1>
            <p
              style={{
                textAlign: "center",
              }}
            >
              It's free Works anywhere with an internet connection
            </p>
          </div>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <section id="action">
          <div className="action-cover">
            <div className="container">
              <div className="row action-cover-row">
                <div className="col-md-9">
                  <h1 className="action-title">NOUS REJOINDRE</h1>
                  <p style={{ color: "#fff" }}>
                    Nous sommes present sur toutes ses plates formes{" "}
                    <strong>
                      Telegram , Signal , whatsapp ,Facebook , Youtube ,Vk{" "}
                    </strong>{" "}
                    ,Nous faisons la différence dans tout ce que nous faisons.
                    Depuis plusieurs années depuis plusieurs années, de plus en
                    plus de francais nous font confiance et nous ramènent leurs
                    proches.
                    <strong>
                      CONTACTEZ NOUS ET RECEVEZ LE MEILLEUR ECLAIRAGE DE TOUTE
                      LA FRANCE.
                    </strong>
                  </p>
                </div>
                <div className="col-md-3">
                  <button className="btn-ensemble btn-rejoindre">
                    NOUS REJOINDRE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ////////////////////////////////////////////////STATISTIQUES//////////////////////////////////////////////////// */}
        <section id="stat">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3  stat-item-container">
                <div className="stat-item-box-icon-box">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
                <div className="stat-item-box-number">
                  +<span className="counter">133</span>
                </div>
                <div className="stat-item-box-title">Teacher members</div>
              </div>
              <div className="col-lg-3 col-md-3  stat-item-container">
                <div className="stat-item-box-icon-box">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className="stat-item-box-number">
                  {" "}
                  + <span className="counter">300</span>{" "}
                </div>
                <div className="stat-item-box-title">
                  Nouveaux visiteurs/jours
                </div>
              </div>
              <div className="col-lg-3 col-md-3  stat-item-container">
                <div className="stat-item-box-icon-box">
                  <i className="fa-solid fa-face-smile"></i>{" "}
                </div>
                <div className="stat-item-box-number">
                  {" "}
                  +<span className="counter">99</span>%
                </div>
                <div className="stat-item-box-title">personnes satisfaites</div>
              </div>
              <div className="col-lg-3 col-md-3 stat-item-container">
                <div className="stat-item-box-icon-box">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <div className="stat-item-box-number">
                  +<span className="counter">50</span>
                </div>
                <div className="stat-item-box-title">
                  Partenaires dans le monde
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /////////////////////////////////FOIRE AUX QUESTIONS START///////////////////////////////////////// */}
        <Faq />
        {/* /////////////////////////////////FOIRE AUX QUESTIONS END///////////////////////////////////////// */}

        {/* <!-- -------------------------------------------SECTION CONTACTEZ NOUS START ------------------------------------------- --> */}
        <div id="contact">
          <h1
            className="tittle-level-one"
            style={{ marginTop: "3rem ", marginBottom: "2rem" }}
          >
            Nous Contacter{" "}
          </h1>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-3 contact-box-item">
                <div className="contact-box-item-icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div>
                  <h3>Nos réseaux </h3>
                  <p> Telegram : @Eco.Lab</p>
                  <p> whatsapp : +33 069046071</p>
                  <p> Signal : +33 06 90 46 07 81 </p>
                </div>
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-3 contact-box-item">
                <div className="contact-box-item-icon">
                  <i className="fa-solid fa-envelope"></i>{" "}
                </div>
                <div>
                  <h3>Notre Email </h3>
                  <p> eco.lab@gmail.com</p>
                </div>
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-3 contact-box-item">
                <div className="contact-box-item-icon">
                  {/* <!-- <i className="fa-solid fa-phone-arrow-up-right"></i> --> */}
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div>
                  <h3> Telephone</h3>
                  <p> +33 06 90 46 07 81</p>
                </div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <form id="formulaire">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          value=""
                          name=""
                          className="input-contact-form"
                          id="name-form"
                          placeholder="Votre Nom"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          value=""
                          className="input-contact-form"
                          id="email-form"
                          placeholder="Votre Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <input
                          type="text"
                          value=""
                          className="input-contact-form"
                          id="subject-form"
                          placeholder="Votre Sujet"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <textarea
                          className="textarea-contact-form"
                          value=""
                          id="messageForm"
                          placeholder="Votre message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="btn-send-box">
                      <button id="btnsendform">Envoyez</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-2"></div>
              <form></form>
            </div>
          </div>
        </div>
        {/* <!-- -------------------------------------------SECTION CONTACTEZ NOUS END ------------------------------------------- --> */}
      </section>{" "}
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-box-item">
              <div className="footer-title-box">
                <h2>Paris France</h2>
              </div>
              <div className="footer-texte-box">
                <p>Telephone : +33 06 90 46 02 71</p>
                {/* <!-- <div style="margin-right:2px; color: black;" data-toggle="tooltip" data-placement="bottom" title="Envoyez Nous un mail">  --> */}

                <p>
                  <a
                    href="mailto:Workpro394@gmail.com"
                    style={{
                      color: "#25d366",
                      texDecoration: "none",
                      cursor: "pointer",
                    }}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Envoyez Nous un mail"
                  >
                    Email : Eco.Lab@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-box-item">
              <div className="footer-title-box">
                <h2>Liens Utiles </h2>
              </div>
              <div className="footer-texte-box ">
                <ul>
                  <li>
                    <a href="#home" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Lien utile 1{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Lien utile 2{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Lien utile 3{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Lien utile 4{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Faq{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#paiement" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Lien utile 1{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i>Lien utile 1{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#temoignage" className="footer-texte-box-link">
                      {" "}
                      <i className="fa-solid fa-chevron-right"></i> Lien utile 1{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-box-item">
              <div className="footer-title-box">
                <h2>Ecolab Et Vous</h2>
              </div>
              <div className="footer-texte-box">
                <ul>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i> A propos{" "}
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i> Produit
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i> Espace pro
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i> Nous contacter
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>Eclairage
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 footer-box-item">
              <div className="footer-title-box">
                <h2>Rejoignez Notre Newsletter </h2>
              </div>
              <div className="footer-texte-box">
                <p>
                  {" "}
                  <i className="bx bx-chevron-right"></i>Rejoignez notre
                  Newsletter et suivre toutes nos actualités
                </p>
                <div className="box-btn-newletter">
                  <input id="btn-newletter"></input>
                  <a
                    href="https://t.me/documentetaffairefinancieren"
                    target="_blank"
                  >
                    <button>Souscrire</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="footer-bottom-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" style={{ textAlign: "center" }}>
                © Copyright Eco.Lab. Tout les droits Reserve
              </div>
              <div className="col-lg-7"></div>
              <div className="col-lg-1 footer-bottom-icon-container">
                <a href="#!">
                  <div className="footer-bottom-icon-box">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                </a>
                {/* <!-- ------------------------------------- --> */}
                <a href="/">
                  <div className="footer-bottom-icon-box">
                    <i className="fa-solid fa-paper-plane"></i>{" "}
                  </div>
                </a>
                {/* <!-- ------------------------------------- --> */}
                <a href="/">
                  <div className="footer-bottom-icon-box">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                </a>

                {/* <!-- ------------------------------------- --> */}
                <a href="#!">
                  <div className="footer-bottom-icon-box">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </a>
                {/* <!-- ------------------------------------- --> */}
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Home;
