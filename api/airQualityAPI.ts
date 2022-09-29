import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {API_KEY} from "../.private";


export const airQualityAPI = createApi({
  reducerPath: "airQualityAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.waqi.info/feed/`
  }),
  endpoints: (build) => ({
    getAQI: build.query({
      query: (city) => `${city}/?token=${API_KEY}`
    })
  })
})


export const {useGetAQIQuery} = airQualityAPI