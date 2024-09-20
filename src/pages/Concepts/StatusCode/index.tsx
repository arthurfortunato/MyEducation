import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const ConceptsStatusCode = () => {
  return (
    <ContentPage
      title="Status Code"
      paragraphs={paragraphs}
      nextRoute="/concepts/versioning"
      backRoute="/concepts"
    />
  );
};
