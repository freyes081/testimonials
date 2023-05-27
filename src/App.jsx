import Testimonio from "./components/Testimonio";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/testimonios")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(data);

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {data.map((item) => (
          <Testimonio
            nombre={item.nombre}
            profesion={item.profesion}
            frase={item.frase}
            imagen={item.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
