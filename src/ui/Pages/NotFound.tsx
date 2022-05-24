import { Container, Typography } from '@mui/material';
import notFound from '../../assets/not-found-page.png';
import { BaseButton } from '../atoms/Button/BaseButton';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div style={{ margin: '0 auto' }}>
      <img src={notFound} alt="page not found" />
      <Container sx={{ margin: '0 auto', textAlign: 'center' }}>
        <Typography variant="h5" mb={2}>
          Strona nie znaleziona
        </Typography>
        <BaseButton
          variant="contained"
          size="large"
          sx={{ marginBottom: '20px', bgcolor: 'secondary.main' }}
          onClick={handleClick}
        >
          Wróć na stronę główną!
        </BaseButton>
      </Container>
    </div>
  );
};
