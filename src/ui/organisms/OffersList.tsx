import { ListItem } from '../molecules/ListItem';
import { Box } from '@mui/material';

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

export const OffersList = ({ offers }: IOffersList) => {
  return (
    <Box sx={{ marginBottom: '30px' }}>
      {offers.map(
        ({
          id,
          jobType,
          jobTitle,
          companyTitle,
          buttonTitle,
          languageTitle,
          logo,
        }) => (
          <ListItem
            key={id}
            jobType={jobType}
            jobTitle={jobTitle}
            companyTitle={companyTitle}
            buttonTitle={buttonTitle}
            languageTitle={languageTitle}
            logo={logo}
          />
        ),
      )}
    </Box>
  );
};
