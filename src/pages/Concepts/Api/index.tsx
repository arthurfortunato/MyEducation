import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const ConceptsApi = () => {
  return (
    <ContentPage
      title="API"
      paragraphs={paragraphs}
      nextRoute="/concepts/rest"
      backRoute="/concepts"
    />
  );
};
