import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Polymorphism = () => {
  return (
    <ContentPage
      title="Polimorfismo"
      paragraphs={paragraphs}
      nextRoute="/poo/inheritance"
      backRoute="/poo"
    />
  );
};
