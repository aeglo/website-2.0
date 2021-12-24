import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em"
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
    main: "#242A2D",
    secondary: "#0577FF",
    dark: "#1c1d2c"
  },
  fonts: {
    heading: "brandon-grotesque",
    body: "brandon-grotesque"
  },
  breakpoints
});

export default theme;
