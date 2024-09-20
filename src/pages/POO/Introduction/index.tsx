import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const IntroductionPOO = () => {
  return (
    <ContentPage
      title="Introdução"
      paragraphs={paragraphs}
      nextRoute="/poo/class"
      backRoute="/poo"
    />
  );
};