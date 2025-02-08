import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TRepo } from "./types";

const baseUrl = "https://api.github.com";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getRepos: builder.query<TRepo[], { name: string; page?: number }>({
      query: ({ name, page = 1 }) =>
        `/users/${name}/repos?per_page=20&page=${page}`,
    }),
  }),
});

export const { useGetReposQuery } = api;
