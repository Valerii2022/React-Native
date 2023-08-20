import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    add(state, action) {
      console.log("hello");
    },
  },
});

export const rootReducer = usersSlice;
export const { add } = usersSlice.actions;

// Selectors
// export const usersNames = (state) => state.users;
