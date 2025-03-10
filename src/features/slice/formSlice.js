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
    resetFormInputFieldAreas: (state) => {
      state.basicProductDetails = {}
    },
  },
});
export const { storeProductBasicDetails,resetFormInputFieldAreas } = formSlice.actions;
export default formSlice.reducer;
