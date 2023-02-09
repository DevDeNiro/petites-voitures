import React, {useState} from "react";

function AddVehicleForm() {
  const [marque, setMarque] = useState("");
  const [roues, setRoues] = useState(0);
  const [passagers, setPassagers] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // logique pour ajouter un véhicule
    console.log(`Marque : ${marque}`);
    console.log(`Roues : ${roues}`);
    console.log(`Passagers : ${passagers}`);
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
      <button type="submit">Ajouter véhicule</button>
    </form>
  );
}

export default AddVehicleForm;
