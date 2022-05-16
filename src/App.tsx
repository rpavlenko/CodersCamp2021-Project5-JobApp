import { Routes, Route } from 'react-router-dom';
import * as firebase from 'firebase/app';
import firebaseConfig from './base';
import { useAuth } from './hooks/useAuth';
import { Header } from './ui/organisms/Header';
import { Footer } from './ui/organisms/Footer';
import { Container } from '@mui/material';
import { OfferDetailPage } from './ui/Pages/OfferDetailPage';
import { MainPage } from './ui/Pages/MainPage';
import { FormPage } from './ui/Pages/FormPage';
import { NotFound } from './ui/Pages/NotFound';
import './index.css';

export default function App() {
  const app = firebase.initializeApp(firebaseConfig);
  const auth = useAuth();

  return (
    <div className="App">
      <Header auth={auth} />
      <Routes>
        <Route path="*" element={<NotFound />} />
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
