import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Map = () => {
  return (
    <ContentPage
      title="Map"
      paragraphs={paragraphs}
      nextRoute="/collections"
      backRoute="/collections"
    />
  );
};
