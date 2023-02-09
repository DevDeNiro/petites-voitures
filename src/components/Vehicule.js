import React from "react";

const Vehicule = (props) => {
  if (props.roues < 2) {
    throw new Error("Un véhicule doit avoir au moins 2 roues!");
  }
  return (
    <div>
      <p>Marque du véhicule : {props.marque}</p>
      <p>Nombre de roues : {props.roues}</p>
      <p>Nombre de passagers : {props.passagers}</p>
    </div>
  );
};

export default Vehicule;
