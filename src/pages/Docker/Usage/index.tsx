import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Usage = () => {
  return (
    <ContentPage
      title="Utilização"
      paragraphs={paragraphs}
      nextRoute="/docker/commands"
      backRoute="/docker"
    />
  );
};
