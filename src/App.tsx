import { useState } from 'react';
import { offersData } from './api/api';
import { BaseButton } from './ui/atoms/Button/BaseButton';
import { FilterButton } from './ui/atoms/Button/FilterButton';
import { DailyTasks } from './ui/molecules/DetailOfferDescription/DailyTasks';
import { DetailOfferDescription } from './ui/molecules/DetailOfferDescription/DetailOfferDescription';
import { CoreRequirements } from './ui/molecules/DetailOfferDescription/CoreRequirements';
import { PersonalDataInformation } from './ui/molecules/PersonalDataInformation/PersonalDataInfromation';
import { OffersList } from './ui/organisms/OffersList';
import { Header } from './ui/organisms/Header';
import { FilterPage } from './ui/Pages/FilterPage';
import { Container, Modal } from '@mui/material';
import './index.css';
import { BottomApplyFofAnOffer } from './ui/molecules/BottomApplyFofAnOffer/BottomApplyFofAnOffer';
import { FormSection } from './ui/organisms/FormSection/FormSection';

export default function App() {
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
        <CoreRequirements />
        <DetailOfferDescription />
        <DailyTasks />
        <FilterButton onClick={handleOpen} />
        <PersonalDataInformation />
        <BottomApplyFofAnOffer />
        <FormSection />
      </Container>
      <Modal open={open} sx={{ overflow: 'scroll' }}>
        <FilterPage onClose={handleClose} />
      </Modal>
    </div>
  );
}
