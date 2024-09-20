import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Versioning = () => {
  return (
    <ContentPage
      title="Versionamento Semântico"
      paragraphs={paragraphs}
      nextRoute="/concepts/quizz"
      backRoute="/concepts"
    />
  );
};
