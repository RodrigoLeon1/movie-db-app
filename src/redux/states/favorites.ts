import { createSlice } from '@reduxjs/toolkit';
import { Favorite } from '../../models/Favorite';
import { Movie } from '../../models/Movie';
import { persistValueInLocalStorage, removeKeyInLocalStorage } from '../../utils/localstorage.util';

export const FAVORITE_KEY = 'favorites';

export const EmptyFavoriteState: { favorites: Movie[] } = {
  favorites: [],
};

const initializeFavorites: { favorites: Movie[] } = localStorage.getItem(FAVORITE_KEY)
  ? JSON.parse(localStorage.getItem(FAVORITE_KEY) as string)
  : EmptyFavoriteState;

export const favoriteSlice = createSlice({
  name: FAVORITE_KEY,
  initialState: initializeFavorites,
  reducers: {
    toggleFavorite: (state, action) => {
      let currentFavorites;
      const movie: Movie = action.payload;

      if (state.favorites.find((m) => m.id === movie.id)) {
        currentFavorites = { favorites: [...state.favorites.filter((m) => m.id !== movie.id)] };
      } else {
        currentFavorites = { favorites: [...state.favorites, action.payload] };
      }

      persistValueInLocalStorage<{ favorites: Movie[] }>(FAVORITE_KEY, currentFavorites);
      return currentFavorites;
    },

    // exist: (state, action) => {
    //   const movie: Movie = action.payload;
    //   return state.favorites.find((m: Movie) => m.id === movie.id);
    // },

    resetFavorites: () => {
      removeKeyInLocalStorage(FAVORITE_KEY);
      return EmptyFavoriteState;
    },
  },
});

export const { toggleFavorite, resetFavorites } = favoriteSlice.actions;

export default favoriteSlice;
