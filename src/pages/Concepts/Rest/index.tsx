import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const ConceptsRest = () => {
  return (
    <ContentPage
      title="Rest"
      paragraphs={paragraphs}
      nextRoute="/concepts/rest-full"
      backRoute="/concepts"
    />
  );
};
