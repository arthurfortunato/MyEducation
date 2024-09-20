import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const JVMvsJDK = () => {
  return (
    <ContentPage
      title="JVM vs JDK"
      paragraphs={paragraphs}
      nextRoute="/java/jdbc"
      backRoute="/java"
    />
  );
};
