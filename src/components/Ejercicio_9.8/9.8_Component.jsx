import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditableItem = ({ id, text, onSave }) => {
  // Estado para gestionar si está en modo edición
  const [isEditing, setIsEditing] = useState(false);
  // Estado para gestionar el texto editado
  const [currentText, setCurrentText] = useState(text);

  // Función para manejar el cambio de texto
  const handleChange = (event) => {
    setCurrentText(event.target.value);
  };

  // Función para guardar el nuevo texto
  const handleSave = () => {
    onSave(id, currentText); // Llamamos a onSave para actualizar el texto en el componente padre
    setIsEditing(false); // Salimos del modo edición
  };

  // Función para cancelar la edición
  const handleCancel = () => {
    setCurrentText(text); // Restauramos el texto original
    setIsEditing(false); // Salimos del modo edición
  };

  return (
    <div className="editable-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={currentText}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Guardar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      ) : (
        <div>
          <span>{text}</span>
          <button onClick={() => setIsEditing(true)}>Editar</button>
        </div>
      )}
    </div>
  );
};

EditableItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditableItem;
