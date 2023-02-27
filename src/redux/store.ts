import { configureStore } from '@reduxjs/toolkit';
import favoriteSlice from './states/favorites';

export interface AppStore {
  favorites: any;
}

export default configureStore<AppStore>({
  reducer: {
    favorites: favoriteSlice.reducer,
  },
});
