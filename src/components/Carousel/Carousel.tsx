import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Carousel.module.css';
import { carouselData } from './carouselData';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Автоматическая прокрутка
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, goToNext]);
  // Приостановка автопрокрутки при наведении
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className={styles.carouselSection}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Примеры выполненных работ
        </motion.h2>
        
        <div className={styles.carousel}>
          <div 
            className={styles.carouselTrack}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className={styles.carouselSlide}
              >
                <img 
                  src={carouselData[currentIndex].image} 
                  alt={carouselData[currentIndex].title} 
                  className={styles.carouselImage}
                />
                <div className={styles.carouselContent}>
                  <h3 className={styles.carouselTitle}>{carouselData[currentIndex].title}</h3>
                  <p className={styles.carouselDescription}>{carouselData[currentIndex].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            className={`${styles.carouselButton} ${styles.prevButton}`} 
            onClick={goToPrev}
            aria-label="Предыдущий слайд"
          >
            &#10094;
          </button>
          <button 
            className={`${styles.carouselButton} ${styles.nextButton}`} 
            onClick={goToNext}
            aria-label="Следующий слайд"
          >
            &#10095;
          </button>
          
          <div className={styles.indicators}>
            {carouselData.map((_, index) => (
              <div
                key={index}
                className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
