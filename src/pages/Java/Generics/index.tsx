import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Generics = () => {
  return (
    <ContentPage
      title="Generics"
      paragraphs={paragraphs}
      nextRoute="/java"
      backRoute="/java"
    />
  );
};
