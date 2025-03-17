import React from 'react';
import styles from './General.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.title}>Сварочные работы любой сложности</h2>
        <p className={styles.text}>Сварка аргоном, полуавтоматическая сварка, изготовление металлокострукций, 
          ремонт автомобильных деталей и многое другое. Работа как с частными клиетами, так и с организациями. </p>
      </div>
    </div>
  );
};

export default About;
