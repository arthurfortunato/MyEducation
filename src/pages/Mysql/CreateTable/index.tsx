import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const CreateTable = () => {
  return (
    <ContentPage
      title="Criar Tabela"
      paragraphs={paragraphs}
      nextRoute="/mysql/insert"
      backRoute="/mysql"
    />
  );
};
