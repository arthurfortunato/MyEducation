import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const ForEach = () => {
  return (
    <ContentPage
      title="For Each"
      paragraphs={paragraphs}
      nextRoute="/programmingLogic"
      backRoute="/programmingLogic"
    />
  );
};
