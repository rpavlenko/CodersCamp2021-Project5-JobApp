import { useState } from 'react';
import { offersData } from './api/api';
import { FilterButton } from './ui/atoms/Button/FilterButton';
import { PersonalDataInformation } from './ui/molecules/PersonalDataInformation/PersonalDataInfromation';
import { OffersList } from './ui/organisms/OffersList';
import { Routes, Route } from 'react-router-dom';
import { Header } from './ui/organisms/Header';
import { FilterPage } from './ui/Pages/FilterPage';
import { Container, Modal } from '@mui/material';
import { SearchInput } from './ui/atoms/Search/Search';
import './index.css';
import { OfferDetailPage } from './ui/Pages/OfferDetailPage';
import { FormSection } from './ui/organisms/FormSection/FormSection';
import { HeaderFormPage } from './ui/atoms/HeaderFormPage/HeaderFormPage';

export default function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/detail/:id" element={<OfferDetailPage/>} />
      </Routes>
      <Container maxWidth="lg">
        <SearchInput />
        <FilterButton onClick={handleOpen} />
        <OffersList offers={offersData} />
        <HeaderFormPage/>
        <FormSection />
        <PersonalDataInformation />
      </Container>
      <Modal open={open} sx={{ overflow: 'scroll' }}>
        <FilterPage onClose={handleClose} />
      </Modal>
    </div>
  );
}
