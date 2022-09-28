import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { airQualityAPI } from '../api/airQualityAPI';
import cityNameReducer from '../api/cityNameSlice';


export const store = configureStore({
  reducer: {
     [airQualityAPI.reducerPath]: airQualityAPI.reducer,
     city: cityNameReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(airQualityAPI.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// cityNameSlice
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