import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Cart from "./Slice/cart";
import user from "./Slice/userSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootReducer = combineReducers({
   Cart,
   user, // Use `cart` as the key, not `Cart` for consistency
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Cart", "User"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);