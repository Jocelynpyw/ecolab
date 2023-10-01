import React from "react";

const Testimonial = () => {
  return (
    <section id="temoignage" className="reveal" style={{ padding: "20px" }}>
      <h1
        className="tittle-level-one"
        style={{ marginTop: "3rem", marginBottom: "2rem" }}
      >
        Temoignage
      </h1>
      <div className="container">
        <div className="row">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <div className="testimonial-item-img">
                <img src="./images/temoins/person1.jpg" alt="" />
              </div>
              <div className="testimonial-item-nom">
                <p>ROGER LAPORTE</p>
              </div>
              <div className="testimonial-item-text">
                <p>
                  <i className="fa-solid fa-quote-left quote"></i>Salut a tous
                  je suis Roger 33 ans Marseille , je suis tres satisfait de ces
                  gens honnetement ils m'ont permis a ma famille et moi de vivre
                  pendant cette pendemie comme avant sans nous faire vacciner{" "}
                  <i className="fa-solid fa-quote-right quote"></i>
                </p>
              </div>
            </div>
            {/* <!-- ---------------------------------------------------------------------------- --> */}
            <div className="item">
              <div className="testimonial-item-img">
                <img src="./images/temoins/person2.jpg" alt="" />
              </div>
              <div className="testimonial-item-nom">
                <p>NINA ROLLS</p>
              </div>
              <div className="testimonial-item-text">
                <p>
                  <i className="fa-solid fa-quote-left quote"></i>Hello , I'm
                  Nina just WOwww , <br />
                  try you tell me!!{" "}
                  <i className="fa-solid fa-quote-right quote"></i>
                </p>
              </div>
            </div>
            {/* <!-- ---------------------------------------------------------------------------- --> */}
            <div className="item">
              <div className="testimonial-item-img">
                <img src="./images/temoins/person3.jpg" alt="" />
              </div>
              <div className="testimonial-item-nom">
                <p>GIOVANNI MIDALI</p>
              </div>
              <div className="testimonial-item-text">
                <p>
                  <i className="fa-solid fa-quote-left quote"></i>Ciao sono
                  Giovanni, vengo dall'italia sono molto felice di aver ricevuto
                  il mio gp, all'inizio non ci credevo ma qui oggi voglio dare
                  un testimonial, è divertente{" "}
                  <i className="fa-solid fa-quote-right quote"></i>
                </p>
              </div>
            </div>
            {/* <!-- ---------------------------------------------------------------------------- --> */}
            <div className="item">
              <div className="testimonial-item-img">
                <img src="./images/temoins/person4.jpg" alt="" />
              </div>
              <div className="testimonial-item-nom">
                <p>MIKE OMAN</p>
              </div>
              <div className="testimonial-item-text">
                <p>
                  <i className="fa-solid fa-quote-left quote"></i>Bonsoir a vous
                  , je me porte bien aujourd'hui grace a se groupe de Medecins,
                  je suis tres malade et je ne pouvais pas risquer mourrir a
                  cause de ce vaccin.je les ai fait confiance tout simplement.{" "}
                  <i className="fa-solid fa-quote-right quote"></i>
                </p>
              </div>
            </div>
            {/* <!-- ---------------------------------------------------------------------------- --> */}
            <div className="item">
              <div className="testimonial-item-img">
                <img src="./images/temoins/person5.jpg" alt="" />
              </div>
              <div className="testimonial-item-nom">
                <p>RODRIGUE MERCIER</p>
              </div>
              <div className="testimonial-item-text">
                <p>
                  <i className="fa-solid fa-quote-left quote"></i>Bonjour ,
                  aujourd'hui je continue de faire mes pass sanitaires
                  tranquille , j'en merde ce gouvernement de nous faire subir
                  ses conneries{" "}
                  <i className="fa-solid fa-quote-right quote"></i>
                </p>
              </div>
            </div>
            {/* <!-- ---------------------------------------------------------------------------- --> */}
            <div className="item">
              <div className="testimonial-item-img">
                <img src="./images/temoins/person6.jpg" alt="" />
              </div>
              <div className="testimonial-item-nom">
                <p>CHARLOTTE BOULANGER</p>
              </div>
              <div className="testimonial-item-text">
                <p>
                  <i className="fa-solid fa-quote-left quote"></i>C'est tout
                  simplement incroyable ,j'ai pleure lorsque j'ai recu mon pass
                  vaccinal <i className="fa-solid fa-quote-right quote"></i>
                </p>
              </div>
            </div>
            {/* <!-- ---------------------------------------------------------------------------- --> */}

            {/* <!-- <div className="item"><h4>2</h4></div>
                <div className="item"><h4>3</h4></div>
                <div className="item"><h4>4</h4></div>
                <div className="item"><h4>5</h4></div>
                <div className="item"><h4>6</h4></div>
                <div className="item"><h4>7</h4></div> -->
                <!-- <div className="item"><h4>8</h4></div> -->
                <!-- <div className="item"><h4>9</h4></div>
                <div className="item"><h4>10</h4></div>
                <div className="item"><h4>11</h4></div>
                <div className="item"><h4>12</h4></div> --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
