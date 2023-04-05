import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Concepts } from "../pages/Concepts";
import { ConceptsApi } from "../pages/Concepts/Api";
import { ConceptsRest } from "../pages/Concepts/Rest";
import { ConceptsRestFull } from "../pages/Concepts/RestFull";
import { ConceptsStatusCode } from "../pages/Concepts/StatusCode";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeMode } from "../styles/theme/styles";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

export const ConceptsRoutes = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Routes>
        <Route path="/concepts" element={<Concepts />} />
      </Routes>
      <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
        <ThemeMode onClick={toggleDarkMode}>
          {isDarkMode ? <MdDarkMode size={32} /> : <MdLightMode size={32} />}
        </ThemeMode>
        <Routes>
          <Route path="/concepts/api" element={<ConceptsApi />} />
          <Route path="/concepts/rest" element={<ConceptsRest />} />
          <Route path="/concepts/rest-full" element={<ConceptsRestFull />} />
          <Route
            path="/concepts/status-code"
            element={<ConceptsStatusCode />}
          />
        </Routes>
      </ThemeProvider>
    </>
  );
};
