import { Routes, Route } from 'react-router-dom';
import * as firebase from 'firebase/app';
import firebaseConfig from './base';
import { useAuth } from './hooks/useAuth';
import { Header } from './ui/organisms/Header';
import { Footer } from './ui/organisms/Footer';
import { OfferDetailPage } from './ui/Pages/OfferDetailPage';
import { MainPage } from './ui/Pages/MainPage';
import { FormPage } from './ui/Pages/FormPage';
import { NotFound } from './ui/Pages/NotFound';
import './index.css';
import { FavouriteOffersPage } from './ui/Pages/FavouriteOffersPage';
import { useFetchOffersData } from './hooks/useFetchOffersData';

export default function App() {
  const app = firebase.initializeApp(firebaseConfig);
  const auth = useAuth();
  const fetchedData = useFetchOffersData();

  return (
    <div className="App">
      <Header auth={auth} />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainPage fetchedData={fetchedData} />} />
        <Route path="/detail/:id" element={<OfferDetailPage />} />
        <Route path="/detail/:id/apply" element={<FormPage />} />
        <Route path="/favourite" element={<FavouriteOffersPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
