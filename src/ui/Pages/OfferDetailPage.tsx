import { useState, useEffect } from 'react';
import { DetailHeader } from '../organisms/DetailHeader';
import Container from '@mui/material/Container';
import { BottomApplyFofAnOffer } from '../molecules/BottomApplyFofAnOffer/BottomApplyFofAnOffer';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import { BackIconButton } from '../atoms/Button/BackIconButton';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchOfferData } from '../../hooks/useFetchOfferData';
import { css } from '@emotion/react';
import PulseLoader from 'react-spinners/PulseLoader';

export const OfferDetailPage = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const offer = useFetchOfferData(id);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('#ffc107');
  console.log(offer);

  const handleClick = () => {
    navigate('/detail/:id/apply');
  };

  const override = css`
    display: block;
    margin: 0 auto;
    text-align: center;
  `;

  return (
    <>
      <Container>
        <Box sx={{ paddingBottom: '40px' }}>
          <BackIconButton />
          {!offer ? (
            <PulseLoader
              color={color}
              loading={loading}
              css={override}
              size={30}
            />
          ) : (
            <DetailHeader offerData={offer} />
          )}
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
