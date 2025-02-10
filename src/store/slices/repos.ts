import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PER_PAGE } from "../constants";
import { TRepo, TRepos } from "../types";
import { setName } from "./params";

const initialState: TRepos = {
  list: [],
  isFull: false,
  isLoading: false,
};

const repoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setRepos: (state, { payload }: PayloadAction<TRepo[]>) => {
      state.list = payload;
    },
    addPage: (state, { payload }: PayloadAction<TRepo[]>) => {
      state.list = [...state.list, ...payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setName, (state) => {
        state.list = [];
      })
      .addCase(addPage, (state, { payload }) => {
        state.isFull = payload.length < PER_PAGE;
      });
  },
});

export const { setRepos, addPage } = repoSlice.actions;
export const repos = repoSlice.reducer;
