import Box from '@mui/material/Box';
import { ReadMore } from '../ReadMore';


const dataInformation = ' Owocowe czwartki informs that submitting an application results in sharing with the Advertiser all of your\n' +
  '        personal data, which is contained in the application form (including image) and other data and information which\n' +
  '        was published by you on your User Profile. The Controller of your personal data is https://www.owocoweczwartki.com/, with registered office at 51 Federal Street, Los Angeles. Your data is processed for the purpose of the current recruitment process. Providing data is voluntary but necessary for this purpose. Processing your data is lawful because it is necessary in order to take steps at the request of the data subject prior to entering into a contract (article 6 point 1b of Regulation EU 2016/679 - GDPR). Your personal data will be deleted when the current recruitment process is finished, unless a separate consent is provided below. You have the right to access, correct, modify, update, rectify, request for the transfer or deletion of data, withdrawal of consent or objection.';

export const PersonalDataInformation = () => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <ReadMore text={dataInformation}
                sx={{ color: '#adb5bd', marginTop: '30px', fontSize: '12px' }} />
    </Box>
  );
};
