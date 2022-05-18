import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favorite/favorite';
import offersListReducer from '../features/offersList/offersList';

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    offers: offersListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
