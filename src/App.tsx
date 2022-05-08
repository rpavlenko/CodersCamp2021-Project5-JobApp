import { useContext } from 'react';
import { BaseButton } from './ui/atoms/Button/BaseButton';
import { Container } from '@mui/material';
import './index.css';
import { FilterButton } from './ui/atoms/Button/FilterButton';
import { FiltersHeader } from './ui/atoms/FiltersHeader/FiltersHeader';
import Header from './ui/organisms/Header';
import './index.css';
import { OffersList } from './ui/organisms/OffersList';

export default function App() {
  const offersData = [
    {
      id: 1,
      jobType: 'Zdalna',
      jobTitle: 'Junior Developer',
      companyTitle: 'Devire',
      buttonTitle: '10000-15000 zł',
      languageTitle: 'javascript',
      logo: './src/assets/companyLogo.jpg',
    },
    {
      id: 2,
      jobType: 'Warszawa',
      jobTitle: 'Junior Backend Developer',
      companyTitle: 'SoftServe',
      buttonTitle: '5000-10000 zł',
      languageTitle: 'java',
      logo: './src/assets/companyLogo.jpg',
    },
    {
      id: 3,
      jobType: 'Łódź',
      jobTitle: 'Junior Frontend Developer',
      companyTitle: 'Netguru',
      buttonTitle: '7000-10000 zł',
      languageTitle: 'python',
      logo: './src/assets/companyLogo.jpg',
    },
    {
      id: 4,
      jobType: 'Wrocław',
      jobTitle: 'Junior Web Developer',
      companyTitle: 'LiveChat',
      buttonTitle: '7000-10000 zł',
      languageTitle: 'node',
      logo: './src/assets/companyLogo.jpg',
    },
  ];

  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <header className="App-header">
          <p>Hello Vite + React + MaterialUI!</p>
          <BaseButton variant={'outlined'} color={'primary'} size={'large'}>
            Filtry
          </BaseButton>
          <FilterButton />
          <FiltersHeader name={'Kategoria'} />
        </header>
        <OffersList offers={offersData} />
      </Container>
    </div>
  );
}
