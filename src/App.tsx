import { BaseButton } from './ui/atoms/Button/BaseButton';
import { Container, Modal } from '@mui/material';
import { FilterButton } from './ui/atoms/Button/FilterButton';
import Header from './ui/organisms/Header';
import { OffersList } from './ui/organisms/OffersList';
import logo from './assets/companyLogo.jpg';
import './index.css';
import { FilterPage } from './ui/Pages/FilterPage';
import { useState } from 'react';

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
  // const handleClose = () => setOpenPopup(false);

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
        <FilterButton onClick={handleOpen} />
      </Container>
      <Modal open={open} sx={{overflow:'scroll'}}>
        <FilterPage data={data}  />
      </Modal>
    </div>
  );
}
