import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Queue = () => {
  return (
    <ContentPage
      title="Queue"
      paragraphs={paragraphs}
      nextRoute="/collections/map"
      backRoute="/collections"
    />
  );
};
