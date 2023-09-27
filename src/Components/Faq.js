import React from "react";
// import "../Styles/Home.css";
const Faq = () => {
  return (
    <section id="faq" className="reveal">
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h1
              className="tittle-level-one"
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              F.A.Q
            </h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <i className="fa-solid fa-circle-question faq-icon"></i>{" "}
                    Jepeux savoir si c'est possible dans toute la france
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <strong className="reponse">Reponse : </strong>{" "}
                    <strong>OUI BIENSUR</strong> Nous vous donnons la possiblite
                    de verifier , et pour des clients tres sceptiques , nous
                    pouvons vous mettre en contact avec nos{" "}
                    <strong>clients les plus fideles</strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    <i className="fa-solid fa-circle-question faq-icon"></i>{" "}
                    Faites vous des reductions si nous voulons commander
                    plusieurs pass ?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <strong className="reponse">Reponse : </strong>{" "}
                    <strong>OUI</strong> Nous le faisons meme actuellement ,
                    l'objectifs est de proteger le plus de monde possible de ce
                    maudit vaccin
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    <i className="fa-solid fa-circle-question faq-icon"></i>{" "}
                    Comment faites vous pour etre dans toutes l'Europe?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <strong className="reponse">Reponse : </strong> Nous avons
                    des partenaires qui partagent la meme vision que nous , qui
                    est celle de proteger les polulations de ce vaccin. Car nous
                    savons ce que ce vaccin pourra etre capable de faire d'ici
                    10 ans a tous ceux qui vont le prendre
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingFour"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    <i className="fa-solid fa-circle-question faq-icon"></i>{" "}
                    Avez vous une question ?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <strong className="reponse">Si Oui : </strong> Alors Posez
                    la directement{" "}
                    <button className=" btn-ensemble btn-whatsapp">
                      <a
                        href="http://Wa.me/"
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Chez Nous
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
