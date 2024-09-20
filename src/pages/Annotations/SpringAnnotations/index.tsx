import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const SpringAnnotations = () => {
  return (
    <ContentPage
      title="Spring Annotations"
      paragraphs={paragraphs}
      nextRoute="/annotations/stereotypes"
      backRoute="/annotations"
    />
  );
};
