import { configureStore } from '@reduxjs/toolkit';
import favoriteSlice from './states/favorites';
import { Movie } from '../models/Movie';

export interface AppStore {
  favorites: Movie[];
}

export default configureStore<AppStore>({
  reducer: {
    favorites: favoriteSlice.reducer,
  },
});
