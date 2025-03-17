import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  Stack,
  Container,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const phoneNumber = '+7(903)231-14-87';
  const phoneNumberClean = phoneNumber.replace(/[^0-9+]/g, '');

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumberClean}`;
  };

  const handleTelegramClick = () => {
    window.open(`https://t.me/${phoneNumberClean.substring(1)}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumberClean.substring(1)}`, '_blank');
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={2}
      sx={{
        backgroundColor: '#333' // Тёмно-серый фон хедера
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            px: {
              xs: 0, // Нет горизонтальных отступов на очень маленьких экранах
              sm: 1, // 8px горизонтальный отступ на маленьких экранах
              md: 2  // 16px горизонтальный отступ на средних и больших экранах
            },
            py: {
              xs: 1,   // 8px вертикальный отступ на очень маленьких экранах
              sm: 1.5, // 12px вертикальный отступ на маленьких экранах
              md: 2    // 16px вертикальный отступ на средних и больших экранах
            }
          }}
        >
          <Stack
            direction="column"
            spacing={0.5}  // 4px отступ между строками текста
            sx={{
              flexGrow: 1 // Занимает доступное пространство, прижимая остальные элементы вправо
            }}
          >
            <Typography
              variant={isMobile ? "subtitle1" : "h6"} // Размер шрифта меньше на мобильных
              component="div"
              sx={{
                fontWeight: 'bold', // Жирный шрифт
                color: '#fff'       // Белый цвет текста
              }}
            >
              Сварочные работы
            </Typography>
            <Typography
              variant={isMobile ? "subtitle1" : "h6"} // Размер шрифта меньше на мобильных
              component="div"
              sx={{
                fontWeight: 'bold', // Жирный шрифт
                color: '#fff'       // Белый цвет текста
              }}
            >
              Гараж 81
            </Typography>
          </Stack>

          <Stack
            direction={isMobile ? "column" : "row"} // Вертикальное расположение на мобильных, горизонтальное на десктопах
            spacing={isMobile ? 1 : 3}  // 8px между элементами на мобильных, 24px на десктопах
            alignItems={isMobile ? "flex-end" : "center"} // Выравнивание по правому краю на мобильных, по центру на десктопах
          >
            {!isMobile && (
              <Box
                sx={{
                  display: 'flex', // Flex-контейнер для иконки и текста
                  alignItems: 'flex-start' // Выравнивание элементов по верхнему краю
                }}
              >
                <LocationIcon
                  sx={{
                    mr: 0.5, // 4px отступ справа от иконки
                    color: '#fff', // Белый цвет иконки
                    mt: 0.5 // Небольшой отступ сверху для выравнивания с первой строкой
                  }}
                />
                <Stack direction="column" spacing={0}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 'bold', // Жирный шрифт
                      color: '#fff', // Белый цвет текста
                      lineHeight: 1.5 // Уменьшенная высота строки для компактности
                    }}
                  >
                    Адрес:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#fff', // Белый цвет текста
                      lineHeight: 1.2 // Уменьшенная высота строки для компактности
                    }}
                  >
                    г. Щелково, ул. Браварская
                  </Typography>
                </Stack>
              </Box>
            )}

            <Box
              sx={{
                display: 'flex', // Flex-контейнер для иконки и текста
                alignItems: 'center', // Выравнивание элементов по центру
                flexDirection: isMobile ? 'column' : 'row', // На мобильных - колонка, на десктопах - строка
                gap: 1, // Отступ между элементами
                width: isMobile ? '100%' : 'auto' // На мобильных занимает всю ширину
              }}
            >
              {!isMobile && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <PhoneIcon
                    sx={{
                      mr: 0.5, // 4px отступ справа от иконки
                      color: '#fff'  // Белый цвет иконки
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#fff'  // Белый цвет текста
                    }}
                  >
                    {phoneNumber}
                  </Typography>
                </Box>
              )}

              {/* Контейнер для иконок соцсетей */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center', // Всегда центрируем по вертикали
                  justifyContent: isMobile ? 'center' : 'flex-start', // Центрируем на мобильных, по левому краю на десктопах
                  ml: isMobile ? 0 : 1, // Отступ слева только на десктопах
                  width: isMobile ? '100%' : 'auto', // На мобильных занимает всю ширину
                  mb: isMobile ? 1 : 0 // Добавляем отступ снизу на мобильных
                }}
              >
                <Tooltip title="Написать в Telegram">
                  <IconButton
                    onClick={handleTelegramClick}
                    size="small"
                    sx={{
                      color: '#0088cc', // Фирменный цвет Telegram
                      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Полупрозрачный белый фон
                      mr: 1, // Отступ справа
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)' // При наведении фон становится более непрозрачным
                      }
                    }}
                  >
                    <TelegramIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Написать в WhatsApp">
                  <IconButton
                    onClick={handleWhatsAppClick}
                    size="small"
                    sx={{
                      color: '#25D366', // Фирменный цвет WhatsApp
                      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Полупрозрачный белый фон
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)' // При наведении фон становится более непрозрачным
                      }
                    }}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <Button
              variant="contained" // Кнопка с заливкой
              color="primary" // Основной цвет из темы
              startIcon={<PhoneIcon />} // Иконка телефона слева
              onClick={handleCallClick}
              sx={{
                backgroundColor: '#e74c3c', // Красный цвет фона кнопки
                '&:hover': {
                  backgroundColor: '#c0392b' // Более тёмный красный при наведении
                },
                px: {
                  xs: 2, // 16px горизонтальный отступ на мобильных
                  sm: 3  // 24px горизонтальный отступ на десктопах
                },
                py: {
                  xs: 0.5, // 4px вертикальный отступ на мобильных
                  sm: 1    // 8px вертикальный отступ на десктопах
                },
                width: isMobile ? '100%' : 'auto' // На мобильных кнопка занимает всю ширину
              }}
            >
              {isMobile ? "Звонок" : "Обратный звонок"} {/* Сокращённый текст на мобильных */}
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
