import { useEffect } from 'react';
import { apiURL } from '../api/serverURL';
import { useDispatch } from 'react-redux';
import { fetchOffers } from '../features/offersList/offersList';

export const useFetchOffersData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getOffersData();
  }, []);

  const getOffersData = async () => {
    const response = await fetch(`${apiURL.offers}`);
    const data = await response.json();
    dispatch(fetchOffers(data));
  };
  return true;
};
