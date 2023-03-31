import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "9dbb639062msh5ad698ee42ba06fp19079cjsne230729879fa"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCharts: builder.query({ query: (genre) => `/charts/track?listId=${genre}` }),
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
    getSongsBySearch: builder.query({ query : (searchTerm) => `/search?term=${searchTerm}`}),
  }),
});

export const {
  useGetChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetArtistTopSongsQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
