import { Routes, Route } from 'react-router-dom';
import { Header } from './ui/organisms/Header';
import { Footer } from './ui/organisms/Footer';
import { Container } from '@mui/material';
import './index.css';
import { OfferDetailPage } from './ui/Pages/OfferDetailPage';
import { MainPage } from './ui/Pages/MainPage';
import { FormPage } from './ui/Pages/FormPage';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/detail/:id" element={<OfferDetailPage />} />
        <Route path="/" element={<MainPage />} />
        {/*//TO DO*/}
        {/*<Container maxWidth='lg'>*/}
        {/*  <BackIconButton/>*/}
        {/*  <HeaderFormPage />*/}
        {/*  <FormSection />*/}
        {/*  <AddCV />*/}
        {/*  <PersonalDataInformation />*/}
        {/*</Container>*/}
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/detail/:id" element={<OfferDetailPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id/apply" element={<FormPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
