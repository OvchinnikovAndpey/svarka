import React from 'react';
import styles from './Footer.module.css'; 

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerName}>Сварочные работы © 2025 | Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer; // Не забудьте экспортировать компонент
