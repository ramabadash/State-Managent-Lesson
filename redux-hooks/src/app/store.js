import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from '../reducers/blogsSlice';
import advicesSlice from '../reducers/advicesSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    advices: advicesSlice,
  },
});

export default store;
