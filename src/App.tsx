import { BaseButton } from './ui/atoms/Button/BaseButton';
import { Container } from '@mui/material';
import './index.css';
import { FilterButton } from './ui/atoms/Button/FilterButton';
import Header from './ui/organisms/Header';
import './index.css';
import { FilterSection } from './ui/organisms/FilterSection';

export default function App() {
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
    }];


  return (
    <div className='App'>
      <Header />
      <Container maxWidth='sm'>
        <header className='App-header'>
          <p>Hello Vite + React + MaterialUI!</p>

        </header>
      </Container>
      <BaseButton variant={'outlined'} color={'primary'} size={'large'}>
        Filtry
      </BaseButton>
      <FilterButton />
      {data.map((item) => {
        return <FilterSection item={item} />;
      })}
    </div>
  );
}
