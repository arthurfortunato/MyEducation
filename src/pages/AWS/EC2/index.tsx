import React from "react";
import { Container } from "../../../components/Container";
import { HeaderContentCards } from "../../../components/HeaderContentCards";
import { BodyContainer } from "../../../components/BodyContainer";
import { Section } from "../../../components/Section";
import { ButtonContinue } from "../../../components/ButtonContinue";
import { ButtonNextContent } from "../../../components/ButtonNextContent";

import { paragraphs } from "./paragraphs";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const EC2 = () => {
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
    navigate("/aws/ec2-instance");
  };

  return (
    <Container>
      <HeaderContentCards loadingProgress={loadingProgress} backRoute="/aws" />

      <BodyContainer>
        <div ref={paragraphsContainer}>
          <Section title="Amazon Elastic Compute Cloud (EC2)">
            {paragraphs.map((paragraph, index) => {
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
