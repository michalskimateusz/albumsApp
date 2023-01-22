import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import albumsReducer from "./albumsSlice/albumsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, albumsReducer);

export const store = configureStore({
  reducer: {
    albums: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
