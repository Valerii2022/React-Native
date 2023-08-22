import { configureStore } from "@reduxjs/toolkit";
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
import {
  usersReducer,
  authReducer,
  postsReducer,
  currentPostsReducer,
  commentsReducer,
} from "./rootReducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    isAuth: authReducer,
    posts: postsReducer,
    currentPosts: currentPostsReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
