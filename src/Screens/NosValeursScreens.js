import React from "react";
import BaniereSecond from "../Components/baniereSecond";
import Navbar2 from "../Components/Navbar2";

const NosValeursScreens = () => {
  return (
    <div>
      <Navbar2 />
      <BaniereSecond
        alt="images de lumiere"
        image="https://www.xanlite.com/img/cms/bannieres/banniere_cee.jpg"
        Message="Nos Valeurs"
      />
    </div>
  );
};

export default NosValeursScreens;
