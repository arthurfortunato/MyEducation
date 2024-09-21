import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const ImplementationsComments = () => {
  return (
    <ContentPage
      title="Implementações"
      paragraphs={paragraphs}
      nextRoute="/collections/list"
      backRoute="/collections"
    />
  );
};
