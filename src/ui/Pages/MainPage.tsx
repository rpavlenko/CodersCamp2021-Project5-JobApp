import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useFetchOffersData } from '../../hooks/useFetchOffersData';
import { fetchOffers } from '../../features/offersList/offersList';
import { Container, Modal } from '@mui/material';
import { SearchInput } from '../atoms/Search/Search';
import { FilterButton } from '../atoms/Button/FilterButton';
import { OffersList } from '../organisms/OffersList';
import { FavouriteButton } from '../atoms/Button/FavouriteButton';
import { FilterPage } from './FilterPage';
import { OffersTitle } from '../atoms/OffersTitle/OffersTitle';

export const MainPage = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const offers = useSelector((state: RootState) => state.offers.list);
  useFetchOffersData();

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const search: string = searchTerm;

    if (search) {
      dispatch(fetchOffers(await getFilteredData(search)));
      setSearchParams({ search });
    } else {
      setSearchParams({});
    }
  };

  const getFilteredData = async (search: string) => {
    const data = await fetch(
      'https://628674b6f0e8f0bb7c167442.mockapi.io/api/v1/offers',
    )
      .then((response) => response.json())
      .then((data) =>
        data.filter((el: string) => {
          return Object.values(el).some((val) =>
            String(val).toLowerCase().includes(search.toLowerCase()),
          );
        }),
      );

    console.log(data);
    return data;
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundColor: 'black' }}>
        <Container
          sx={{
            paddingTop: '30px',
            marginBottom: '20px',
            width: '100%',
            backgroundColor: 'black',
          }}
        >
          <SearchInput
            onSubmit={handleSubmit}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <FilterButton onClick={handleOpen} />
          <FavouriteButton />
        </Container>
      </Container>
      <Container>
        <OffersTitle />
        <OffersList offers={offers} />
      </Container>
      <Modal open={open} sx={{ overflow: 'scroll' }}>
        <FilterPage onClose={handleClose} />
      </Modal>
    </>
  );
};
