import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

export interface cityState {
  cityName: string
}

const initialState: cityState = {
  cityName: "",
}


const cityNameSlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    getCity: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload;
    },
  },
})

export const { getCity } = cityNameSlice.actions;
export default cityNameSlice.reducer;