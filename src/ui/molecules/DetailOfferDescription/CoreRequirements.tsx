import Box from '@mui/material/Box';
import { SubheaderOfDescription } from '../../atoms/SubheaderOfDescription/SubheaderOfDescription';
import { SingleFilterButton } from '../../atoms/Button/SingleFilterButton';

interface ICoreRequirements {
  data: {
    id: number;
    name: string;
  }[];
}

export const CoreRequirements = ({ data }: ICoreRequirements) => {
  return (
    <>
      <Box>
        <SubheaderOfDescription> Wymagania obowiązkowe </SubheaderOfDescription>
        {data.map((item) => (
          <SingleFilterButton key={item.id} item={item} />
        ))}
      </Box>
      <Box>
        <SubheaderOfDescription> Mile widziane </SubheaderOfDescription>
        {data.map((item) => (
          <SingleFilterButton key={item.id} item={item} />
        ))}
      </Box>
    </>
  );
};
