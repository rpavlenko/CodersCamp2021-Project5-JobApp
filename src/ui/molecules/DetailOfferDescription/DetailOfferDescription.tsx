import Box from '@mui/material/Box';
import { SubheaderOfDescription } from '../../atoms/SubheaderOfDescription/SubheaderOfDescription';
import { ReadMore } from '../ReadMore';
interface IOfferDescription {
  offerDescription: string;
}

export const DetailOfferDescription = ({
  offerDescription,
}: IOfferDescription) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <SubheaderOfDescription> Opis stanowiska </SubheaderOfDescription>
      <ReadMore text={offerDescription} sx={{ marginTop: '10px' }} />
    </Box>
  );
};
