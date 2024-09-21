import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Implementations = () => {
  return (
    <ContentPage
      title="Implementações"
      paragraphs={paragraphs}
      nextRoute="/collections/implementations/comments"
      backRoute="/collections"
    />
  );
};
