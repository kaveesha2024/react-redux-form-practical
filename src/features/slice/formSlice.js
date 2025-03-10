import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    basicProductDetails: {},
  },
  reducers: {
    storeProductBasicDetails: (state, action) => {
      state.basicProductDetails = action.payload;
    },
  },
});
export const { storeProductBasicDetails } = formSlice.actions;
export default formSlice.reducer;
