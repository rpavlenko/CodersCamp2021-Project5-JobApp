import { ListItem } from '../molecules/ListItem';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';


export const OffersList = () => {
  const navigate = useNavigate();
  const offers = useSelector((state: RootState) => state.offers.list);

  return (
    <Box sx={{ marginBottom: '30px' }}>
      {offers.map((offer) => {
          const { id, jobType, jobTitle, companyTitle, buttonTitle, languageTitle, logo } = offer;
          return (
            <ListItem
              key={id}
              jobType={jobType}
              jobTitle={jobTitle}
              companyTitle={companyTitle}
              buttonTitle={buttonTitle}
              languageTitle={languageTitle}
              logo={logo}
              onClick={() => navigate(`/detail/${offer.id}`)}
            />
          );
        },
      )}
    </Box>
  );
};
