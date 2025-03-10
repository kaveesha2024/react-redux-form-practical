import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    basicProductDetails: {},
  },
  reducers: {
    getProductBasicDetails: (state, action) => {
      console.log(action.payload);
    },
  },
});
export const { getProductBasicDetails } = formSlice.actions;
export default formSlice.reducer;
