import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
        (state, { payload }) => {
          state.error = payload;
        }
      ),
});

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
