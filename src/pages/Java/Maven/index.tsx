import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Maven = () => {
  return (
    <ContentPage
      title="Maven"
      paragraphs={paragraphs}
      nextRoute="/java/springboot"
      backRoute="/java"
    />
  );
};
