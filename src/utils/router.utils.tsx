import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';

// Lazy loading of pages
const Home = lazy(() => import('../pages/Home'));
const Search = lazy(() => import('../pages/Search'));
const MovieDetail = lazy(() => import('../pages/movie/MovieDetail'));

export const enum ROUTES {
  HOME = '/',
  SEARCH = '/search',
  DETAIL = '/movie',
  UPCOMING = '/upcoming',
  POPULAR = '/popular',
  TOP_SELLERS = '/top-sellers',
}

export const HeaderRoutes = [
  { label: 'Upcoming', route: ROUTES.UPCOMING },
  { label: 'Popular', route: ROUTES.POPULAR },
  { label: 'Top Sellers', route: ROUTES.TOP_SELLERS },
] as const;

export const AppRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: ROUTES.DETAIL + '/:movieId',
    element: (
      <Layout>
        <MovieDetail />
      </Layout>
    ),
  },
  {
    path: ROUTES.SEARCH,
    element: (
      <Layout>
        <Search />
      </Layout>
    ),
  },
]);
