import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const advicesSlice = createSlice({
  name: 'advices',
  initialState,
  reducers: {
    initialData: (state, { payload }) => {
      return [...payload.data];
    },
    addAdvice: (state, { payload }) => {
      return [...state, payload.advice];
    },
  },
});

// Export the actions
export const { initialData, addAdvice } = advicesSlice.actions;

// Export the reducer
export default advicesSlice.reducer;
