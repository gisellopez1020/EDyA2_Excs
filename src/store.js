import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './features/counterSlice';
import { pokemonApi } from './features/pokemonSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});