import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TParams } from "../types";

const initialState: TParams = {
  name: "",
  page: 1,
};

const nameSlice = createSlice({
  name: "params",
  initialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
      state.page = 1;
    },
    increasePage: (state) => {
      state.page += 1;
    },
  },
});

export const { setName, increasePage } = nameSlice.actions;
export const params = nameSlice.reducer;
