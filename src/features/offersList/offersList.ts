import { createSlice } from '@reduxjs/toolkit';
import { offersData } from '../../api/api';
import { IOffers } from '../../api/models';

export interface offerListState {
  list: IOffers[];
}

const initialState: offerListState = {
  list: offersData,
};

export const offersListSlice = createSlice({
  name: 'offersList',
  initialState,
  reducers: {
    checkReducer: (state) => {
      console.log('Check reducer');
    },
  },
});

export const { checkReducer } = offersListSlice.actions;

export default offersListSlice.reducer;
