import React, {useState, useEffect} from "react";
import Vehicule from "./Vehicule";

const ListeVehicules = (props) => {
  const [vehicules, setVehicules] = useState(props.vehicules);

  useEffect(() => {
    if (vehicules.length > 6) {
      alert("Vous avez plus de 6 véhicules dans votre liste");
    }
  }, [vehicules.length]);

  const handleAddVehicule = () => {
    const nouveauVehicule = {
      id: vehicules.length + 1,
      roues: Math.floor(Math.random() * 6) + 2,
      passagers: Math.floor(Math.random() * 10) + 1,
      marque: "Marque" + (vehicules.length + 1),
    };
    setVehicules([...vehicules, nouveauVehicule]);
  };

  const handleDeleteVehicule = (id) => {
    setVehicules(vehicules.filter((vehicule) => vehicule.id !== id));
  };

  const handleReverseMarque = (id) => {
    const vehiculesModif = vehicules.map((vehicule) => {
      if (vehicule.id === id) {
        return {
          ...vehicule,
          marque: vehicule.marque.split("").reverse().join(""),
        };
      }
      return vehicule;
    });
    setVehicules(vehiculesModif);
  };

  return (
    <div className="section-vehicule">
      <button className="btn-add-vehicule" onClick={handleAddVehicule}>
        Ajouter un véhicule
      </button>
      {vehicules.map((vehicule) => (
        <div key={vehicule.id}>
          <Vehicule
            roues={vehicule.roues}
            passagers={vehicule.passagers}
            marque={vehicule.marque}
          />
          <button onClick={() => handleDeleteVehicule(vehicule.id)}>
            Supprimer
          </button>
          <button onClick={() => handleReverseMarque(vehicule.id)}>
            Inverser marque
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListeVehicules;
