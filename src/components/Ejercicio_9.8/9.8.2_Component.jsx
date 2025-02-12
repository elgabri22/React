import React, { useState } from 'react';
import EditableItem from './EditableItem'; // Importamos EditableItem

const EditableList = () => {
  // Lista de items
  const [items, setItems] = useState([
    { id: 1, text: 'Estudiar React' },
    { id: 2, text: 'Programar todos los días' },
  ]);

  // Función para guardar los cambios en un item específico
  const handleSave = (id, newText) => {
    // Actualizamos el texto del item con el id dado
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  return (
    <div>
      <h1>Lista Editable</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <EditableItem
              id={item.id}
              text={item.text}
              onSave={handleSave} // Pasamos la función onSave
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditableList;
