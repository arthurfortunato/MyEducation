import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Commands = () => {
  return (
    <ContentPage
      title="Principais Comandos"
      paragraphs={paragraphs}
      nextRoute="/docker/example-react"
      backRoute="/docker"
    />
  );
};
