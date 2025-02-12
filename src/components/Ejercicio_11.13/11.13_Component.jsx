import React, { useState } from 'react';

const Note = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedDescription, setEditedDescription] = useState(note.description);

  // Maneja el modo de edición
  const toggleEdit = () => {
    if (isEditing) {
      onEdit(note.id, editedTitle, editedDescription);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
        </>
      )}
      <button onClick={toggleEdit}>
        {isEditing ? 'Guardar' : 'Editar'}
      </button>
      <button onClick={() => onDelete(note.id)}>Eliminar</button>
    </div>
  );
};

export default Note;
