import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./styles/global.css";
import Header from './components/Header';
import General from './components/General/General';
import About from './components/About/About';
import Services from './components/Services/Services';
// import Activity from './components/Activity/Activity';
import Achievements from './components/Achievements/Achievements';
import Carousel from './components/Carousel/Carousel';
import Maps from './components/Maps/Maps';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

// Создаем тему для Material-UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#e74c3c', // Красный цвет для сварочной тематики
    },
    secondary: {
      main: '#3498db',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <General />
      <About />
      <Achievements />
      <Services />
      <Carousel />
      <Contacts />
      <Maps />
      <Footer />
      {/* <Activity /> */}
      {/* Здесь будут другие компоненты вашего сайта */}
    </ThemeProvider>
  );
};

export default App;
