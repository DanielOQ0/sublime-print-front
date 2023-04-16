import React, { useState } from "react";
import Texto from './Texto'

const MiComponente = () => {
  const [textoPostIt, setTextoPostIt] = useState("");

  const handlePostItSubmit = (texto) => {
    setTextoPostIt(texto);
  };

  return (
    <div>
      <h1>Mi Componente</h1>
      <Texto onSubmit={handlePostItSubmit} />
     {/*  <Texto onSubmit={(text, color) => console.log(`Texto: ${text}, Color: ${color}`)} /> */}

      <p>Texto del post it: {textoPostIt}</p>
    </div>
  );
};

export default MiComponente;
