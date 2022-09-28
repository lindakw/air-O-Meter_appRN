import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

export interface cityState {
  value: string
}

const initialState: cityState = {
  value: "",
}


const cityNameSlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    getCity: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
})

export const { getCity } = cityNameSlice.actions;
export default cityNameSlice.reducer;