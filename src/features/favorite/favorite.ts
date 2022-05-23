import { createSlice } from '@reduxjs/toolkit';

export interface favoriteState {
  favoriteList: string[];
}

const initialState: favoriteState = {
  favoriteList: JSON.parse(localStorage.getItem('favourites') as string) || [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favoriteList.push(action.payload);
      localStorage.setItem('favourites', JSON.stringify([...state.favoriteList, action.payload]));
    },
    removeFromFavorite: (state, action) => {
      const result = state.favoriteList.filter(
        (id) => id !== action.payload,
      );
      localStorage.setItem('favourites', JSON.stringify(result));
      state.favoriteList = result
    },
    checkReducer: (state) => {
      state;
    },
  },
});

export const { addToFavorite, removeFromFavorite, checkReducer } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
