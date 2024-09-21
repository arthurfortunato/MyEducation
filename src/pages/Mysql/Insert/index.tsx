import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Insert = () => {
  return (
    <ContentPage
      title="Inserir Dados"
      paragraphs={paragraphs}
      nextRoute="/mysql/select"
      backRoute="/mysql"
    />
  );
};
