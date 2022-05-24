import { ClosingButton } from '../atoms/Button/ClosingButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

interface IProps {
  onClose: () => void
}

export const FilterTitle = (props: IProps) => {
  const { onClose } = props;
  return (
    <Box>
      <Container sx={{ display: 'flex', flexDirection: 'row' }}>
        <ClosingButton onClose={onClose} />
        <Typography variant='h6' sx={{ padding: '20px', paddingLeft: '4px' }}>
          Filtry
        </Typography>
      </Container>
    </Box>
  );
};