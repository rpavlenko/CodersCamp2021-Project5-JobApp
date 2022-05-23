import { OfferDescription } from './Company/OfferDescription';
import { Paper } from '@mui/material';
import { CompanyLogo } from '../atoms/CompanyLogo/CompanyLogo';
import { addToFavorite, removeFromFavorite } from '../../features/favorite/favorite';
import { useDispatch, useSelector } from 'react-redux';
import { IOfferData } from '../../api/models';
import { useState } from 'react';
import { RootState } from '../../app/store';

interface IListItem {
  jobType: string;
  jobTitle: string;
  companyTitle: string;
  buttonTitle: string;
  languageTitle: string;
  logo: string;
  onClick: () => void;
}

export const ListItem = ({
  jobType = 'Zdalna',
  jobTitle,
  companyTitle,
  buttonTitle,
  languageTitle,
  logo,
  onClick,
}: IListItem) => {
  return (
    <Paper
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px',
        marginBottom: '2px',
        ':hover': {
          cursor: 'pointer',
          transition: 'all 0.5s',
          boxShadow: '0px 2px 2px #ff5722',
        },
      }}
      component={'a'}
  offer: IOfferData;
  onClick: () => void,
}

export const ListItem = ({ onClick, offer }: IListItem) => {
  const {
    jobType = 'Zdalna',
    jobTitle,
    companyTitle,
    salary,
    languageTitle,
    logo,
  } = offer;
  const dispatch = useDispatch();
  const favouriteOffers = useSelector((state: RootState) => {
    return state.favorite.favoriteList;
  });
  const existsInFavourites = favouriteOffers.find((id: string) => id === offer.id.toString());
  const [heartClicked, setHeartClicked] = useState(!!existsInFavourites);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setHeartClicked((prevValue) => !prevValue);
    onFavouriteClick();
  };

  const onFavouriteClick = () => {
    if (heartClicked) {
      dispatch(removeFromFavorite(offer.id));
    } else {
      dispatch(addToFavorite(offer.id));
    }
  };
  return (
    <Paper onClick={onClick}
           sx={{
             display: 'flex',
             flexDirection: 'row',
             alignItems: 'center',
             padding: '10px',
             marginBottom: '2px',
             ':hover': {
               cursor: 'pointer',
               transition: 'all 0.5s',
               boxShadow: '0px 2px 2px #ff5722',
             },
           }}
           component={'a'}
    >
      <CompanyLogo
        className={'className'}
        src={`${logo}`}
        alt='company name alt'
        width={60}
        height={34}
        style={{ height: '34px', objectFit: 'contain', minWidth: '60px' }}
      />
      <OfferDescription
        jobTitle={jobTitle}
        companyTitle={companyTitle}
        jobType={jobType}
        buttonTitle={salary}
        languageTitle={languageTitle}
        onFavouriteClick={handleClick}
        heartClicked={heartClicked}
      />
    </Paper>
  );
};
