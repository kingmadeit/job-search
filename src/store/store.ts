import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from './jobsSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    search: searchReducer
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


