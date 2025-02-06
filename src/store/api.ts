import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.github.com";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getRepos: builder.query({
      query: (name: string) => `/users/${name}/repos`,
    }),
  }),
});

export const { useGetReposQuery } = api;
