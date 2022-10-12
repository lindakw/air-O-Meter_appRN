import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { airQualityAPI } from '../api/airQualityAPI';
import locationReducer from '../api/locationSlice';


export const store = configureStore({
  reducer: {
     [airQualityAPI.reducerPath]: airQualityAPI.reducer,
     location: locationReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(airQualityAPI.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
