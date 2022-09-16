import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let env = process.env.API_KEY

export const airQualityAPI = createApi({
  reducerPath: "airQualityAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.waqi.info/feed/?token=${env}`
  }),
  endpoints: (build) => ({
    getAQI: build.query({
      query: (city) => `/${city}`
    })
  })
})


export const {useGetAQIQuery} = airQualityAPI