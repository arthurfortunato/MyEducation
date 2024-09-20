import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const ClassAndObject = () => {
  return (
    <ContentPage
      title="Classe"
      paragraphs={paragraphs}
      nextRoute="/poo/polymorphism"
      backRoute="/poo"
    />
  );
};
