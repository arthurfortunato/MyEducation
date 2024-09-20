import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const JDBC = () => {
  return (
    <ContentPage
      title="JDBC"
      paragraphs={paragraphs}
      nextRoute="/java/maven"
      backRoute="/java"
    />
  );
};
