import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const CreateDatabase = () => {
  return (
    <ContentPage
      title="Criar Banco de Dados"
      paragraphs={paragraphs}
      nextRoute="/mysql/create-table"
      backRoute="/mysql"
    />
  );
};
