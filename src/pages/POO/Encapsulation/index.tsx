import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Encapsulation = () => {
  return (
    <ContentPage
      title="Encapsulamento"
      paragraphs={paragraphs}
      nextRoute="/poo"
      backRoute="/poo"
    />
  );
};
