import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

export interface favoriteState {
  favoriteList: {}[];
}

const initialState: favoriteState = {
  favoriteList: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favoriteList.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (favorite) => favorite !== action.payload,
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
