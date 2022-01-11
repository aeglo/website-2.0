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
    white: "#fff",
    black: "#16161D",
    main: "#242A2D",
    secondary: {
      default: "#0577FF",
      hover: "#6baeff"
    },
    dark: "#1c1d2c",
    darkSection: "#1B1F2B"
  },
  fonts: {
    heading: "brandon-grotesque",
    body: "brandon-grotesque"
  },
  breakpoints
});

export default theme;
