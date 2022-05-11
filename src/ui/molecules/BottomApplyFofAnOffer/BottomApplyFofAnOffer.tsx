import { ApplyButton } from '../../atoms/Button/ApplyButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const BottomApplyFofAnOffer = () => {
  return (
    <Box display={'flex'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography sx={{ marginLeft: '10px', fontWeight: '700' }}>
        12000-1500 PLN
      </Typography>
      <ApplyButton />
    </Box>
  );
};