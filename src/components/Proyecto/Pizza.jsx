import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Estilos del botón
const Boton = styled.button`
width: 40%;
margin-left: 5%;
margin-top: 4%;
padding: 12px;
background-color: #007bff;
color: white;
border: none;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: #0056b3;
}

&:active {
  background-color: #00408d;
}
`;

// Componente de pizza
const Pizza = ({ id, nombre, precio }) => {
  const [isEditable, setEditable] = useState(false);
  const [nombreEdit, setNombreEdit] = useState(nombre);
  const [precioEdit, setPrecioEdit] = useState(precio);

  // Función para borrar pizza
  const borraPizza = (id) => {
    fetch("http://localhost:3000/pizzas/" + id, {
      method: 'DELETE',
    }).then((response) => response.json());
  };

  // Función para editar pizza
  const editaPizza = (id) => {
    setEditable(!isEditable);
    const pizza = {
      id: id,
      precio: precioEdit,
      nombre: nombreEdit,
    };

    fetch("http://localhost:3000/pizzas/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pizza),
    }).then((response) => response.json());
  };

  // Cambia el estado de edición
  const setEdita = () => {
    setEditable(!isEditable);
  };

  

  // Renderizado del componente
  if (isEditable) {
    return (
      <>
        <div>
          <span>Id: {id}</span>
          <br />
          <span>Nombre: </span>
          <input
            type="text"
            value={nombreEdit}
            onChange={(e) => setNombreEdit(e.target.value)}
          />
          <br />
          <span>Precio: </span>
          <input
            type="number"
            value={precioEdit}
            onChange={(e) => setPrecioEdit(Number(e.target.value))}
          />
          <br />
          <br />
          <Boton onClick={() => editaPizza(id)}>Guardar Cambios</Boton>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <span>Id: {id}</span>
          <br />
          <span>Nombre: {nombre}</span>
          <br />
          <span>Precio: {precio}</span>
          <br />
          <br />
          <Boton onClick={() => borraPizza(id)}>Borrar</Boton>
          <Boton onClick={setEdita}>Editar</Boton>
        </div>
      </>
    );
  }
};

// Validación de propiedades
Pizza.propTypes = {
  id: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
};

export default Pizza;
