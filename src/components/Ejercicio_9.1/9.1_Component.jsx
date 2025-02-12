import React from 'react';
import PropTypes from 'prop-types';
import './9.1_Style.css'; // Importamos el archivo de estilo

const UserCard = ({ photo, firstName, lastName, birthDate, description, company }) => {
  return (
    <div className="user-card">
      <img className="user-photo" src={photo} alt={`${firstName} ${lastName}`} />
      <div className="user-details">
        <h2 className="user-name">{firstName} {lastName}</h2>
        <p className="user-birthdate">Fecha de nacimiento: {birthDate}</p>
        <p className="user-description">{description}</p>
        <p className="user-company">Empresa actual: {company}</p>
      </div>
    </div>
  );
};

// Definimos los prop types para asegurar que las propiedades sean correctas
UserCard.propTypes = {
  photo: PropTypes.string.isRequired, // URL de la foto del usuario
  firstName: PropTypes.string.isRequired, // Primer nombre
  lastName: PropTypes.string.isRequired, // Apellidos
  birthDate: PropTypes.string.isRequired, // Fecha de nacimiento
  description: PropTypes.string.isRequired, // Descripción del usuario
  company: PropTypes.string.isRequired, // Empresa actual
};

export default UserCard;
