import { useContext } from 'react';
import { BaseButton } from './ui/atoms/Button/BaseButton';
import { Container } from '@mui/material';
import { FilterButton } from './ui/atoms/Button/FilterButton';
import { FiltersHeader } from './ui/atoms/FiltersHeader/FiltersHeader';
import Header from './ui/organisms/Header';
import { OffersList } from './ui/organisms/OffersList';
import logo from './assets/companyLogo.jpg';
import './index.css';

export default function App() {
  const offersData = [
    {
      id: 1,
      jobType: 'Zdalna',
      jobTitle: 'Junior Developer',
      companyTitle: 'Devire',
      buttonTitle: '10000-15000 zł',
      languageTitle: 'javascript',
      logo: logo,
    },
    {
      id: 2,
      jobType: 'Warszawa',
      jobTitle: 'Junior Backend Developer',
      companyTitle: 'SoftServe',
      buttonTitle: '5000-10000 zł',
      languageTitle: 'java',
      logo: logo,
    },
    {
      id: 3,
      jobType: 'Łódź',
      jobTitle: 'Junior Frontend Developer',
      companyTitle: 'Netguru',
      buttonTitle: '7000-10000 zł',
      languageTitle: 'python',
      logo: logo,
    },
    {
      id: 4,
      jobType: 'Wrocław',
      jobTitle: 'Junior Web Developer',
      companyTitle: 'LiveChat',
      buttonTitle: '7000-10000 zł',
      languageTitle: 'node',
      logo: logo,
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
