import React from 'react';

// Componente para el encabezado de la tarjeta
const CardHeader = ({ title }) => {
  return <div style={{ fontWeight: 'bold', fontSize: '1.5rem', padding: '10px' }}>{title}</div>;
};

// Componente para el cuerpo de la tarjeta
const CardBody = ({ children }) => {
  return <div style={{ padding: '10px' }}>{children}</div>;
};

// Componente para el pie de la tarjeta
const CardFooter = ({ children }) => {
  return <div style={{ padding: '10px', borderTop: '1px solid #ddd' }}>{children}</div>;
};

// Componente Card que utiliza los anteriores
const Card = ({ title, bodyContent, footerContent }) => {
  return (
    <div style={{ border: '1px solid #ddd', width: '300px', borderRadius: '5px', overflow: 'hidden' }}>
      <CardHeader title={title} />
      <CardBody>{bodyContent}</CardBody>
      <CardFooter>{footerContent}</CardFooter>
    </div>
  );
};

export default Card;
