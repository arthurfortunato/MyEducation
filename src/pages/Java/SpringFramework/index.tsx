import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const SpringFramework = () => {
  return (
    <ContentPage
      title="Spring Framework"
      paragraphs={paragraphs}
      nextRoute="/java/jvm"
      backRoute="/java"
    />
  );
};
