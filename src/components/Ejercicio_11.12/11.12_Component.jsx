import React from 'react';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className="contact">
      <span className="contact__name">{contact.name}</span>
      <span className="contact__phone">{contact.phone}</span>
      <button className="contact__deleteButton" onClick={() => onDelete(contact.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default Contact;
