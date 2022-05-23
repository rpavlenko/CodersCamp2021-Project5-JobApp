import { Container } from '@mui/material';
import { OffersList } from '../organisms/OffersList';
import { BackIconButton } from '../atoms/Button/BackIconButton';
import { HeaderFormPage } from '../atoms/HeaderFormPage/HeaderFormPage';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { SubheaderOfDescription } from '../atoms/SubheaderOfDescription/SubheaderOfDescription';

export const FavouriteOffersPage = () => {
  const favouriteOffers = useSelector((state: RootState) => {
    return state.favorite.favoriteList;
  });
  const offers = useSelector((state: RootState) => state.offers.list);
  const filteredOffers = offers.filter((offer) => favouriteOffers.includes(offer.id.toString()));

  return (
    <>
      <Container>
        <BackIconButton />
        <HeaderFormPage props={'Ulubione oferty pracy'} />
        {favouriteOffers.length > 0 ? <OffersList offers={filteredOffers} /> :
        <SubheaderOfDescription align={'center'}>
          Lista ulubionych ofert pracy jest pusta.
        </SubheaderOfDescription>}
      </Container>
    </>
  );
};