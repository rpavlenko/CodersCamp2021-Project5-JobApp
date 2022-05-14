import { ApplyButton } from '../../atoms/Button/ApplyButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IProps {
  onClick: ()=> void
}

export const BottomApplyFofAnOffer = ({ onClick }: IProps) => {
  return (
    <Box display={'flex'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography sx={{ marginLeft: '10px', fontWeight: '700' }}>
        12000-1500 PLN
      </Typography>
      <ApplyButton onClick={onClick}/>
    </Box>
  );
};