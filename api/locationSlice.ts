import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

export interface locationState {
  locationInfo: string
}

const initialState: locationState = {
  locationInfo: "",
}


const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    getLocation: (state, action: PayloadAction<string>) => {
      state.locationInfo = action.payload;
    },
  },
})

export const { getLocation } = locationSlice.actions;
export default locationSlice.reducer;