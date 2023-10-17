import { createSlice } from '@reduxjs/toolkit';
import { handleFulfilled, handlePending, handleRejected } from './helpers';

const initialState = {
  isLoading: false,
  error: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const appReducer = appSlice.reducer;