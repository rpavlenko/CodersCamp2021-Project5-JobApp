import { OfferDescription } from './Company/OfferDescription';
import { Paper } from '@mui/material';

import { CompanyLogo } from '../atoms/CompanyLogo/CompanyLogo';
// import FavoriteIcon from '@mui/icons-material/Favorite';

interface IListItem {
  jobType: string;
  jobTitle: string;
  companyTitle: string;
  buttonTitle: string;
  languageTitle: string;
  logo: string;
}

export const ListItem = ({
  jobType = 'Zdalna',
  jobTitle,
  companyTitle,
  buttonTitle,
  languageTitle,
  logo,
}: IListItem) => {
  return (
    <Paper
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
        alt="company name alt"
        width={60}
        height={34}
        style={{ height: '34px', objectFit: 'contain' }}
      />
      <OfferDescription
        jobTitle={jobTitle}
        companyTitle={companyTitle}
        jobType={jobType}
        buttonTitle={buttonTitle}
        languageTitle={languageTitle}
      />
    </Paper>
  );
};
