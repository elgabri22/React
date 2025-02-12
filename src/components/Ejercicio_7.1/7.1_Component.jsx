import React from 'react';

const ReactWelcome = () => {
  const estilo = {
    color: 'blue',        // Establecemos el color del texto
    fontSize: '36px',     // Tamaño de fuente grande
    textAlign: 'center',  // Centra el texto
    marginTop: '50px'     // Agrega un margen superior
  };

  return (
    <h1 style={estilo}>¡Bienvenido a React!</h1>
  );
};

export default ReactWelcome;
