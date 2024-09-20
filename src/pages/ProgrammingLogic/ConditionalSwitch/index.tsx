import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const ConditionalSwitch= () => {
  return (
    <ContentPage
      title="Switch"
      paragraphs={paragraphs}
      nextRoute="/programmingLogic/while"
      backRoute="/programmingLogic"
    />
  );
};
