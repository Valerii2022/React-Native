import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    add(state, action) {
      state.users.push(action.payload);
      console.log(state);
    },
    remove(state, action) {
      console.log(state);
    },
  },
});

export const rootReducer = usersSlice.reducer;
export const { add } = usersSlice.actions;

// Selectors
export const usersNames = (state) => state.users;
