import React from 'react';
import UserCard from './UserCard';  // Asegúrate de importar el componente UserCard
import './9.2_Style.css';  // Importamos el archivo de estilos para UserList

const users = [
  {
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    firstName: 'Juan',
    lastName: 'Pérez',
    birthDate: '1985-06-15',
    description: 'Desarrollador de software con experiencia en tecnologías web y móviles.',
    company: 'TechCorp',
  },
  {
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    firstName: 'Ana',
    lastName: 'González',
    birthDate: '1990-09-25',
    description: 'Diseñadora gráfica especializada en branding y diseño de interfaces.',
    company: 'CreativeStudio',
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    firstName: 'Carlos',
    lastName: 'Martínez',
    birthDate: '1982-03-10',
    description: 'Especialista en marketing digital y gestión de proyectos.',
    company: 'MarketPro',
  },
];

const UserList = () => {
  return (
    <div className="user-list">
      <h1>Lista de Usuarios</h1>
      <div className="user-cards">
        {users.map((user, index) => (
          <UserCard 
            key={index}
            photo={user.photo}
            firstName={user.firstName}
            lastName={user.lastName}
            birthDate={user.birthDate}
            description={user.description}
            company={user.company}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
