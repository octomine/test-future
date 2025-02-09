import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: "",
  reducers: {
    setName: (_, { payload }: PayloadAction<string>) => payload,
  },
});

export const { setName } = nameSlice.actions;
export const name = nameSlice.reducer;
