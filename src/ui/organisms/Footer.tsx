import { Box, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const Footer = () => {
  return (
    <Box
      p={2}
      sx={{
        bgcolor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 'auto',
      }}
    >
      <Typography mb={2} variant="h5">
        Kontakt:
      </Typography>

      <Box
        mb={2}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
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
          <Typography component="span" ml={1}>
            Napisz:
          </Typography>
        </Box>
        <Typography component="span">
          <a href="mailto:info@owocoweczwartki.com">info@owocoweczwartki.com</a>
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
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
          <Typography component="span" ml={1}>
            Zadzwoń:
          </Typography>
        </Box>
        <Typography component="span">
          <a href="tel:+48000000000"> +48 000 000 000 </a>
        </Typography>
      </Box>
      <Typography mt={4} align="center">
        © 2022 Owocowe Czwartki
      </Typography>
    </Box>
  );
};
