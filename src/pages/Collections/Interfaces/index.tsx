import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Interfaces = () => {
  return (
    <ContentPage
      title="Interfaces"
      paragraphs={paragraphs}
      nextRoute="/collections/implementations"
      backRoute="/collections"
    />
  );
};
