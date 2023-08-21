import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import rootReducer from "./rootReducer";

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    add(state, action) {
      console.log("hello");
    },
  },
});

// export const rootReducer = usersSlice.reducer;

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const reducer = persistReducer(persistConfig, usersSlice.reducer);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

// export const { add } = usersSlice.actions;
export default { store, persistor };
