import logo from "./logo.svg";
import Vehicule from "./components/Vehicule";
import ListeVehicules from "./components/ListeVehicules";
import "./App.css";

function App() {
  const vehicules = [];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <Vehicule marque={"ford"} roues={4} passagers={5} />
        </div>

        <div className="main-section">
          <ListeVehicules vehicules={vehicules} />
        </div>
      </header>
    </div>
  );
}

export default App;
