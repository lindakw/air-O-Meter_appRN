import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { airQualityAPI } from '../api/airQualityAPI';
import searchReducer from '../screens/search_screen/searchSlice'



export const store = configureStore({
  reducer: {
     [airQualityAPI.reducerPath]: airQualityAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(airQualityAPI.middleware),
})

setupListeners(store.dispatch)