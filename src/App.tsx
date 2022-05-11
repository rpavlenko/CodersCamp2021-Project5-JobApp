import { useState } from 'react';
import { offersData } from './api/api';
import { FilterButton } from './ui/atoms/Button/FilterButton';
import { PersonalDataInformation } from './ui/molecules/PersonalDataInformation/PersonalDataInfromation';
import { OffersList } from './ui/organisms/OffersList';
import { Routes, Route } from 'react-router-dom';
import { Header } from './ui/organisms/Header';
import { FilterPage } from './ui/Pages/FilterPage';
import { Container, Modal } from '@mui/material';
import { BottomApplyFofAnOffer } from './ui/molecules/BottomApplyFofAnOffer/BottomApplyFofAnOffer';
import { SearchInput } from './ui/atoms/Search/Search';
import { DetailHeader } from './ui/organisms/DetailHeader';
import { BaseButton } from './ui/atoms/Button/BaseButton';
import './index.css';

export default function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>

      <Container maxWidth="lg">
        <OffersList offers={offersData} />
        <DetailHeader />
        <FilterButton onClick={handleOpen} />
        <PersonalDataInformation />
        <BottomApplyFofAnOffer />
        <SearchInput />
      </Container>
      <Modal open={open} sx={{ overflow: 'scroll' }}>
        <FilterPage onClose={handleClose} />
      </Modal>
    </div>
  );
}
