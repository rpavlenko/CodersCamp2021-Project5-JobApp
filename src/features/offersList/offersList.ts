import { createSlice } from '@reduxjs/toolkit';
import { IOfferData } from '../../api/models';

export interface offerListState {
  list: IOfferData[];
}

const initialState: offerListState = {
  list: [],
};

export const offersListSlice = createSlice({
  name: 'offersList',
  initialState,
  reducers: {
    fetchOffers: (state, action) => {
      state.list = action.payload
    },
  },
});

export const { fetchOffers } = offersListSlice.actions;

export default offersListSlice.reducer;
