import React, { useState } from 'react';
import styles from './11.6_Style.css'; // Importamos los estilos del módulo CSS

const ImageCarousel = () => {
  // Estado para el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de imágenes (puedes poner URLs de tus imágenes)
  const images = [
    'https://via.placeholder.com/600x400/FF5733/fff?text=Imagen+1',
    'https://via.placeholder.com/600x400/33FF57/fff?text=Imagen+2',
    'https://via.placeholder.com/600x400/3357FF/fff?text=Imagen+3',
    'https://via.placeholder.com/600x400/F1C40F/fff?text=Imagen+4'
  ];

  // Función para mostrar la imagen siguiente
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para mostrar la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className={styles.carousel__image}
        />
      </div>
      <div className={styles.carousel__controls}>
        <button onClick={goToPrevious} className={styles.carousel__button}>
          Anterior
        </button>
        <button onClick={goToNext} className={styles.carousel__button}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
