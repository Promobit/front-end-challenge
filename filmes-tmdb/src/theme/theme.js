import { createTheme } from "@mui/material";
import { orange, grey, white, black } from "./color";
 
export const themeMAIN = createTheme({
  palette: {
    primary: {
      main: '#001e3c',
      contrastText: black,
    },
    secondary: {
      main: orange,
    },
    bar: {
      main: orange,
      contrastText: black,
    },
    bar2: {
      main: orange,
      contrastText: orange,
    },
    success: {
      main: orange,
    },
  }
});
