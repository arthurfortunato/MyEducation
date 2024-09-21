import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const List = () => {
  return (
    <ContentPage
      title="List"
      paragraphs={paragraphs}
      nextRoute="/collections/set"
      backRoute="/collections"
    />
  );
};
