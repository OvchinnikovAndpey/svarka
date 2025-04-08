import styles from './Maps.module.css';
import React, { useState } from 'react';

const Maps: React.FC = () => {
  const [isMapInteractive, setIsMapInteractive] = useState(false);

  // Включаем интерактивность карты при наведении курсора
  const handleMouseEnter = () => {
    setIsMapInteractive(true);
  };

  // Отключаем интерактивность карты при уходе курсора
  const handleMouseLeave = () => {
    setIsMapInteractive(false);
  };

  return (
    <div className={styles.mapContainer}>
      {/* Оверлей, который блокирует взаимодействие с картой, пока на нее не наведен курсор */}
      {!isMapInteractive && (
        <div 
          className={styles.mapOverlay} 
          onClick={() => setIsMapInteractive(true)}
        >
          <div className={styles.mapOverlayText}>
            Нажмите для активации карты
          </div>
        </div>
      )}
      
      <div 
        className={styles.mapWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <iframe 
          className={`${styles.map} ${isMapInteractive ? styles.mapInteractive : ''}`} 
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad5f012c789ff9863485a9340bd5c84eb9d26a31e0d4443f6fa6f20fb328cb753&amp;source=constructor"
          width="100%"
          height="600"
          title="Яндекс Карта"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
