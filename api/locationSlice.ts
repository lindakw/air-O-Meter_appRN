import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface locationState {
  cityName: string,
  locationInfo: string,
  useLocationData: boolean,
}

const initialState: locationState = {
  cityName: "",
  locationInfo: "",
  useLocationData: false,
}


const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.locationInfo = action.payload;
    },
    setUseLocationData: (state, action: PayloadAction<boolean>) => {
      state.useLocationData = action.payload;
    },
  },
})

export const { setCity, setLocation, setUseLocationData } = locationSlice.actions;
export default locationSlice.reducer;