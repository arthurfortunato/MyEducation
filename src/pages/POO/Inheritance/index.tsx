import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Inheritance = () => {
  return (
    <ContentPage
      title="Herança"
      paragraphs={paragraphs}
      nextRoute="/poo/encapsulation"
      backRoute="/poo"
    />
  );
};
