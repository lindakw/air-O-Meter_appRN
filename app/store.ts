import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { airQualityAPI } from '../api/airQualityAPI';
import cityNameReducer from '../api/cityNameSlice';
import locationReducer from '../api/locationSlice';
import geoLoadingReducer from '../api/geoLoadingSlice'


export const store = configureStore({
  reducer: {
     [airQualityAPI.reducerPath]: airQualityAPI.reducer,
     city: cityNameReducer,
     location: locationReducer,
     geoLoading: geoLoadingReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(airQualityAPI.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
