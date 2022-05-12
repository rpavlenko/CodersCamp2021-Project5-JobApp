import { CoreRequirements } from '../DetailOfferDescription/CoreRequirements';
import { DailyTasks } from '../DetailOfferDescription/DailyTasks';
import { DetailOfferDescription } from '../DetailOfferDescription/DetailOfferDescription';
import { Box, Divider, Typography } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CategoryIcon from '@mui/icons-material/Category';
import StarsIcon from '@mui/icons-material/Stars';
import LanguageIcon from '@mui/icons-material/Language';

interface IDetailOfferTitleDescription {
  offerData: {
    companyTitle: string;
    jobType: string;
    salary: string;
    category: string;
    level: string;
    languages: string[];
    offerDescription: string;
    dailyTasks: {
      id: number;
      exercise: string;
    }[];
    coreRequirements: {
      id: number;
      name: string;
    }[];
    additionalRequirements: {
      id: number;
      name: string;
    }[];
    date: string;
  };
}

export const DetailOfferHeaderDescription = ({
  offerData,
}: IDetailOfferTitleDescription) => {
  const {
    companyTitle,
    jobType,
    salary,
    category,
    level,
    languages,
    offerDescription,
    dailyTasks,
    coreRequirements,
    additionalRequirements,
    date,
  } = offerData;

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          borderBottom: '1px solid #C8C8C8',
          paddingBottom: '5px',
          paddingTop: '5px',
          marginTop: '5px',
        }}
      >
        <BusinessIcon fontSize="small" sx={{ marginRight: '10px' }} />
        <Typography>{companyTitle}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          borderBottom: '1px solid #C8C8C8',
          paddingBottom: '5px',
          paddingTop: '5px',
        }}
      >
        <LocationOnIcon fontSize="small" sx={{ marginRight: '10px' }} />
        <Typography>{jobType}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          borderBottom: '1px solid #C8C8C8',
          paddingBottom: '5px',
          paddingTop: '5px',
        }}
      >
        <CalendarTodayIcon fontSize="small" sx={{ marginRight: '10px' }} />
        <Typography>Data publikacji: {date}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          borderBottom: '1px solid #C8C8C8',
          paddingBottom: '5px',
          paddingTop: '5px',
        }}
      >
        <CategoryIcon fontSize="small" sx={{ marginRight: '10px' }} />
        <Typography>{category}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          borderBottom: '1px solid #C8C8C8',
          paddingBottom: '5px',
          paddingTop: '5px',
        }}
      >
        <StarsIcon fontSize="small" sx={{ marginRight: '10px' }} />
        <Typography>{level}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          borderBottom: '1px solid #C8C8C8',
          paddingBottom: '5px',
          paddingTop: '5px',
        }}
      >
        <LanguageIcon fontSize="small" sx={{ marginRight: '10px' }} />
        <Typography>{languages.join(', ')}</Typography>
      </Box>
      <CoreRequirements data={coreRequirements} />
      <Divider />
      <DetailOfferDescription offerDescription={offerDescription} />
      <Divider />
      <DailyTasks dailyTasks={dailyTasks} />
    </div>
  );
};
