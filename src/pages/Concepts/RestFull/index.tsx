import { Container } from "../../../components/Container";
import { HeaderContentCards } from "../../../components/HeaderContentCards";
import { BodyContainer } from "../../../components/BodyContainer";
import { Section } from "../../../components/Section";
import { ButtonContinue } from "../../../components/ButtonContinue";
import { ButtonNextContent } from "../../../components/ButtonNextContent";

import { paragraphs } from "./paragraphs";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ConceptsRestFull = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [displayedParagraphs, setDisplayedParagraphs] = useState([0]);
  const [loadingProgress, setLoadingProgress] = useState(
    100 / paragraphs.length
  );

  const navigate = useNavigate();

  const paragraphsContainer = useRef<HTMLDivElement>(null);

  const handleNextParagraph = () => {
    const nextParagraph = currentParagraph + 1;
    setLoadingProgress(
      (prevProgress) => prevProgress + 100 / paragraphs.length
    );
    setDisplayedParagraphs([...displayedParagraphs, nextParagraph]);
    setCurrentParagraph(nextParagraph);

    const paragraphsEls = paragraphsContainer.current?.querySelectorAll("p");
    if (paragraphsEls) {
      const prevEl = paragraphsEls[currentParagraph];
      const nextEl = paragraphsEls[nextParagraph];
      prevEl?.classList.remove("show");
      nextEl?.classList.add("show");
      setTimeout(() => {
        prevEl?.classList.remove("fade-in");
        nextEl?.classList.add("fade-in");
      }, 0);
    }
  };

  useEffect(() => {
    paragraphsContainer.current
      ?.querySelector(
        `p:nth-child(n + ${displayedParagraphs.length + 1}):last-child`
      )
      ?.scrollIntoView({ behavior: "smooth" });
  });

  const handleNextContent = () => {
    navigate("/concepts/status-code");
  };

  return (
    <Container>
      <HeaderContentCards loadingProgress={loadingProgress} backRoute="/concepts" />

      <BodyContainer>
        <div ref={paragraphsContainer}>
          <Section title="RESTFULL">
            {paragraphs.map((paragraph, index) => {
              const isDisplayed = displayedParagraphs.includes(index);
              const className = isDisplayed ? "fade-in show" : "fade-in";
              return (
                <p key={index} className={className}>
                  {paragraph}
                </p>
              );
            })}
          </Section>
        </div>
      </BodyContainer>
      {currentParagraph < paragraphs.length - 1 && (
        <ButtonContinue onClick={handleNextParagraph}>
          Tap to Cotinue
        </ButtonContinue>
      )}
      {currentParagraph === paragraphs.length - 1 && (
        <ButtonNextContent onClick={handleNextContent}>Next</ButtonNextContent>
      )}
    </Container>
  );
};
