import { PersonalDataInformation } from './ui/molecules/PersonalDataInformation/PersonalDataInfromation';
import { Routes, Route } from 'react-router-dom';
import { Header } from './ui/organisms/Header';
import { Footer } from './ui/organisms/Footer';
import { Container } from '@mui/material';
import './index.css';
import { OfferDetailPage } from './ui/Pages/OfferDetailPage';
import { FormSection } from './ui/organisms/FormSection/FormSection';
import { HeaderFormPage } from './ui/atoms/HeaderFormPage/HeaderFormPage';
import { MainPage } from './ui/Pages/MainPage';
import { AddCV } from './ui/molecules/AddCV/AddCV';
import { BackIconButton } from './ui/atoms/Button/BackIconButton';
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/detail/:id" element={<OfferDetailPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
      {/*//TO DO*/}
      {/*<Container maxWidth='lg'>*/}
      {/*  <BackIconButton/>*/}
      {/*  <HeaderFormPage />*/}
      {/*  <FormSection />*/}
      {/*  <AddCV />*/}
      {/*  <PersonalDataInformation />*/}
      {/*</Container>*/}
      <Footer />
    </div>
  );
}
