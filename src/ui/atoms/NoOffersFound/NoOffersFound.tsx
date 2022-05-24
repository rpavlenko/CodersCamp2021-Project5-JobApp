import { SubheaderOfDescription } from '../SubheaderOfDescription/SubheaderOfDescription';
import { Box } from '@mui/material';

export const NoOffersFound = () => {
  return (
    <Box sx={{ marginTop: '50px' }}>
      <SubheaderOfDescription align={'center'}>
        Nie znaleziono ofert.
      </SubheaderOfDescription>
      <SubheaderOfDescription align={'center'}>
        Zmodyfikuj kryteria wyszukiwania.
      </SubheaderOfDescription>
    </Box>
  );
};