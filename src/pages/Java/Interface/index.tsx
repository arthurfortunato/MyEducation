import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Interface = () => {
  return (
    <ContentPage
      title="Interface"
      paragraphs={paragraphs}
      nextRoute="/java/abstract-class"
      backRoute="/java"
    />
  );
};