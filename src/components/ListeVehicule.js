import React, {useState, useEffect} from "react";
import Vehicule from "./Vehicule";

function ListVehicles({listVehicles, onDelete, onEdit}) {
  const ListeVehicules = (props) => {
    const [vehicules, setVehicules] = useState(props.vehicules);
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
      if (vehicules.length > 6) {
        alert("Vous avez plus de 6 véhicules dans votre liste");
      }
    }, [vehicules.length]);

    // Sort the list of vehicule
    const sortedList = listVehicles.sort((a, b) => {
      let sortValue = 0;
      if (sortOrder === "asc") {
        sortValue = a.marque.localeCompare(b.marque);
        if (sortValue === 0) {
          sortValue = a.nom.localeCompare(b.nom);
        }
      } else {
        sortValue = b.marque.localeCompare(a.marque);
        if (sortValue === 0) {
          sortValue = b.nom.localeCompare(a.nom);
        }
      }
      return sortValue;
    });

    const handleSortOrderChange = () => {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

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
        <button onClick={handleSortOrderChange}>
          {`Tri par marque ${
            sortOrder === "asc" ? "croissant" : "décroissant"
          }`}
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

        <button onClick={handleSortOrderChange}>
          {`Tri par marque ${
            sortOrder === "asc" ? "croissant" : "décroissant"
          }`}
        </button>

        {sortedList.map((vehicle) => (
          <vehicules
            key={vehicle.id}
            vehicle={vehicle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    );
  };
}

export default ListVehicles;
