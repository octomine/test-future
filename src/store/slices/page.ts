import { createSlice } from "@reduxjs/toolkit";
import { setName } from "./name";

const pageSlice = createSlice({
  name: "page",
  initialState: 1,
  reducers: {
    increasePage: (state) => state + 1,
  },
  extraReducers: (builder) => {
    builder.addCase(setName, () => 1);
  },
});

export const { increasePage } = pageSlice.actions;
export const page = pageSlice.reducer;
