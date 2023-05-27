import React from "react";
import img from "../imagenes/img1.png";
import "../stylesheets/Testimonio.css";

const Testimonio = ({nombre, profesion, frase, imagen }) => {
  return (
    
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={imagen}
        alt="imagem de sean"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-textimonio">{nombre} </p>
        <p className="cargo-testimonio">{profesion}</p>
        <p className="texto-testimonio">
          {frase}
        </p>
      </div>
    </div>
  );
};

export default Testimonio;
