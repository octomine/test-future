import { createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL, PER_PAGE } from "./constants";
import { ThunkApiConfig } from "./types";
import { addPage, setRepos } from "./slices";

const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfig>();

export const getRepos = createAppAsyncThunk(
  "repos",
  (_, { dispatch, getState }) => {
    const {
      params: { name },
    } = getState();

    return fetch(`${BASE_URL}/users/${name}/repos?per_page=${PER_PAGE}&page=1`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setRepos(data));
      });
  }
);

export const getPage = createAppAsyncThunk(
  "repos",
  (_, { dispatch, getState }) => {
    const {
      params: { name, page },
    } = getState();
    return fetch(
      `${BASE_URL}/users/${name}/repos?per_page=${PER_PAGE}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(addPage(data));
      });
  }
);
