import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './utils/router.utils';

import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<>Loading here...</>}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={AppRouter} />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
