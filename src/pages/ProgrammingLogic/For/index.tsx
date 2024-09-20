import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const For = () => {
  return (
    <ContentPage
      title="For"
      paragraphs={paragraphs}
      nextRoute="/programmingLogic/for-each"
      backRoute="/programmingLogic"
    />
  );
};
