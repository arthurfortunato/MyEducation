import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Select = () => {
  return (
    <ContentPage
      title="Buscar Dados"
      paragraphs={paragraphs}
      nextRoute="/mysql/where"
      backRoute="/mysql"
    />
  );
};
