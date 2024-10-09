import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const LiskovSubstitutionPrincipal = () => {
  return (
    <ContentPage
      title="Liskov Substitution Principle (LSP)"
      paragraphs={paragraphs}
      nextRoute="/java"
      backRoute="/java"
    />
  );
};
