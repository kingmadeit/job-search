import { createSlice } from "@reduxjs/toolkit";
import { TSearchParam } from "../types/search";

const initialState: TSearchParam = {
  searchTerm: undefined,
  location: undefined
};

const searchSlice = createSlice({
  initialState,
  name: 'searchParams',
  reducers: {
    updateSearchParams: (state, action) => {
      state = action.payload;
    },
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    updateLocation: (state, action) => {
      state.location = action.payload;
    }
  }
});

export const { updateSearchParams, updateSearchTerm, updateLocation } = searchSlice.actions;
export default searchSlice.reducer;