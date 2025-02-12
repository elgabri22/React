import React, { useState } from 'react';
import Contact from './Contact'; // Importamos el componente hijo Contact
import './ContactList.css'; // Estilos para la lista de contactos

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  // Función para añadir un contacto
  const addContact = () => {
    if (newName && newPhone) {
      const newContact = {
        id: Date.now(), // Usamos el timestamp como id único
        name: newName,
        phone: newPhone,
      };
      setContacts([...contacts, newContact]);
      setNewName('');
      setNewPhone('');
    }
  };

  // Función para eliminar un contacto
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="contact-list">
      <h1>Lista de Contactos</h1>

      {/* Formulario para añadir un nuevo contacto */}
      <div className="contact-list__form">
        <input
          type="text"
          placeholder="Nombre"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
        />
        <button onClick={addContact}>Añadir Contacto</button>
      </div>

      {/* Mostrar lista de contactos */}
      <div className="contact-list__items">
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} onDelete={deleteContact} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
