import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Customize material UI components
export const theme = createTheme({
  palette: {
    primary: {
      main: "#orange",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});