import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const JVM = () => {
  return (
    <ContentPage
      title="JVM"
      paragraphs={paragraphs}
      nextRoute="/java/jdk"
      backRoute="/java"
    />
  );
};
