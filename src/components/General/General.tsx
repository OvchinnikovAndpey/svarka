import React from 'react';
import styles from './General.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.title}>Сварочные работы любой сложности</h2>
        <p className={styles.text}>Сварка аргоном, полуавтоматическая, электродуговая сварка. Изготовление изделий, 
          таких как: столы, венчики, шнеки и прочее, что предназначено пищевого производства. Сварка труб, деталей автомобилей и различных металлических конструкций.
          Работа как с частными клиетами, так и с юридическими лицами. 
        </p>
      </div>
    </div>
  );
};

export default About;
