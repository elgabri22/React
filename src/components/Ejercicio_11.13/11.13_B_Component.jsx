import React, { useState } from 'react';

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = () => {
    if (title && description) {
      onAdd(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="add-note">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddNote}>Añadir Nota</button>
    </div>
  );
};

export default AddNote;
