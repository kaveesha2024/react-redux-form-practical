import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/slice/formSlice.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["product"],
};
const rootReducer = combineReducers({
  product: formReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {
    value: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
const persist = persistStore(store);
export { persist, store };
