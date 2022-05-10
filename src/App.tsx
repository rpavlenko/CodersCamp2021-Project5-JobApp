import { BaseButton } from './ui/atoms/Button/BaseButton';
import { Container, Modal } from '@mui/material';
import { FilterButton } from './ui/atoms/Button/FilterButton';
import Header from './ui/organisms/Header';
import { OffersList } from './ui/organisms/OffersList';
import logo from './assets/companyLogo.jpg';
import './index.css';
import { FilterPage } from './ui/Pages/FilterPage';
import { useState } from 'react';
import { DetailOfferDescription } from './ui/atoms/DetailOfferDescription/DetailOfferDescription';

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
      logo: 'https://static.nofluffjobs.com/companies/logos/original/softserve_20220328_140653_20220328_165558.webp',
    },
    {
      id: 3,
      jobType: 'Łódź',
      jobTitle: 'Junior Frontend Developer',
      companyTitle: 'Netguru',
      buttonTitle: '7000-10000 zł',
      languageTitle: 'python',
      logo: 'https://nofluffjobs.com/upload/listing/Netguru_20161004_141842.png',
    },
    {
      id: 4,
      jobType: 'Wrocław',
      jobTitle: 'Junior Web Developer',
      companyTitle: 'LiveChat',
      buttonTitle: '7000-10000 zł',
      languageTitle: 'node',
      logo: 'https://static.nofluffjobs.com/companies/logos/original/logo_rgb_orange_20220420_142843.png',
    },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='App'>
      <Header />
      <Container maxWidth='lg'>
        <header className='App-header'>
          <p>Hello Vite + React + MaterialUI!</p>
        </header>
        <OffersList offers={offersData} />
        <BaseButton variant={'outlined'} color={'primary'} size={'large'}>
          Filtry
        </BaseButton>
        <DetailOfferDescription/>
        <FilterButton onClick={handleOpen} />
      </Container>
      <Modal open={open} sx={{overflow:'scroll'}}>
        <FilterPage onClose={handleClose}/>
      </Modal>
    </div>
  );
}
