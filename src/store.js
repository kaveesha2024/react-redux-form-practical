import {configureStore} from "@reduxjs/toolkit";
import formReducer from "./features/slice/formSlice.js";

export default configureStore({
    reducer: {
        value: formReducer,
    },
})