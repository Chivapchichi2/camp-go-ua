import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';
import {
  fulfilledReducer,
  pendingReducer,
  rejectedReducer,
} from '../generalReducers';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    toggleFavorite: (state, { payload }) => {
      const favorites = state.favorites.slice();
      const favoriteIndex = favorites.indexOf(payload);

      if (favoriteIndex > -1) {
        favorites.splice(favoriteIndex, 1);
      } else {
        favorites.push(payload);
      }

      state.favorites = favorites;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addMatcher(action => action.type.endsWith('/pending'), pendingReducer)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        fulfilledReducer
      )
      .addMatcher(action => action.type.endsWith('/rejected'), rejectedReducer);
  },
});

export const { toggleFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
