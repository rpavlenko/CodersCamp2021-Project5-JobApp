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
import { useDispatch } from 'react-redux';
import {
  checkReducer,
  addToFavorite,
  removeFromFavorite,
} from './features/favorite/favorite';
import { useFetchOffersData } from './hooks/useFetchOffersData';

export default function App() {
  const app = firebase.initializeApp(firebaseConfig);
  const auth = useAuth();
  useFetchOffersData();
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header auth={auth} />
      <button onClick={() => dispatch(checkReducer())}>
        Click me to check reducer
      </button>
      <button onClick={() => dispatch(addToFavorite('New Object 2'))}>
        Click me to check addToFavorite value 'New Object 2' (check console)
      </button>

      <button onClick={() => dispatch(addToFavorite('New Object 3'))}>
        Click me to check addToFavorite value 'New Object 3'
      </button>

      <button onClick={() => dispatch(removeFromFavorite('New Object 3'))}>
        Click me to check removeFromFavorite value 'New Object 3'
      </button>

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/detail/:id" element={<OfferDetailPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id/apply" element={<FormPage />} />
        <Route path="/favourite" element={<FavouriteOffersPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
