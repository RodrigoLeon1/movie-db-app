import { ChakraProvider } from '@chakra-ui/react';
import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './utils/router.utils';
import { AppTheme } from './utils/theme.utils';

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider theme={AppTheme}>
      <Suspense fallback={<>Loading here...</>}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={AppRouter} />
        </QueryClientProvider>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
