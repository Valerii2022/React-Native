import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  reducers: {
    add(state, action) {
      state.users.push(action.payload);
    },
    remove(state, action) {
      state.users = [];
    },
  },
});

const authSlice = createSlice({
  name: "isAuth",
  initialState: { isAuth: false },
  reducers: {
    authorized(state) {
      state.isAuth = true;
    },
    unauthorized(state, action) {
      state.isAuth = false;
    },
  },
});

const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [] },
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
    },
    removePost(state, action) {
      state.posts = [];
    },
  },
});

const currentUserPostsSlice = createSlice({
  name: "currentPosts",
  initialState: { currentPosts: [] },
  reducers: {
    addCurrentPosts(state, action) {
      state.currentPosts = [...action.payload];
      console.log(state);
    },
    removeCurrentPosts(state, action) {
      state.currentPosts = [];
      console.log(state);
    },
  },
});

const commentsSlice = createSlice({
  name: "comments",
  initialState: { comments: [] },
  reducers: {
    addComment(state, action) {
      state.comments.push(action.payload);
    },
    removeComment(state, action) {
      state.comments = [];
    },
  },
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);
export const authReducer = persistReducer(persistConfig, authSlice.reducer);
export const postsReducer = persistReducer(persistConfig, postsSlice.reducer);
export const currentPostsReducer = persistReducer(
  persistConfig,
  currentUserPostsSlice.reducer
);
export const commentsReducer = persistReducer(
  persistConfig,
  commentsSlice.reducer
);

// export const rootReducer = usersSlice.reducer;
export const { add, remove } = usersSlice.actions;
export const { authorized, unauthorized } = authSlice.actions;
export const { addPost, removePost } = postsSlice.actions;
export const { addCurrentPosts, removeCurrentPosts } =
  currentUserPostsSlice.actions;
export const { addComment, removeComment } = commentsSlice.actions;

// Selectors
export const usersNames = (state) => state.users.users;
export const currentAuth = (state) => state.isAuth.isAuth;
export const posts = (state) => state.posts.posts;
export const currentPosts = (state) => state.currentPosts.currentPosts;
export const comments = (state) => state.comments.comments;
