import { ClosingButton } from '../atoms/Button/ClosingButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface IProps {
  onClose: () => void
}

export const FilterTitle = (props: IProps) => {
  const { onClose } = props;
  return (
    <Box sx={{display: 'flex',  alignContent: 'center'}} >
      <ClosingButton onClose={onClose}/>
      <Typography variant='h6' sx={{ padding: '20px', paddingLeft: '4px' }}>
        Filtry
      </Typography>
    </Box>
  );
}
;