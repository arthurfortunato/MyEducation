import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import { GlobalStyled } from "./styles/globalStyles";
import { Routers } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme.light || theme.dark}>
      <GlobalStyled />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
