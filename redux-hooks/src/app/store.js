import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from '../reducers/blogsReducer';
import advicesSlice from '../reducers/adviceSlice';
import thunkMiddleWare from 'redux-thunk';

export const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    advices: advicesSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(thunkMiddleWare),
});

export default store;
