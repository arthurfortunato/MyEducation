import { ReactNode } from "react";
import { StyledSection } from "./styles";

type SectionProps = {
  title?: string;
  children?: ReactNode;
};

export const Section = ({ title, children }: SectionProps) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  );
};
