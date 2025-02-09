import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PER_PAGE } from "../constants";
import { addPage } from "./repos";
import { setName } from "./name";

const listSlice = createSlice({
  name: "listIsFull",
  initialState: false,
  reducers: {
    setListIsFull: (_, { payload }: PayloadAction<boolean>) => payload,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPage, (_, { payload }) => payload.length < PER_PAGE)
      .addCase(setName, () => false);
  },
});

export const { setListIsFull } = listSlice.actions;
export const list = listSlice.reducer;
