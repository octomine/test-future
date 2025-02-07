import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TRepo } from "./types";

const baseUrl = "https://api.github.com";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getRepos: builder.query<TRepo[], string>({
      query: (name: string) => `/users/${name}/repos`,
    }),
  }),
});

export const { useGetReposQuery } = api;
