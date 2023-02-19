import React, {useState} from "react";

function EditVehicleForm({vehicle, onSubmit}) {
  const [marque, setMarque] = useState(vehicle.marque);
  const [roues, setRoues] = useState(vehicle.roues);
  const [passagers, setPassagers] = useState(vehicle.passagers);
  const [couleur, setCouleur] = useState(vehicle.couleur);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: vehicle.id,
      marque,
      roues,
      passagers,
      couleur,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="marque">Marque:</label>
        <input
          type="text"
          id="marque"
          value={marque}
          onChange={(e) => setMarque(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="roues">Roues:</label>
        <input
          type="number"
          id="roues"
          value={roues}
          onChange={(e) => setRoues(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passagers">Passagers:</label>
        <input
          type="number"
          id="passagers"
          value={passagers}
          onChange={(e) => setPassagers(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="couleur">Couleur:</label>
        <input
          type="color"
          id="couleur"
          value={couleur}
          onChange={(e) => setCouleur(e.target.value)}
        />
      </div>
      <button type="submit">Enregistrer</button>
      <button type="button" onClick={() => onSubmit(vehicle)}>
        Annuler
      </button>
    </form>
  );
}

export default EditVehicleForm;
