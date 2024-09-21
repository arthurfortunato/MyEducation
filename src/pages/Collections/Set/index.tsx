import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Set = () => {
  return (
    <ContentPage
      title="Set"
      paragraphs={paragraphs}
      nextRoute="/collections/queue"
      backRoute="/collections"
    />
  );
};
