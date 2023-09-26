import React from "react";
import "../Styles/etapesDossier.css";

const EtapesDossier = () => {
  const etapes = [
    {
      id: 1,
      numberetapes: "Etape 1",
      etapename: "Analyse de vos besoins",
    },
    {
      id: 2,
      numberetapes: "Etape 2",
      etapename: "Vérification de votre éligibilité",
    },
    { id: 3, numberetapes: "Etape 3", etapename: "Signature du devis " },
    {
      id: 4,
      numberetapes: "Etape 4",
      etapename: "Réalisation des travaux par vos soins",
    },
    {
      id: 5,
      numberetapes: "Etape 5",
      etapename: "Finalisation et dépôt de votre dossier",
    },
  ];
  return (
    <div className="container etapesContainer">
      <div
        className="row "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {etapes.map((e) => (
          <div className="col-md-3 etapeBox" key={e.id}>
            <div className="etapeHead">{e.numberetapes}</div>{" "}
            <div className="etapeBody">{e.etapename}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EtapesDossier;
