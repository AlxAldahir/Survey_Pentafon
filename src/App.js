import "./App.css";
import Survey from "./components/Survey"
import { Container } from "@mui/material";
//import TableQuestion from "./components/TableQuestion";


function App() {
  return (
    <>
    <div className="App">
      <img src="http://neikos.com.mx/wp-content/uploads/2014/04/penta.png"></img>
      <h1>ENCUESTA DE SATISFACCIÓN CRECE</h1>
    </div>
      <br />
      <Survey />
    {/*Componete de la encuesta con Tabla (El de la duda) <TableQuestion/>*/} 
    </>
  );
}

export default App;
