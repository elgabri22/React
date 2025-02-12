import React, { useState } from 'react';

const Comment = ({ comment, onAddResponse }) => {
  const [responseText, setResponseText] = useState('');

  const handleAddResponse = () => {
    if (responseText) {
      onAddResponse(comment.id, responseText);
      setResponseText('');
    }
  };

  return (
    <div className="comment">
      <div className="comment__content">
        <strong>{comment.author}</strong>: {comment.text}
      </div>
      
      <div className="comment__responses">
        <h4>Respuestas:</h4>
        {comment.responses.length > 0 ? (
          <ul>
            {comment.responses.map((response, index) => (
              <li key={index}>
                <strong>{response.author}</strong>: {response.text}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay respuestas aún.</p>
        )}
      </div>

      <div className="comment__add-response">
        <input
          type="text"
          value={responseText}
          onChange={(e) => setResponseText(e.target.value)}
          placeholder="Escribe tu respuesta..."
        />
        <button onClick={handleAddResponse}>Responder</button>
      </div>
    </div>
  );
};

export default Comment;
