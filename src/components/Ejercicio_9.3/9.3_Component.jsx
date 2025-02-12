import React, { useState } from 'react';
import './9.3_Style.css';

const ThemeSwitcher = ({ children }) => {
  // Estado para el tema, por defecto será el tema claro
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Función para alternar entre los temas
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Determinamos la clase que se aplicará según el tema
  const themeClass = isDarkTheme ? 'dark-theme' : 'light-theme';

  return (
    <div className={`theme-container ${themeClass}`}>
      <button className="toggle-button" onClick={toggleTheme}>
        {isDarkTheme ? 'Cambiar a Tema Claro' : 'Cambiar a Tema Oscuro'}
      </button>
      <div className="content">{children}</div>
    </div>
  );
};

export default ThemeSwitcher;
