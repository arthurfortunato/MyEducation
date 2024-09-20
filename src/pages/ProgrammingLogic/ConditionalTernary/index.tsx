import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const ConditionalTernary = () => {
  return (
    <ContentPage
      title="Operador Ternário"
      paragraphs={paragraphs}
      nextRoute="/programmingLogic/conditional-switch"
      backRoute="/programmingLogic"
    />
  );
};
