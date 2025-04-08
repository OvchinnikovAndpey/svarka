import React from 'react'
import {
  Box,
  Container,
  Typography,
  IconButton,
  Tooltip,
  Button,
  useMediaQuery,
  useTheme,
  Paper,
  Stack,
  Grid,
} from '@mui/material'
import {
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material'

const Contacts: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const phoneNumber = '+7(903)231-14-87'
  const phoneNumberClean = phoneNumber.replace(/[^0-9+]/g, '')
  const email = 'svarka@example.com'

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumberClean}`
  }


  const handleTelegramClick = () => {
    window.open(`https://t.me/${phoneNumberClean.substring(1)}`, '_blank')
  }

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumberClean.substring(1)}`, '_blank')
  }

  const handleInstagramClick = () => {
    window.open('https://instagram.com/svarka_garazh81', '_blank')
  }

  return (
    <Box
      id="contacts"
      sx={{
        py: 6,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 4,
          }}
        >
          Наши контакты
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  <LocationIcon sx={{ mr: 1, color: '#e74c3c' }} />
                  Адрес
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 0.5, // Уменьшенный нижний отступ вместо стандартного paragraph
                  }}
                >
                  Московская область,
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 1, // Небольшой отступ перед следующим элементом
                  }}
                >
                  г. Щелково, ул. Браварская
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Гараж 81
                </Typography>{' '}
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  <PhoneIcon sx={{ mr: 1, color: '#e74c3c' }} />
                  Телефон
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {phoneNumber}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<PhoneIcon />}
                  onClick={handleCallClick}
                  sx={{
                    backgroundColor: '#e74c3c',
                    '&:hover': {
                      backgroundColor: '#c0392b',
                    },
                    mb: 2,
                  }}
                >
                  Позвонить нам
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                }}
              >
                Мы в социальных сетях
              </Typography>

              <Stack spacing={3}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <IconButton
                    onClick={handleTelegramClick}
                    sx={{
                      color: '#0088cc',
                      backgroundColor: 'rgba(0, 136, 204, 0.1)',
                      mr: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 136, 204, 0.2)',
                      },
                    }}
                  >
                    <TelegramIcon fontSize="large" />
                  </IconButton>
                  <Box>
                    <Typography variant="h6">Telegram</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Быстрая связь и консультации
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <IconButton
                    onClick={handleWhatsAppClick}
                    sx={{
                      color: '#25D366',
                      backgroundColor: 'rgba(37, 211, 102, 0.1)',
                      mr: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(37, 211, 102, 0.2)',
                      },
                    }}
                  >
                    <WhatsAppIcon fontSize="large" />
                  </IconButton>
                  <Box>
                    <Typography variant="h6">WhatsApp</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Обсуждение деталей заказа
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                ></Box>
              </Stack>

              <Box sx={{ mt: 1, pt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Режим работы:
                </Typography>
                <Typography variant="body1">Пн-Пт: 9:00 - 18:00</Typography>
                <Typography variant="body1">Сб: 10:00 - 16:00</Typography>
                <Typography variant="body1">Вс: Выходной</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 5,
            p: 3,
            backgroundColor: '#333',
            borderRadius: 2,
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Нужна консультация?
          </Typography>
          <Typography variant="body1" paragraph>
            Свяжитесь с нами любым удобным способом, и мы ответим на все ваши
            вопросы о сварочных работах.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Tooltip title="Позвонить">
              <IconButton
                onClick={handleCallClick}
                sx={{
                  color: 'white',
                  backgroundColor: '#e74c3c',
                  '&:hover': {
                    backgroundColor: '#c0392b',
                  },
                }}
              >
                <PhoneIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Telegram">
              <IconButton
                onClick={handleTelegramClick}
                sx={{
                  color: 'white',
                  backgroundColor: '#0088cc',
                  '&:hover': {
                    backgroundColor: '#0077b3',
                  },
                }}
              >
                <TelegramIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="WhatsApp">
              <IconButton
                onClick={handleWhatsAppClick}
                sx={{
                  color: 'white',
                  backgroundColor: '#25D366',
                  '&:hover': {
                    backgroundColor: '#1faa53',
                  },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Contacts
