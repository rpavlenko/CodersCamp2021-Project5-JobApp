import { HeaderFormPage } from '../atoms/HeaderFormPage/HeaderFormPage';
import { FormSection } from '../organisms/FormSection/FormSection';
import { AddCV } from '../molecules/AddCV/AddCV';
import { PersonalDataInformation } from '../molecules/PersonalDataInformation/PersonalDataInfromation';
import { Box, Container } from '@mui/material';
import { ClosingButton } from '../atoms/Button/ClosingButton';
import { useNavigate } from 'react-router-dom';
import { ApplyButton } from '../atoms/Button/ApplyButton';
import AppBar from '@mui/material/AppBar';

export const FormPage = () => {
  let navigate = useNavigate();
  //TODO Dynamic ID
  const handleClick = () => {
    navigate('/detail/:id/');
  };
  return (
    <>
      <Container maxWidth='lg'>
        <Box display='flex' justifyContent='flex-end' sx={{ marginTop: '20px' }}>
          <ClosingButton onClose={handleClick} />
        </Box>
        <HeaderFormPage props={'Aplikuj na ofertę pracy'} />
        <FormSection />
        <AddCV />
        <PersonalDataInformation />
      </Container>
      <AppBar position='sticky' sx={{ top: 'auto', bottom: 0 }}>
        <ApplyButton onClick={handleClick}
                     sx={{ width: '100%' }}/>
      </AppBar>
    </>
  );
};