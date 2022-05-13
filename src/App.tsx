import { PersonalDataInformation } from './ui/molecules/PersonalDataInformation/PersonalDataInfromation';
import { Routes, Route } from 'react-router-dom';
import { Header } from './ui/organisms/Header';
import { FilterPage } from './ui/Pages/FilterPage';
import { Container} from '@mui/material';
import './index.css';
import { OfferDetailPage } from './ui/Pages/OfferDetailPage';
import { FormSection } from './ui/organisms/FormSection/FormSection';
import { HeaderFormPage } from './ui/atoms/HeaderFormPage/HeaderFormPage';
import { MainPage } from './ui/Pages/MainPage';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/detail/:id" element={<OfferDetailPage/>} />
        <Route path="/" element={<MainPage />} />
      </Routes>
      {/*//TO DO*/}
      {/*<Container maxWidth="lg">*/}
      {/*  <HeaderFormPage/>*/}
      {/*  <FormSection />*/}
      {/*  <PersonalDataInformation />*/}
      {/*</Container>*/}
    </div>
  );
}
