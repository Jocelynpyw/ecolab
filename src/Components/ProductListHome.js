import React from "react";

const ProductListHome = () => {
  const data = [
    { imgesName: "", property: "" },
    { imgesName: "", property: "" },
    { imgesName: "", property: "" },
    { imgesName: "", property: "" },
    { imgesName: "", property: "" },
  ];
  return (
    <section id="stat">
      <div className="container">
        <div className="row">
          <h1
            className="tittle-level-one"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            F.A.Q
          </h1>
          {/* --------------------------------------------------------- */}

          <div className="col-lg-3 col-md-3  stat-item-container">
            <div className="stat-item-box-icon-box">
              <img
                src="../images/product/product1.jpg"
                alt="nouvelle lumiere"
              />
            </div>
            <div className="stat-item-box-number">
              +<span className="counter">133</span>
            </div>
            <div className="stat-item-box-title">
              Hublot LED Blanc 30 Cm IP65, 1620 Lumens, Conso 18W, Blanc Chaud
            </div>
          </div>

          {/* --------------------------------------------------------- */}
          <div className="col-lg-3 col-md-3  stat-item-container">
            <div className="stat-item-box-icon-box">
              <img
                src="../images/product/product2.jpg"
                alt="nouvelle lumiere"
              />
            </div>
            <div className="stat-item-box-number">
              {" "}
              + <span className="counter">300</span>{" "}
            </div>
            <div className="stat-item-box-title">
              Projecteur Mural Noir LED IP65, 2700 Lumens, Conso 30W (Éq 160W),
              Blanc Chaud
            </div>
          </div>
          {/* --------------------------------------------------------- */}

          <div className="col-lg-3 col-md-3  stat-item-container">
            <div className="stat-item-box-icon-box">
              <img
                src="../images/product/product3.jpg"
                alt="nouvelle lumiere"
              />
            </div>
            <div className="stat-item-box-number">
              {" "}
              +<span className="counter">99</span>%
            </div>
            <div className="stat-item-box-title">
              Projecteur Mural Noir LED IP65, 4500 Lumens, Conso 50W (Éq 200W),
              Blanc Chaud
            </div>
          </div>
          {/* --------------------------------------------------------- */}

          <div className="col-lg-3 col-md-3 stat-item-container">
            <div className="stat-item-box-icon-box">
              <img
                src="../images/product/product4.jpg"
                alt="nouvelle lumiere"
              />
            </div>
            <div className="stat-item-box-number">
              +<span className="counter">50</span>
            </div>
            <div className="stat-item-box-title">
              Projecteur Mural Noir LED IP65, 9000 Lumens, Conso 100W (Éq 550W),
              Blanc Chaud
            </div>
          </div>
          {/* --------------------------------------------------------- */}
        </div>
      </div>
    </section>
  );
};

export default ProductListHome;
