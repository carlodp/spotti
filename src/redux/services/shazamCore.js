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
        "f6683dd8demsha5ace0155f0e70cp1838fajsneeffb3d34364"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCharts: builder.query({ query: () => "/charts/track" }),
    getSongDetails: builder.query({
      query: (songid) => `/songs/get-details?key=${songid}`,
    }),
    getSongRelated: builder.query({
      query: (songid) =>
        `/shazam-songs/list-similarities?id=track-similarities-id-${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/get-details?id=${artistId}`,
    }),
    getArtistTopSongs: builder.query({
      query: (artistId) =>
        `/artists/get-top-songs?id=${artistId}`,
    }),
  }),
});

export const {
  useGetChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopSongsQuery,
} = shazamCoreApi;
