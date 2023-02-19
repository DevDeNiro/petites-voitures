import logo from "./logo.svg";
import Vehicule from "./components/Vehicule";
import ListeVehicules from "./components/ListeVehicule";
import AddVehicleForm from "./components/AddVehicleForm";
import EditVehicleForm from "./components/EditVehiculeForm";
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

      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div>
        <AddVehicleForm></AddVehicleForm>
      </div>

      {/* <div>
        <EditVehicleForm></EditVehicleForm>
      </div> */}
    </div>
  );
}

export default App;
