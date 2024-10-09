import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const AbstractClass = () => {
  return (
    <ContentPage
      title="Classe Abstrata"
      paragraphs={paragraphs}
      nextRoute="/java/generics"
      backRoute="/java"
    />
  );
};
