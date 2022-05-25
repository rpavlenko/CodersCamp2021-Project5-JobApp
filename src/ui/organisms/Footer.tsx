import { Box, Container, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const Footer = () => {
  return (
    <Box
      p={2}
      sx={{
        bgcolor: 'primary.main',
        marginTop: 'auto',
      }}
    >
      <Container>
        <Typography mb={2} variant='h5' sx={{
          '@media (min-width: 768px)': {
            display: 'flex',
            justifyContent: 'flex-end',
          }
        }}>
          Kontakt:
        </Typography>
        <Box
          mb={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            '@media (min-width: 768px)': {
              justifyContent: 'flex-end',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <MailIcon />
            <Typography component='span' ml={1} sx={{ paddingRight: '10px' }}>
              Napisz:
            </Typography>
          </Box>
          <Typography component='span'>
            <a href='mailto:info@owocoweczwartki.com'>info@owocoweczwartki.com</a>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            '@media (min-width: 768px)': {
              justifyContent: 'flex-end',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <LocalPhoneIcon />
            <Typography component='span' ml={1} sx={{ paddingRight: '10px' }}>
              Zadzwoń:
            </Typography>
          </Box>
          <Typography component='span'>
            <a href='tel:+48000000000'> +48 000 000 000 </a>
          </Typography>
        </Box>
        <Typography mt={4} align='center'>
          © 2022 Owocowe Czwartki
        </Typography>
      </Container>
    </Box>
  );
};
