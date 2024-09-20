import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const DoWhile= () => {
  return (
    <ContentPage
      title="Do-While"
      paragraphs={paragraphs}
      nextRoute="/programmingLogic/for"
      backRoute="/programmingLogic"
    />
  );
};
