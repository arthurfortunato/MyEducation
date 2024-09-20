import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const CoreContextComponentScan = () => {
  return (
    <ContentPage
      title="Core Context - @ComponentScan"
      paragraphs={paragraphs}
      nextRoute="/annotations"
      backRoute="/annotations"
    />
  );
};
