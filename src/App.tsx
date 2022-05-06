import { useContext } from 'react';
import { BaseButton } from './ui/atoms/Button/BaseButton';
import { Container } from '@mui/material';
import './index.css';
import { FilterButton } from './ui/atoms/Button/FilterButton';
import { FiltersHeader } from './ui/atoms/FiltersHeader/FiltersHeader';
import Header from './ui/organisms/Header';
import './index.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="sm">
        <header className="App-header">
          <p>Hello Vite + React + MaterialUI!</p>
          <BaseButton variant={'outlined'} color={'primary'} size={'large'}>
            Filtry
          </BaseButton>
          <FilterButton />
          <FiltersHeader name={'Kategoria'}/>
        </header>
      </Container>
    </div>
  );
}
