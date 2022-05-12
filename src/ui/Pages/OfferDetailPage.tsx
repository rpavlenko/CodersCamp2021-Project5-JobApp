import { DetailHeader } from '../organisms/DetailHeader';
import Container from '@mui/material/Container';
import { BottomApplyFofAnOffer } from '../molecules/BottomApplyFofAnOffer/BottomApplyFofAnOffer';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import { BackIconButton } from '../atoms/Button/BackIconButton';

export const OfferDetailPage = () => {
  return (<>
      <Container>
        <Box sx={{ paddingBottom: '82px' }}>
          <BackIconButton/>
          <DetailHeader/>
        </Box>
        <AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
          <Container>
            <BottomApplyFofAnOffer />
          </Container>
        </AppBar>
      </Container>
    </>
  );
};