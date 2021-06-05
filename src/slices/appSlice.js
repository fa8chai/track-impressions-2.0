import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setItem: (state, action) => {
        state.item = action.payload
    },
  },
});

export const { setItem } = appSlice.actions;

export const selectItem = (state) => state.app.item;

export default appSlice.reducer;