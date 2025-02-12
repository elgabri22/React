import React, { useState } from 'react';
import './Counter.css'; // Importamos los estilos con BEM

const Counter = () => {
  // Estado para el valor del contador
  const [count, setCount] = useState(0);

  // Funciones para incrementar y decrementar el contador
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h2 className="counter__title">Contador: {count}</h2>
      <div className="counter__buttons">
        <button className="counter__button counter__button--increment" onClick={increment}>
          Incrementar
        </button>
        <button className="counter__button counter__button--decrement" onClick={decrement}>
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default Counter;
