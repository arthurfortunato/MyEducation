import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const CoreContextConfiguration = () => {
  return (
    <ContentPage
      title="Core Context - @Configuration"
      paragraphs={paragraphs}
      nextRoute="/annotations/core-context-scan"
      backRoute="/annotations"
    />
  );
};
