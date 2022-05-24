import { useEffect } from 'react';
import { apiURL } from '../api/serverURL';
import { useDispatch } from 'react-redux';
import { fetchOffers } from '../features/offersList/offersList';

export const getOffersData = async (dispatch: any) => {
  const response = await fetch(`${apiURL.offers}`);
  const data = await response.json();
  dispatch(fetchOffers(data));
};
export const useFetchOffersData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getOffersData(dispatch);
  }, [dispatch]);
  return true;
};
