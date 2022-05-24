import { HeaderFormPage } from '../atoms/HeaderFormPage/HeaderFormPage';
import { FormSection } from '../organisms/FormSection/FormSection';
import { AddCV } from '../molecules/AddCV/AddCV';
import { PersonalDataInformation } from '../molecules/PersonalDataInformation/PersonalDataInfromation';
import { Box, Container } from '@mui/material';
import { ClosingButton } from '../atoms/Button/ClosingButton';
import { useNavigate } from 'react-router-dom';
import { ApplyButton } from '../atoms/Button/ApplyButton';
import AppBar from '@mui/material/AppBar';
import { useState } from 'react';
import { ApplicationSend } from '../molecules/ApplicationSend/ApplicationSend';

export const FormPage = () => {
  const [send, setSend] = useState('false');
  let navigate = useNavigate();

  const handleCloseClick = () => {
    navigate('/');
  };

  const handleClick = () => {
    setSend('true');
    setTimeout(() => navigate('/'),
      3000);
  };
  return (
    <>
      {send === 'true' ? <ApplicationSend /> :
        <Box>
          <Container maxWidth='lg'>
            <Box display='flex' justifyContent='flex-end' sx={{ marginTop: '20px' }}>
              <ClosingButton onClose={handleCloseClick} />
            </Box>
            <HeaderFormPage props={'Aplikuj na ofertę pracy'} />
            <FormSection />
            <AddCV />
            <PersonalDataInformation />
          </Container>
          <AppBar position='sticky' sx={{ top: 'auto', bottom: 0 }}>
            <ApplyButton onClick={handleClick}
                         sx={{ width: '100%' }} />
          </AppBar>
        </Box>}
    </>
  );
};