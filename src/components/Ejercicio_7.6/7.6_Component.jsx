import React from 'react';

const StatusMessage = ({ isOnline }) => {
  return (
    <div>
      {isOnline ? "Usuario en línea" : "Usuario desconectado"}
    </div>
  );
};

export default StatusMessage;
