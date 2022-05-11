import Box from '@mui/material/Box';
import { SubheaderOfDescription } from '../../atoms/SubheaderOfDescription/SubheaderOfDescription';
import { ReadMore } from '../ReadMore';

const offerDescription = 'We are Unikie- Finnish technology powerhouse.\n' +
  '\n' +
  'We develop technology for secure realtime processes and offer consulting for related demand. Our services meet at the heart of three global macro trends - IoE, 5G and AI.\n' +
  'And yes, we have our own products and R&D.\n' +
  '\n' +
  'We are looking for Data Engineers with a strong background in engineering to our fast growing #UnikieAllStars team.\n' +
  '\n' +
  'The main responsibilities are:\n' +
  '\n' +
  '· Perform Data Engineering tasks required to analyse data from CDIT+D clusters. This includes setting-up data pipelines, storing data in our customer premises and transforming collected data to data structures optimized for efficient browsing\n' +
  '· Execute testing, perform troubleshooting of delivered data pipelines';

export const DetailOfferDescription = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <SubheaderOfDescription> Opis stanowiska </SubheaderOfDescription>
      <ReadMore text={offerDescription} sx={{ marginTop: '20px' }} />
    </Box>
  );
};
