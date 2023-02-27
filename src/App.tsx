import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import AppStore from './redux/store';
import { AppRouter } from './utils/router.utils';

import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<>Loading here...</>}>
      <Provider store={AppStore}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={AppRouter} />
        </QueryClientProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
