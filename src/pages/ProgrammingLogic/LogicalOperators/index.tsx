import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const LogicalOperators = () => {
  return (
    <ContentPage
      title="Operadores Lógicos"
      paragraphs={paragraphs}
      nextRoute="/programmingLogic/conditional-if-else"
      backRoute="/programmingLogic"
    />
  );
};
