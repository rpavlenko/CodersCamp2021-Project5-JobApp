import { createSlice } from '@reduxjs/toolkit';
import { IOfferData } from '../../api/models';

export interface favoriteState {
  favoriteList: IOfferData[];
}

const initialState: favoriteState = {
  favoriteList: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favoriteList.push({...action.payload, isFavourite: true});
    },
    removeFromFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (favorite) => favorite.id !== action.payload.id,
      );
    },
    checkReducer: (state) => {
      console.log('Check reducer');
      state;
    },
  },
});

export const { addToFavorite, removeFromFavorite, checkReducer } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
