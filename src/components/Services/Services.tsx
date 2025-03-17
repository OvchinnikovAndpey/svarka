import React from "react";
import { motion } from "framer-motion";
import styles from "./Services.module.css";
import { ServicesData } from "./ServicesData";

const Services: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.lots}>
      <motion.h2
        id="lots-view"
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Виды применяемы технологий сварки
      </motion.h2>
      <motion.ul
        className={styles.cardList}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {ServicesData.map((service) => (
          <motion.li
            key={service.id}
            className={styles.cardListItem}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#" className={styles.cardLink} onClick={handleClick}>
              <article className={styles.card}>
                <img
                  src={service.photo}
                  alt={service.about}
                  className={styles.cardImage}
                />
                <div className={styles.overlay}>
                  <h2 className={styles.cardTitle}>{service.about}</h2>
                  <p className={styles.cardText}>{service.description}</p>
                </div>
              </article>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Services;
