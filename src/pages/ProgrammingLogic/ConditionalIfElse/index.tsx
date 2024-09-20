import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const ConditionalIfElse = () => {
  return (
    <ContentPage
      title="If Else"
      paragraphs={paragraphs}
      nextRoute="/programmingLogic/conditional-ternary"
      backRoute="/programmingLogic"
    />
  );
};
