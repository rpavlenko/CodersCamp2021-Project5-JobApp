import { useEffect, useState } from 'react';
import { apiURL } from '../api/serverURL';

export const useFetchOfferData = (id: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getOfferData();
  }, []);

  const getOfferData = async () => {
    const response = await fetch(`${apiURL.offers}/${id}`);
    const data = await response.json();
    setData(data);
  };

  return data;
};
