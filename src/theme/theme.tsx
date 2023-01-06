import { extendTheme } from '@chakra-ui/react';

const fonts = {
  heading: '\'Outfit\', sans-serif',
  body: '\'Inter\', sans-serif',
};

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
};

const theme = extendTheme({
  colors: {
    white: '#fff',
    black: '#16161D',
    main: '#242A2D',
    secondary: {
      default: '#0577FF',
      hover: '#6baeff',
    },
    darkSection: '#1B1F2B',
  },
  fonts,
  breakpoints,
});

export default theme;
