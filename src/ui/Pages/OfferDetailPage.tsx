import { DetailHeader } from '../organisms/DetailHeader';
import Container from '@mui/material/Container';
import { BottomApplyFofAnOffer } from '../molecules/BottomApplyFofAnOffer/BottomApplyFofAnOffer';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import { BackIconButton } from '../atoms/Button/BackIconButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchOfferData } from '../../hooks/useFetchOfferData';

export const OfferDetailPage = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const offer = useFetchOfferData(id);

  const handleClick = () => {
    navigate('/detail/:id/apply');
  };

  return (
    <>
      <Container>
        <Box sx={{ paddingBottom: '40px' }}>
          <BackIconButton />
          {offer && <DetailHeader offerData={offer} />}
        </Box>
      </Container>
      <AppBar position="sticky" sx={{ top: 'auto', bottom: 0 }}>
        <Container>
          <BottomApplyFofAnOffer onClick={handleClick} />
        </Container>
      </AppBar>
    </>
  );
};
