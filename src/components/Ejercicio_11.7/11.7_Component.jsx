import React, { useState } from 'react';
import './VoteCounter.css'; // Importamos los estilos con BEM

const VoteCounter = () => {
  // Estado para los votos, cada opción tiene su propio contador
  const [votes, setVotes] = useState({
    option1: 0,
    option2: 0,
    option3: 0,
  });

  // Función para incrementar el contador de votos para una opción específica
  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  return (
    <div className="vote-counter">
      <h2 className="vote-counter__title">¿Cuál es tu opción favorita?</h2>
      <div className="vote-counter__options">
        <div className="vote-counter__option">
          <button
            className="vote-counter__button"
            onClick={() => handleVote('option1')}
          >
            Opción 1
          </button>
          <span className="vote-counter__vote-count">{votes.option1} votos</span>
        </div>
        <div className="vote-counter__option">
          <button
            className="vote-counter__button"
            onClick={() => handleVote('option2')}
          >
            Opción 2
          </button>
          <span className="vote-counter__vote-count">{votes.option2} votos</span>
        </div>
        <div className="vote-counter__option">
          <button
            className="vote-counter__button"
            onClick={() => handleVote('option3')}
          >
            Opción 3
          </button>
          <span className="vote-counter__vote-count">{votes.option3} votos</span>
        </div>
      </div>
    </div>
  );
};

export default VoteCounter;
