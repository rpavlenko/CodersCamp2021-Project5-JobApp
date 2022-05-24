import { SubheaderOfDescription } from '../../atoms/SubheaderOfDescription/SubheaderOfDescription';
import { Box } from '@mui/material';

export const ApplicationSend = () => {
  return (
    <Box sx={{ marginTop: '100px' }}>
      <SubheaderOfDescription align={'center'}>
        Zgłoszenie zostało wysłane.
      </SubheaderOfDescription>
    </Box>
  );
};