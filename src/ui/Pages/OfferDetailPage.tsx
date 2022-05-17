import { DetailHeader } from '../organisms/DetailHeader';
import Container from '@mui/material/Container';
import { BottomApplyFofAnOffer } from '../molecules/BottomApplyFofAnOffer/BottomApplyFofAnOffer';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import { BackIconButton } from '../atoms/Button/BackIconButton';
import { useNavigate } from 'react-router-dom';

export const OfferDetailPage = () => {
  let navigate = useNavigate();
  //TODO Dynamic ID
  const handleClick = () => {
    navigate('/detail/:id/apply');
  };

    return (
      <>
        <Container>
          <Box sx={{ paddingBottom: '40px' }}>
            <BackIconButton />
            <DetailHeader />
          </Box>
        </Container>
        <AppBar position='sticky' sx={{ top: 'auto', bottom: 0 }}>
          <Container>
            <BottomApplyFofAnOffer onClick={handleClick} />
          </Container>
        </AppBar>
      </>
    );
  };
