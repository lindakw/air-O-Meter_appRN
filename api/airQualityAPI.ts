import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {API_KEY} from "../.private";


export const airQualityAPI = createApi({
  reducerPath: "airQualityAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.waqi.info/feed/`
    //https://api.waqi.info/search/?token=b36128c36044e4afafa60e067d4a4f9f4e29bb70&keyword=fresno
    //https://api.waqi.info/feed/fresno/?token=b36128c36044e4afafa60e067d4a4f9f4e29bb70
  }),
  endpoints: (build) => ({
    getAQI: build.query({
      query: (city) => `${city}/?token=${API_KEY}`
    })
  })
})


export const {useGetAQIQuery} = airQualityAPI