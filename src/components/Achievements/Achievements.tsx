import React from 'react';
import styles from './Achievements.module.css';
import {
  Engineering as EngineeringIcon,
  History as HistoryIcon,
  ThumbUp as ThumbUpIcon,
  DirectionsCar as DirectionsCarIcon,
  Timer as TimerIcon
} from '@mui/icons-material';


// Компонент для отображения одного преимущества
const AdvantageItem: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }> = ({ icon, title, description }) => {
    return (
      <div className={styles.advantageItem}>
        <div className={styles.iconWrapper}>
          {icon}
        </div>
        <h3 className={styles.advantageTitle}>{title}</h3>
        <p className={styles.advantageDescription}>{description}</p>
      </div>
    );
  };

  const Achievements: React.FC = () => {
    // Данные о преимуществах
    const advantages = [
      {
        icon: <EngineeringIcon className={styles.icon} />,
        title: "Высокая квалификация",
        description: "Сертифицированный специалист с профильным образованием"
      },
      {
        icon: <HistoryIcon className={styles.icon} />,
        title: "Большой опыт работы",
        description: "Более 20 лет в сфере сварочных работ"
      },
      {
        icon: <ThumbUpIcon className={styles.icon} />,
        title: "Довольные клиенты",
        description: "Множество положительных отзывов и рекомендаций"
      },
      {
        icon: <DirectionsCarIcon className={styles.icon} />,
        title: "Выезд к заказчику",
        description: "Возможность проведения работ на вашей территории"
      },
      {
        icon: <TimerIcon className={styles.icon} />,
        title: "Чёткие сроки",
        description: "Точное соблюдение оговоренных сроков выполнения работ"
      }
    ];

    return (
       <div className={styles.container}>
        
        <div className={styles.achivements__container}>
          <div className={styles.advantages}>
            <h2 className={styles.title}>Почему Вам стоит со мной сотрудничать</h2>
            {advantages.map((advantage, index) => (
              <AdvantageItem
                key={index}
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
              />
            ))}
          </div>
        </div>  
      </div> 
    );

}

export default Achievements;