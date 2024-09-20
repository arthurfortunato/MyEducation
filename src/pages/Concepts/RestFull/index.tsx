import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const ConceptsRestFull = () => {
  return (
    <ContentPage
      title="RESTFUL"
      paragraphs={paragraphs}
      nextRoute="/concepts/status-code"
      backRoute="/concepts"
    />
  );
};
