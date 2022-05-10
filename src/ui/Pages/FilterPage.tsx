import { FilterSection } from '../organisms/FilterSection';
import { ShowScoreButton } from '../atoms/Button/ShowScoreButton';
import { Box, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { FilterTitle } from '../molecules/FilterTitle';

const data = [{
  id: 1,
  category: 'Technologia',
  options: [
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
    },
    {
      id: 8,
      name: 'c++',
    }],
},
  {
    id: 2,
    category: 'Lokalizacja',
    options: [
      {
        id: 1,
        name: 'Warszawa',
      }, {
        id: 2,
        name: 'Lublin',
      },
      {
        id: 3,
        name: 'Białystok',
      },
      {
        id: 4,
        name: 'Wrocław',
      },
      {
        id: 5,
        name: 'Łódź',
      },
      {
        id: 6,
        name: 'Zakopane',
      },
      {
        id: 7,
        name: 'Gdańsk',
      },
      {
        id: 8,
        name: 'Kraków',
      }],
  }, {
    id: 3,
    category: 'Lokalizacja',
    options: [
      {
        id: 1,
        name: 'Warszawa',
      }, {
        id: 2,
        name: 'Lublin',
      },
      {
        id: 3,
        name: 'Białystok',
      },
      {
        id: 4,
        name: 'Wrocław',
      },
      {
        id: 5,
        name: 'Łódź',
      },
      {
        id: 6,
        name: 'Zakopane',
      },
      {
        id: 7,
        name: 'Gdańsk',
      },
      {
        id: 8,
        name: 'Kraków',
      }],
  }, {
    id: 4,
    category: 'Lokalizacja',
    options: [
      {
        id: 1,
        name: 'Warszawa',
      }, {
        id: 2,
        name: 'Lublin',
      },
      {
        id: 3,
        name: 'Białystok',
      },
      {
        id: 4,
        name: 'Wrocław',
      },
      {
        id: 5,
        name: 'Łódź',
      },
      {
        id: 6,
        name: 'Zakopane',
      },
      {
        id: 7,
        name: 'Gdańsk',
      },
      {
        id: 8,
        name: 'Kraków',
      }],
  }, {
    id: 5,
    category: 'Lokalizacja',
    options: [
      {
        id: 1,
        name: 'Warszawa',
      }, {
        id: 2,
        name: 'Lublin',
      },
      {
        id: 3,
        name: 'Białystok',
      },
      {
        id: 4,
        name: 'Wrocław',
      },
      {
        id: 5,
        name: 'Łódź',
      },
      {
        id: 6,
        name: 'Zakopane',
      },
      {
        id: 7,
        name: 'Gdańsk',
      },
      {
        id: 8,
        name: 'Kraków',
      }],
  }];
interface IProps {
 onClose: () => void
}

export const FilterPage = (props: IProps) => {
  const { onClose } = props;
  return (
    <Box sx={{ margin: '0px', backgroundColor: 'white', height: '100vh' }}>
      <AppBar position='fixed' >
        <FilterTitle onClose={onClose}/>
      </AppBar>
      <Box sx={{ paddingTop: '72px', paddingBottom: '82px' }}>
        {data.map((item) => {
          return <FilterSection item={item} />;
        })}
      </Box>
      <AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
        <Container maxWidth='lg'>
          <ShowScoreButton />
        </Container>
      </AppBar>
    </Box>
  );
};