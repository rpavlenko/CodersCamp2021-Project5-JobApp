import { Box, Typography } from '@mui/material';
import { CompanyTitle } from '../../atoms/CompanyTitle/CompanyTitle';
import { JobTitle } from '../../atoms/JobTitle/JobTitle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { SalaryButton } from '../../atoms/Button/SalaryButton';
import { LanguageButton } from '../../atoms/Button/LanguageButton';

interface IOfferDescription {
  jobTitle: string;
  companyTitle: string;
  jobType: string;
  buttonTitle: string;
  languageTitle: string;
}

export const OfferDescription = ({
  jobTitle,
  companyTitle,
  jobType,
  buttonTitle,
  languageTitle,
}: IOfferDescription) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        marginLeft: '10px',
        '@media (min-width: 680px)': {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '200px',
        }}
      >
        <JobTitle title={jobTitle} />
        <CompanyTitle title={companyTitle} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: '200px',
          minWidth: '150px',
          '@media (max-width: 850px)': {
            marginLeft: '0px',
          },
        }}
      >
        <SalaryButton variant={'outlined'} color={'primary'} size={'small'}>
          {buttonTitle}
        </SalaryButton>
        <LanguageButton variant={'outlined'} color={'primary'} size={'small'}>
          {languageTitle}
        </LanguageButton>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '@media (min-width: 680px)': {
            marginLeft: 'auto',
            width: '125px',
          },
        }}
      >
        <Typography mr={1}>{jobType}</Typography>
        <FavoriteBorderIcon
          sx={{
            cursor: 'pointer',
            '&:hover': {
              fill: '#000',
              transition: 'all 0.2s',
            },
          }}
          color="primary"
          fontSize="medium"
        />
        {/* <FavoriteIcon color="primary" /> */}
      </Box>
    </Box>
  );
};
