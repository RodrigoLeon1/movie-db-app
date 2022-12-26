import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';

// Lazy loading of pages
const Home = lazy(() => import('../pages/Home'));
const Search = lazy(() => import('../pages/Search'));

export const enum ROUTES {
  HOME = '/',
  SEARCH = '/search',
}

export const HeaderRoutes = [
  { label: 'Home', route: ROUTES.HOME },
  { label: 'Search', route: ROUTES.SEARCH },
];

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
    path: ROUTES.SEARCH,
    element: (
      <Layout>
        <Search />
      </Layout>
    ),
  },
]);
