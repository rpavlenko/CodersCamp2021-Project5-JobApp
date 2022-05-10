import Box from '@mui/material/Box';
import { SubheaderOfDescription } from '../../atoms/SubheaderOfDescription/SubheaderOfDescription';
import { SingleFilterButton } from '../../atoms/Button/SingleFilterButton';

const data = [
  {
    id: 1,
    name: 'java',
  }, {
    id: 2,
    name: 'angular',
  },
  {
    id: 3,
    name: 'react',
  },
  {
    id: 4,
    name: 'php',
  },
  {
    id: 5,
    name: 'node',
  },
  {
    id: 6,
    name: 'c#',
  },
  {
    id: 7,
    name: 'c',
  }];

export const CoreRequirements = () => {
  return (
    <>
      <Box>
        <SubheaderOfDescription> Wymagania obowiązkowe </SubheaderOfDescription>
        {data.map((item) => <SingleFilterButton item={item} />)}
      </Box>
      <Box>
        <SubheaderOfDescription> Mile widziane </SubheaderOfDescription>
        {data.map((item) => <SingleFilterButton item={item} />)}
      </Box>
    </>
  );
};