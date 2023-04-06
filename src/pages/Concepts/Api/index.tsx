import { Container, BodyContainerStyled } from "./styles";

import { paragraphs } from "./paragraphs";

import { ButtonContinue } from "../../../components/ButtonContinue";
import { ButtonNextContent } from "../../../components/ButtonNextContent";
import { Section } from "../../../components/Section";
import { HeaderContentCards } from "../../../components/HeaderContentCards";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../../styles/theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeMode } from "../../../styles/theme/styles";

export const ConceptsApi = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [displayedParagraphs, setDisplayedParagraphs] = useState([0]);
  const [loadingProgress, setLoadingProgress] = useState(
    100 / paragraphs.length
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigate = useNavigate();

  const handleNextParagraph = () => {
    const nextParagraph = currentParagraph + 1;
    setLoadingProgress(
      (prevProgress) => prevProgress + 100 / paragraphs.length
    );
    setDisplayedParagraphs([...displayedParagraphs, nextParagraph]);
    setCurrentParagraph(nextParagraph);
  };

  const handleNextContent = () => {
    navigate("/concepts/rest");
  };
 
  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <Container>
        <ThemeMode onClick={toggleDarkMode}>
          {isDarkMode ? <MdDarkMode size={32} /> : <MdLightMode size={32} />}
        </ThemeMode>
        <HeaderContentCards
          loadingProgress={loadingProgress}
          backRoute="/concepts"
        />

        <BodyContainerStyled>
          <div>
            <Section title="API">
              {paragraphs.map((paragraph, index) => {
                if (displayedParagraphs.includes(index)) {
                  return <p key={index}>{paragraph}</p>;
                }
                return null;
              })}
            </Section>
          </div>
        </BodyContainerStyled>
        {currentParagraph < paragraphs.length - 1 && (
          <ButtonContinue onClick={handleNextParagraph}>
            Tap to Cotinue
          </ButtonContinue>
        )}
        {currentParagraph === paragraphs.length - 1 && (
          <ButtonNextContent onClick={handleNextContent}>
            Next
          </ButtonNextContent>
        )}
      </Container>
    </ThemeProvider>
  );
};
