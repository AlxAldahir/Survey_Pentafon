import "./App.css";
import {IdEmployee} from "./components/IdEmployee"
import Survey from "./components/Survey"
//import TableQuestion from "./components/TableQuestion";


function App() {
  return (
    <>
    <div className="App">
      <h1>ENCUESTA DE SATISFACCIÓN CRECE</h1>
      <IdEmployee />
    </div>
      <br />
      <h3 style={{margin: "50px"}}>Referente al programa CRECE indica en nivel de conocimientos y claridad que tienes, sobre los siguientes puntos:</h3>
      <Survey />
    {/*Componete de la encuesta con Tabla (El de la duda) <TableQuestion/>*/} 
    </>
  );
}

export default App;
