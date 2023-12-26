import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '1ebfcb7a20mshda5c7d2dd32f4b4p131d00jsn8a92240f2389');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSong: builder.query({ query: ({ key }) => 'songs/v2/get-details/1217912247' }),
    getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
  }),
});
export const {
  useGetTopChartsQuery,
  useGetSongQuery,
  useGetSongsByCountryQuery,
} = shazamCoreApi;
