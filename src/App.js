import logo from "./logo.svg";
import Vehicule from "./components/Vehicule";
import ListeVehicules from "./components/ListeVehicule";
import AddVehicleForm from "./components/AddVehicleForm";
import "./App.css";

function App() {
  const vehicules = [];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div>
        <Vehicule marque={"ford"} roues={4} passagers={5} />
      </div>

      <div className="main-section">
        <ListeVehicules vehicules={vehicules} />
      </div>

      <div>
        <AddVehicleForm></AddVehicleForm>
      </div>
    </div>
  );
}

export default App;
