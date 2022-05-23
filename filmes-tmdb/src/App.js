import { Router } from "./router/Router";
import GlobalState from './global/globalState'
import { ThemeProvider } from "@mui/material";
import { themeMAIN } from './theme/theme'
function App() {
  return (
    <ThemeProvider theme={themeMAIN} >
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
