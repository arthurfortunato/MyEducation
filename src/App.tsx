import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import { GlobalStyled } from "./styles/globalStyles";
import { Routers } from "./routes";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeMode } from "./styles/theme/styles";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <ThemeMode onClick={toggleDarkMode}>
        {isDarkMode ? (
          <MdDarkMode size={32} />
        ) : (
          <MdLightMode size={32} color="#000" />
        )}
      </ThemeMode>
      <GlobalStyled />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
