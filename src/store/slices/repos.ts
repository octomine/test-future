import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PER_PAGE } from "../constants";
import { TRepo, TRepos } from "../types";
import { setName } from "./params";

const initialState: TRepos = {
  list: [],
  isFull: false,
  isLoading: false,
  error: "",
};

const repoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setRepos: (state, { payload }: PayloadAction<TRepo[]>) => {
      state.list = payload;
      state.isLoading = false;
    },
    addPage: (state, { payload }: PayloadAction<TRepo[]>) => {
      state.list = [...state.list, ...payload];
      state.isLoading = false;
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setName, (state) => {
        state.list = [];
        state.isLoading = false;
        state.error = "";
      })
      .addCase(addPage, (state, { payload }) => {
        state.isFull = payload.length < PER_PAGE;
        state.isLoading = false;
      });
  },
});

export const { setRepos, addPage, setIsLoading, setError } = repoSlice.actions;
export const repos = repoSlice.reducer;
