import { Container, Typography } from '@mui/material';
import notFound from '../../assets/not-found-page.png';
import { BaseButton } from '../atoms/Button/BaseButton';

export default function NotFound() {
  return (
    <div style={{ margin: '0 auto' }}>
      <img src={notFound} alt="page not found" />
      <Container sx={{ margin: '0 auto', textAlign: 'center' }}>
        <Typography variant="h5" mb={2}>
          Strona nie znaleziona
        </Typography>
        <a href="/">
          <BaseButton
            variant="contained"
            size="large"
            sx={{ marginBottom: '20px', bgcolor: 'secondary.main' }}
          >
            Wrócić na główną!
          </BaseButton>
        </a>
      </Container>
    </div>
  );
}
