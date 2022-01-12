import blogsList from '../data/blogsList';
import { createSlice } from '@reduxjs/toolkit';

const initialState = blogsList;

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    initialData: (state, { payload }) => {
      return [...payload.data];
    },
    addLike: (state, { payload }) => {
      const newState = [...state]; // Copy the current state
      for (const blog of newState) {
        if (blog.url === payload.url) {
          blog.likes += 1;
        }
      }
      return [...newState];
    },
  },
});

// Export the actions
export const { initialData, addLike } = blogsSlice.actions;

// Export the reducer
export default blogsSlice.reducer;
