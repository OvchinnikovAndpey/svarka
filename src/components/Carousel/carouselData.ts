

interface CarouselItem {
    id: number;
    image: string;
    title: string;
    description: string;
  }
  

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    image: '/images/carousel/mig.jpg',
    title: 'Сварка металлоконструкций',
    description: 'Пример сварки металлоконструкций с использованием MIG/MAG технологии'
  },
  {
    id: 2,
    image: '/images/carousel/tig.jpg',
    title: 'Аргонная сварка',
    description: 'Высокоточная TIG сварка нержавеющей стали'
  },
  {
    id: 3,
    image: '/images/carousel/mag.jpg',
    title: 'Сварка трубопроводов',
    description: 'Профессиональная сварка трубопроводов различного диаметра'
  },
  {
    id: 4,
    image: '/images/carousel/mma.jpg',
    title: 'Ручная дуговая сварка',
    description: 'Пример ручной дуговой сварки металлических элементов'
  },
  {
    id: 5,
    image: '/images/carousel/mma.jpg',
    title: 'Полуавтоматическая сварка',
    description: 'Результат работы с использованием полуавтоматической сварки'
  }
];
