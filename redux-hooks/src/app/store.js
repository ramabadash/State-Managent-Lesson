import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from '../reducers/blogsReducer';
import advicesSlice from '../reducers/adviceSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    advices: advicesSlice,
  },
});

export default store;
