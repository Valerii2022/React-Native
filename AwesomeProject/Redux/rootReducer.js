import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    add(state, action) {
      state.users.push(action.payload);
      console.log(state);
    },
    remove(state, action) {
      state.users = [];
      console.log(state);
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuth: false },
  reducers: {
    authorized(state, action) {
      state.users = true;
    },
    unauthorized(state, action) {
      state.users = false;
    },
  },
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);
export const authReducer = persistReducer(persistConfig, authSlice.reducer);

// export const rootReducer = usersSlice.reducer;
export const { add, remove } = usersSlice.actions;
export const { authorized, unauthorized } = authSlice.actions;

// Selectors
export const usersNames = (state) => state.users;
