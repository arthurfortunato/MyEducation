import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Introduction = () => {
  return (
    <ContentPage
      title="Introdução"
      paragraphs={paragraphs}
      nextRoute="/docker/usage"
      backRoute="/docker"
    />
  );
};
