import { Container, Modal } from '@mui/material';
import { SearchInput } from '../atoms/Search/Search';
import { FilterButton } from '../atoms/Button/FilterButton';
import { OffersList } from '../organisms/OffersList';
import { FavouriteButton } from '../atoms/Button/FavouriteButton';
import { useState } from 'react';
import { FilterPage } from './FilterPage';
import { OffersTitle } from '../atoms/OffersTitle/OffersTitle';
import { useFetchOffersData } from '../../hooks/useFetchOffersData';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const MainPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useFetchOffersData();
  const offers = useSelector((state: RootState) => state.offers.list);

  return (
    <>
      <Container maxWidth='xl' sx={{ backgroundColor: 'black' }}>
        <Container
          sx={{
            paddingTop: '30px',
            marginBottom: '20px',
            width: '100%',
            backgroundColor: 'black',
          }}
        >
          <SearchInput />
          <FilterButton onClick={handleOpen} />
          <FavouriteButton />
        </Container>
      </Container>
      <Container>
        <OffersTitle />
        <OffersList offers={offers}/>
      </Container>
      <Modal open={open} sx={{ overflow: 'scroll' }}>
        <FilterPage onClose={handleClose} />
      </Modal>
    </>
  );
};
