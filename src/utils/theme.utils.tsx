import { extendTheme } from '@chakra-ui/react';

export const AppTheme = extendTheme({
  fonts: {
    body: 'Montserrat',
  },
  sizes: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1500px',
    },
  },
});
