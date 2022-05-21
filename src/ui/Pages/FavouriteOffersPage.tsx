import { Container } from '@mui/material';
import { OffersList } from '../organisms/OffersList';
import { offersData } from '../../api/api';
import { BackIconButton } from '../atoms/Button/BackIconButton';
import { HeaderFormPage } from '../atoms/HeaderFormPage/HeaderFormPage';

export const FavouriteOffersPage = () => {
  return (
    <>
      <Container>
        <BackIconButton />
        <HeaderFormPage props={'Ulubione oferty pracy'} />

        {/*
        // @ts-ignore */}
        <OffersList offers={offersData} />
      </Container>
    </>
  );
};
