import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0459bf44e3mshfd26d60bab032c4p1300c6jsnb10712feb445",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "0459bf44e3mshfd26d60bab032c4p1300c6jsnb10712feb445"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCharts: builder.query({ query: () => "/charts/track" }),
  }),
});

export const { useGetChartsQuery } = shazamCoreApi;
