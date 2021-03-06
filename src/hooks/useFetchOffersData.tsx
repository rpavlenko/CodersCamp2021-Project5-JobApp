import { useEffect, useState } from 'react';
import { apiURL } from '../api/serverURL';
import { useDispatch } from 'react-redux';
import { fetchOffers } from '../features/offersList/offersList';

export const getOffersData = async (dispatch: any) => {
  const response = await fetch(`${apiURL.offers}`);
  const data = await response.json();
  dispatch(fetchOffers(data));
  return data;
};
export const useFetchOffersData = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await getOffersData(dispatch);
      if (data) {
        setIsLoading(false);
      }
    })();
  }, [dispatch]);

  return isLoading;
};
