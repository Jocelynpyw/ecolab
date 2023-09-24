import React from "react";
import "../Styles/baniereSecondStyle.css";

const BaniereSecond = ({ alt, Message, image }) => {
  return (
    <div className="second">
      <img alt={alt} src={image} className="images-second" />
      <h1 className="firstText">{Message}</h1>
    </div>
  );
};

export default BaniereSecond;
