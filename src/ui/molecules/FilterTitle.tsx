import { ClosingButton } from '../atoms/Button/ClosingButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const FilterTitle = () => {
  return (
    <Box sx={{display: 'flex',  alignContent: 'center'}} >
      <ClosingButton />
      <Typography variant='h6' sx={{ padding: '20px', paddingLeft: '4px' }}>
        Filtry
      </Typography>
    </Box>
  );
}
;