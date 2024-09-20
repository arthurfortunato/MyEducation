import { Container } from "../Container";
import { HeaderContentCards } from "../HeaderContentCards";
import { BodyContainer } from "../BodyContainer";
import { Section } from "../Section";
import { ButtonContinue } from "../ButtonContinue";
import { ButtonNextContent } from "../ButtonNextContent";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ContentPageProps {
  title: string;
  paragraphs: any;
  nextRoute: string;
  backRoute: string;
}

export const ContentPage: React.FC<ContentPageProps> = ({
  title,
  paragraphs,
  nextRoute,
  backRoute,
}) => {
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
  };

  useEffect(() => {
    paragraphsContainer.current
      ?.querySelector(
        `p:nth-child(n + ${displayedParagraphs.length + 1}):last-child`
      )
      ?.scrollIntoView({ behavior: "smooth" });
  });

  const handleNextContent = () => {
    navigate(nextRoute);
  };

  return (
    <Container>
      <HeaderContentCards loadingProgress={loadingProgress} backRoute={backRoute} />

      <BodyContainer>
        <div ref={paragraphsContainer}>
          <Section title={title}>
            {paragraphs.map((paragraph: any, index: any) => {
              if (displayedParagraphs.includes(index)) {
                return (
                  <p key={index} className="fade-in">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </Section>
        </div>
      </BodyContainer>
      {currentParagraph < paragraphs.length - 1 && (
        <ButtonContinue onClick={handleNextParagraph}>
          Tap to Continue
        </ButtonContinue>
      )}
      {currentParagraph === paragraphs.length - 1 && (
        <ButtonNextContent onClick={handleNextContent}>Next</ButtonNextContent>
      )}
    </Container>
  );
};
