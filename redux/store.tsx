import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import modalsSlice from './slices/modalsSlice';
import paginationSlice from './slices/paginationSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Correct import for default local storage



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // List of reducers you want to persist; 'user' in this case
};

const rootReducer = combineReducers({
  modals: modalsSlice,
  user: userSlice,
  pagination: paginationSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
