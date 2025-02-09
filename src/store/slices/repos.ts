import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TRepo } from "../types";
import { setName } from "./name";

const initialState: TRepo[] = [];

const repoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setRepos: (_, { payload }: PayloadAction<TRepo[]>) => payload,
    addPage: (state, { payload }: PayloadAction<TRepo[]>) => [
      ...state,
      ...payload,
    ],
  },
  extraReducers: (builder) => {
    builder.addCase(setName, () => []);
  },
});

export const { setRepos, addPage } = repoSlice.actions;
export const repos = repoSlice.reducer;
