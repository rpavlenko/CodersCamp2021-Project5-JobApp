import { ListItem } from '../molecules/ListItem';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IOffersList {
  offers: {
    id: number;
    jobType: string;
    jobTitle: string;
    companyTitle: string;
    buttonTitle: string;
    languageTitle: string;
    logo: string;
  }[];
}

export const OffersList = (props: IOffersList) => {
  const { offers } = props;
  const navigate = useNavigate();

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
