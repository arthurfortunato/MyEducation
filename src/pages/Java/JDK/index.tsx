import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const JDK = () => {
  return (
    <ContentPage
      title="JDK"
      paragraphs={paragraphs}
      nextRoute="/java/jvm-jdk"
      backRoute="/java"
    />
  );
};
