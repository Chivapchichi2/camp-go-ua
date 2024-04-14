import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/campersSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filter: filterReducer,
  },
});
