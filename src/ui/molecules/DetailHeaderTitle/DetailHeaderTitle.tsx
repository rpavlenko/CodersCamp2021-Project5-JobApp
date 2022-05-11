import { CompanyLogo } from '../../atoms/CompanyLogo/CompanyLogo';
import { Box, Typography } from '@mui/material';

interface IOfferData {
  offerData: {
    logo: string;
    jobTitle: string;
  };
}

export const DetailHeaderTitle = ({ offerData }: IOfferData) => {
  const { logo, jobTitle } = offerData;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        minWidth: '200px',
        marginBottom: '20px',
      }}
    >
      <CompanyLogo
        className={'className'}
        src={`${logo}`}
        alt="company name alt"
        style={{ border: '1px solid #C8C8C8', width: '80px', height: '80px' }}
      />
      <span></span>
      <Typography
        variant="h2"
        sx={{ fontSize: '22px', fontWeight: 'bold', ml: '10px' }}
      >
        {jobTitle}
      </Typography>
    </Box>
  );
};
