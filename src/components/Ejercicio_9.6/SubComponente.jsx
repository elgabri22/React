import React, { useState } from 'react';
import AccordionItem from './AccordionItem'; // Importamos AccordionItem

const AccordionGroup = ({ items }) => {
  // Estado para gestionar cuál AccordionItem está abierto
  const [openItemId, setOpenItemId] = useState(null);

  // Función para manejar el toggle de apertura/cierre
  const handleToggle = (id) => {
    // Si el item que se hace clic es el que está abierto, lo cerramos (cambiamos a null)
    if (openItemId === id) {
      setOpenItemId(null);
    } else {
      setOpenItemId(id);
    }
  };

  return (
    <div>
      {items.map(item => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          isOpen={openItemId === item.id}
          onToggle={handleToggle}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default AccordionGroup;
