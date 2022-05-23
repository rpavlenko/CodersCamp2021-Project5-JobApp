import { Container } from '@mui/material';
import { OffersList } from '../organisms/OffersList';
import { BackIconButton } from '../atoms/Button/BackIconButton';
import { HeaderFormPage } from '../atoms/HeaderFormPage/HeaderFormPage';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const FavouriteOffersPage = () => {
  const favouriteOffers = useSelector((state: RootState) => {
    return state.favorite.favoriteList;
  });
  return (
    <>
      <Container>
        <BackIconButton />
        <HeaderFormPage props={'Ulubione oferty pracy'} />
        <OffersList offers={favouriteOffers} />
      </Container>
    </>
  );
};